import { Backend_API } from "../../Utils/Constant";
import axios from "axios";

import { setLoading } from "../../Store/Global";

export const getAllboats = () => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/boats/getAllboats`);
    if (response.data.flag == true) {
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the boats";
    return { errors };
  } finally {
    await dispatch(setLoading(false));
  }
};

export const getSimilar = (location, boatId) => async (dispatch) => {
  // await dispatch(setLoading(true));
  let errors = {};
  try {
    const response = await axios.get(
      `${Backend_API}/boats/getSimilar/${location}/${boatId}`
    );
    if (response.data.flag == true) {
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the boats";
    return { errors };
  }
};

export const searchBoats = (location) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/boats/search/${location}`);
    if (response.data.flag == true) {
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the boats";
    return { errors };
  } finally {
    await dispatch(setLoading(false));
  }
};

export const filterBoats = (filter) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const response = await axios.post(`${Backend_API}/boats/search/filter`, filter, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (response.data.flag == true) {
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the boats";
    return { errors };
  } finally {
    await dispatch(setLoading(false));
  }
};
