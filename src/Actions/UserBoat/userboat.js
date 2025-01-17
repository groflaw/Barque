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
export const getBoatsCity = (location1) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const response = await axios.get(
      `${Backend_API}/boats/getAllboatsCity/${location1}`
    );
    if (response.data.flag == true) {
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the boats from City";
    return { errors };
  } finally {
    await dispatch(setLoading(false));
  }
};

export const getTopDes = () => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/boats/getTopdes`);
    if (response.data.flag == true) {
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the Top Destinations";
    return { errors };
  } finally {
    await dispatch(setLoading(false));
  }
};
export const getNewBoats = () => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/boats/getNewBoats`);
    if (response.data.flag == true) {
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the New boats";
    return { errors };
  } finally {
    await dispatch(setLoading(false));
  }
};
export const getSimilar = (location, boatId) => async (dispatch) => {
  await dispatch(setLoading(true));
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
  } finally {
    await dispatch(setLoading(false));
  }
};

export const searchBoats = (location) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const response = await axios.get(
      `${Backend_API}/boats/search/${location}}`
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
  } finally {
    await dispatch(setLoading(false));
  }
};

export const filterBoats = (filter) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const response = await axios.post(
      `${Backend_API}/boats/search/filter`,
      filter,
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
    errors.general = "There was an error fetching the boats";
    return { errors };
  } finally {
    await dispatch(setLoading(false));
  }
};

export const gethostBoats = (hostId) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const response = await axios.get(
      `${Backend_API}/boats/getHostboats/${hostId}`
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
  } finally {
    await dispatch(setLoading(false));
  }
};

export const getuserBookings = (userId) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const response = await axios.get(
      `${Backend_API}/boats/getUserbookings/${userId}`
    );
    if (response.data.flag == true) {
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the bookings";
    return { errors };
  } finally {
    await dispatch(setLoading(false));
  }
};

export const reservation =
  ({ userId, hostId, boatId, planId, count, start, end }) =>
  async (dispatch) => {
    await dispatch(setLoading(true));
    let errors = {};
    try {
      const response = await axios.post(
        `${Backend_API}/reservation/save`,
        {
          userId,
          hostId,
          boatId,
          planId,
          count,
          start,
          end,
        },
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
      errors.general = "There was an error fetching the boats";
      return { errors };
    } finally {
      await dispatch(setLoading(false));
    }
  };

export const getBoatBookings = (boatId) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const response = await axios.get(
      `${Backend_API}/reservation/getBoatBookings/${boatId}`
    );
    if (response.data.flag == true) {
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the boat's reservations";
    return { errors };
  } finally {
    await dispatch(setLoading(false));
  }
};

export const getResrvations = (userId) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const response = await axios.get(
      `${Backend_API}/reservation/getReservations/${userId}`
    );
    if (response.data.flag == true) {
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the resrevations";
    return { errors };
  } finally {
    await dispatch(setLoading(false));
  }
};

export const getBookings = (hostId) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const response = await axios.get(
      `${Backend_API}/reservation/getBookings/${hostId}`
    );
    if (response.data.flag == true) {
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the bookings";
    return { errors };
  } finally {
    await dispatch(setLoading(false));
  }
};

export const getHostNews = (hostId) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const response = await axios.get(
      `${Backend_API}/reservation/getHostNews/${hostId}`
    );
    if (response.data.flag == true) {
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the news";
    return { errors };
  } finally {
    await dispatch(setLoading(false));
  }
};

export const getUserNews = (userId) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const response = await axios.get(
      `${Backend_API}/reservation/getUserNews/${userId}`
    );
    if (response.data.flag == true) {
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the news";
    return { errors };
  } finally {
    await dispatch(setLoading(false));
  }
};

export const setBookStatus = (bookId, value) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const response = await axios.post(
      `${Backend_API}/reservation/setBookStatus/${bookId}`,
      { value },
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
    errors.general = "There was an error tobeconfirm";
    return { errors };
  } finally {
    await dispatch(setLoading(false));
  }
};

export const checkUserReview = (userId) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const today = new Date();
    const response = await axios.post(
      `${Backend_API}/reservation/checkUserReview/${userId}`,
      { today },
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
    errors.general = "There was an error check review";
    return { errors };
  } finally {
    await dispatch(setLoading(false));
  }
};

export const checkHostReview = (hostId) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const today = new Date();
    const response = await axios.post(
      `${Backend_API}/reservation/checkHostReview/${hostId}`,
      { today },
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
    errors.general = "There was an error check review";
    return { errors };
  } finally {
    await dispatch(setLoading(false));
  }
};

export const setHostReview =
  (data, boatId, reservationId) => async (dispatch) => {
    await dispatch(setLoading(true));
    let errors = {};
    try {
      const response = await axios.post(
        `${Backend_API}/boats/setHostReview/${boatId}/${reservationId}`,
        { data },
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
      errors.general = "There was an error setting Review";
      return { errors };
    } finally {
      await dispatch(setLoading(false));
    }
  };

export const setUserReview =
  (userId, review, reservationId) => async (dispatch) => {
    await dispatch(setLoading(true));
    let errors = {};
    try {
      const response = await axios.post(
        `${Backend_API}/boats/setUserReview/${userId}/${reservationId}`,
        { review },
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
      errors.general = "There was an error setting Review";
      return { errors };
    } finally {
      await dispatch(setLoading(false));
    }
  };
