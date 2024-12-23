import { Backend_API } from "../../Utils/Constant";
import axios from "axios";

import { setLoading, setCurboat } from "../../Store/Global";
import { isValidNumber, isValidString } from "../../Utils/Validate";

export const getMyboats = (userid) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const response = await axios.get(
      `${Backend_API}/boats/getMyboat/${userid}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.flag == true) {
      return response.data.data;
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
export const delMyboat = (boatId) => async(dispatch)=>{
  await dispatch(setLoading(true));
  let errors = {};
  try{
    const response = await axios.delete(`${Backend_API}/boats/delboat/${boatId}`);
    if(response.data.flag == true){
      return response.data.data
    }else{
      errors[response.data.sort] =response.data.error;
      return {errors}
    }
  }catch (error) {
    errors.general = "There was an error delete boat";
    return { errors };
  } finally {
    await dispatch(setLoading(false));
  }
}
export const setBoatFlag = (id, flag) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const response = await axios.post(
      `${Backend_API}/boats/setBoatFlag/${id}`,
      { flag },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.flag == true) {
      console.log("Settings successfully");
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

export const submitBasic = (basicdata,boatId) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};

  try {
    const modelValidation = isValidString(basicdata.model);
    const descriptionValidation = isValidString(basicdata.description);
    const locationValidation = isValidString(basicdata.location1);
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
      errors.location1 = locationValidation.message;
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
    let response = {};
    if(boatId == null){
      response = await axios.post(
        `${Backend_API}/boats/addboat`,
        basicdata,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
    }else{
      response = await axios.put(
        `${Backend_API}/boats/updateboat/${boatId}`,
        basicdata,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
    }
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

export const addPlan = (id, plan) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};

  try {
    const priceValidation = isValidNumber(plan.price);
    const descriptionValidation = isValidString(plan.description);
    const captainValidation = isValidNumber(plan.captain);

    if (!priceValidation.valid) {
      errors.price = priceValidation.message;
    }
    if (!descriptionValidation.valid) {
      errors.description = descriptionValidation.message;
    }
    if (!captainValidation.valid) {
      errors.captain = captainValidation.message;
    }
    if (Object.keys(errors).length > 0) {
      return { errors };
    }

    const response = await axios.post(
      `${Backend_API}/boats/addplan/${id}`,
      plan,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.flag == true) {
      dispatch(setCurboat(response.data.data));
      return response.data.data;
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
};
export const delPlan = (id, _id) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};

  try {
    const response = await axios.post(
      `${Backend_API}/boats/delplan/${id}`,
      { _id },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.flag == true) {
      dispatch(setCurboat(response.data.data));
      return response.data.data;
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

export const uploadDocImage = (id, data, type) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const response = await axios.post(
      `https://baraqua-server.vercel.app/api/boats/adddocImage/${id}/${type}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.data.flag == true) {
      dispatch(setCurboat(response.data.data));
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data";
  } finally {
    await dispatch(setLoading(false));
  }
};

export const submitLocation = (id, location) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const boatnameValidation = isValidString(location.boatname);
    const locationtypeValidation = isValidNumber(location.locationtype);
    const marinanameValidation = isValidString(location.marinaname);
    const addressValidation = isValidString(location.address);
    if (!boatnameValidation.valid) {
      errors.boatname = boatnameValidation.message;
    }
    if (!locationtypeValidation.valid) {
      errors.locationtype = locationtypeValidation.message;
    }
    if (!marinanameValidation.valid) {
      errors.marinaname = marinanameValidation.message;
    }
    if (!addressValidation.valid) {
      errors.address = addressValidation.message;
    }
    if (Object.keys(errors).length > 0) {
      return { errors };
    }
    const response = await axios.post(
      `${Backend_API}/boats/addLocation/${id}`,
      location,
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

export const uploadBoatImage = (id, data, type) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const response = await axios.post(
      `https://baraqua-server.vercel.app/api/boats/addboatImage/${id}/${type}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.data.flag == true) {
      dispatch(setCurboat(response.data.data));
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
  } finally {
    await dispatch(setLoading(false));
  }
};
export const getboatInfo = (id) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/boats/getbasicInfo/${id}`);
    if (response.data.flag == true) {
      dispatch(setCurboat(response.data.data));
      return {};
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

export const submitCancellation = (id, cancellation) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const cancellationValidation = isValidNumber(cancellation);

    if (!cancellationValidation.valid) {
      errors.cancellation = cancellationValidation.message;
    }

    if (Object.keys(errors).length > 0) {
      return { errors };
    }
    const response = await axios.post(
      `${Backend_API}/boats/addCancellation/${id}`,
      { cancellation },
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

export const submitAccessories = (id, accessories) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const response = await axios.post(
      `${Backend_API}/boats/addAccessories/${id}`,
      { accessories },
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

export const submitAllowes = (id, allowes) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const response = await axios.post(
      `${Backend_API}/boats/addAllowes/${id}`,
      { allowes },
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
