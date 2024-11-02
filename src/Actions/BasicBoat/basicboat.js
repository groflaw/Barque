import { Backend_API } from "../../Utils/Constant";
import axios from "axios";

import {
  getalltypes,
  getallbrands,
  getenginecount,
  getbathroomcount,
  getcabinscount,
  getcapacity,
  getpowers,
} from "../../Store/BasicBoat";
import { setLoading, setCurboat } from "../../Store/Global";
import { isValidNumber, isValidString } from "../../Utils/Validate";

export const getAllBoatTypes = () => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/boats/getallboattype`);
    if (response.data.flag == true) {
      dispatch(getalltypes(response.data.data));
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data.";
    return { errors };
  }
  return {};
};

export const getAllBoatBrands = () => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/boats/getallboatbrand`);
    if (response.data.flag == true) {
      dispatch(getallbrands(response.data.data));
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data.";
    return { errors };
  }
  return {};
};

export const getEnginesCount = () => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/boats/getEnginesCount`);
    if (response.data.flag == true) {
      dispatch(getenginecount(response.data.data));
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data.";
    return { errors };
  }
  return {};
};

export const getBathroomCount = () => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/boats/getBathroomCount`);
    if (response.data.flag == true) {
      dispatch(getbathroomcount(response.data.data));
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data.";
    return { errors };
  }
  return {};
};

export const getCabinscount = () => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/boats/getCabinscount`);
    if (response.data.flag == true) {
      dispatch(getcabinscount(response.data.data));
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data.";
    return { errors };
  }
  return {};
};

export const getCapacity = () => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/boats/getCapacity`);
    if (response.data.flag == true) {
      dispatch(getcapacity(response.data.data));
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data.";
    return { errors };
  }
  return {};
};

export const getPowers = () => async (dispatch) => {
  let errors = {};

  try {
    const response = await axios.get(`${Backend_API}/boats/getallboatpower`);
    if (response.data.flag == true) {
      dispatch(getpowers(response.data.data));
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data.";
    return { errors };
  }
  return {};
};

export const submitBasic = (basicdata) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};

  try {
    const modelValidation = isValidString(basicdata.model);
    const descriptionValidation = isValidString(basicdata.model);
    const locationValidation = isValidString(basicdata.model);
    const yearValidation = isValidNumber(basicdata.year);
    const sizeValidation = isValidNumber(basicdata.size);
    const boattypeValidation = isValidNumber(basicdata.boattype);
    const boatbrandValidation = isValidNumber(basicdata.boatbrand);
    const enginecountValidation = isValidNumber(basicdata.enginecount);
    const bathroomcountValidation = isValidNumber(basicdata.bathroomcount);
    const powerValidation = isValidNumber(basicdata.power);
    const capacityValidation = isValidNumber(basicdata.capacity);
    const cabinscountValidation = isValidNumber(basicdata.cabinscount);

    if (!modelValidation.valid) {
      errors.model = modelValidation.message;
    }
    if (!descriptionValidation.valid) {
      errors.description = descriptionValidation.message;
    }
    if (!locationValidation.valid) {
      errors.location = locationValidation.message;
    }
    if (!yearValidation.valid) {
      errors.year = yearValidation.message;
    }
    if (!sizeValidation.valid) {
      errors.size = sizeValidation.message;
    }
    if (!boattypeValidation.valid) {
      errors.boattype = boattypeValidation.message;
    }
    if (!boatbrandValidation.valid) {
      errors.boatbrand = boatbrandValidation.message;
    }
    if (!enginecountValidation.valid) {
      errors.enginecount = enginecountValidation.message;
    }
    if (!bathroomcountValidation.valid) {
      errors.bathroomcount = bathroomcountValidation.message;
    }
    if (!powerValidation.valid) {
      errors.powers = powerValidation.message;
    }
    if (!capacityValidation.valid) {
      errors.capacity = capacityValidation.message;
    }
    if (!cabinscountValidation.valid) {
      errors.cabinscount = cabinscountValidation.message;
    }
    if (Object.keys(errors).length > 0) {
      return { errors };
    }

    const response = await axios.post(
      `${Backend_API}/boats/addboat`,
      basicdata,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.flag == true) {
      dispatch(setCurboat(response.data.data));
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data";
    return { errors };
  } finally {
    await dispatch(setLoading(false));
  }
  return {};
};
