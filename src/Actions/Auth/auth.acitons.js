import { Type_Signup, Type_Login } from "./types.action";
import { Backend_API } from "../../Utils/Constant";
import axios from "axios";

import {
  isValidEmail,
  isValidPassword,
  isValidDate,
  isValidString,
} from "../../Utils/Validate";
import { setLoading } from "../../Store/Global";
import { addUser } from "../../Store/Slice";

export const Signup = (personInfo) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const emailValidation = isValidEmail(personInfo.email);
    const passwordValidation = isValidPassword(personInfo.password);
    const dateValidation = isValidDate(personInfo.birthDay);
    const firstNameValidation = isValidString(personInfo.firstName);
    const lastNameValidation = isValidString(personInfo.lastName);

    if (!emailValidation.valid) {
      errors.email = emailValidation.message;
    }
    if (!passwordValidation.valid) {
      errors.password = passwordValidation.message;
    }
    if (!dateValidation.valid) {
      errors.birthDay = dateValidation.message;
    }
    if (!firstNameValidation.valid) {
      errors.firstName = firstNameValidation.message;
    }
    if (!lastNameValidation.valid) {
      errors.lastName = lastNameValidation.message;
    }

    if (Object.keys(errors).length > 0) {
      return { errors };
    }

    const response = await axios.post(`${Backend_API}/users`, personInfo, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (response.data.flag == false) {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data.";
    return { errors };
  } finally {
    await dispatch(setLoading(false));
  }
  return {};
};

export const Signin = (personInfo) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};

  try {
    const emailValidation = isValidEmail(personInfo.email);
    const passwordValidation = isValidPassword(personInfo.password);

    if (!emailValidation.valid) {
      errors.email = emailValidation.message;
    }
    if (!passwordValidation.valid) {
      errors.password = passwordValidation.message;
    }
    if (Object.keys(errors).length > 0) {
      return { errors };
    }

    const response = await axios.get(
      `${Backend_API}/users/${personInfo.email}/${personInfo.password}`
    );
    if (response.data.flag == true) {
      dispatch(addUser(response.data));
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data.";
    return { errors };
  } finally {
    await dispatch(setLoading(false)); // Hide loading indicator once done
  }
  return {};
};
