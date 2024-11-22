import { Type_Signup, Type_Login } from "./types.action";
import { Backend_API } from "../../Utils/Constant";
import axios from "axios";

import {
  isValidEmail,
  isValidPassword,
  isValidDate,
  isValidString,
  isValidNumber,
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
      dispatch(addUser(response.data.existingUser));
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

export const setAvatar = (id, data) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const response = await axios.post(
      `${Backend_API}/users/setAvatar/${id}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.data.flag == true) {
      dispatch(addUser(response.data.data));
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

export const changeProfile = (id, profile) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const emailValidation = isValidEmail(profile.email);
    const dateValidation = isValidDate(profile.birthDay);
    const firstNameValidation = isValidString(profile.firstName);
    const lastNameValidation = isValidString(profile.lastName);
    if (!emailValidation.valid) {
      errors.email = emailValidation.message;
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
    const response = await axios.post(
      `${Backend_API}/users/changeProfile/${id}`,
      profile,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.flag == true) {
      dispatch(addUser(response.data.data));
      return response.data.data;
    } else {
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

export const setNotifi = (id, field, value) => async (dispatch) => {
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const response = await axios.post(
      `${Backend_API}/users/setNotifi/${id}`,
      { field, value },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.flag == true) {
      dispatch(addUser(response.data.data));
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data.";
    return { errors };
  } finally {
    await dispatch(setLoading(false));
  }
};

export const AddCoHost = (id, profile) => async (dispatch) => {
  const { profileImage, frontID, backID, email, idNumber } = profile;
  await dispatch(setLoading(true));
  let errors = {};
  try {
    const emailValidation = isValidEmail(email);
    const idNumberValidation = isValidString(idNumber);
    const profileValidation = isValidNumber(profileImage);
    const frontValidation = isValidNumber(frontID);
    const backValidation = isValidNumber(backID);
    if (!emailValidation.valid) {
      errors.email = emailValidation.message;
    }
    if (!idNumberValidation.valid) {
      errors.idNumber = idNumberValidation.message;
    }
    if (!profileValidation.valid) {
      errors.image = profileValidation.message;
    }
    if (!frontValidation.valid) {
      errors.image = frontValidation.message;
    }
    if (!backValidation.valid) {
      errors.image = backValidation.message;
    }

    if (Object.keys(errors).length > 0) {
      return { errors };
    }
    const formData = new FormData();
    formData.append("email", email);
    formData.append("idNumber", idNumber);
    formData.append("profileImage", {
      uri: profileImage,
      name: "profile.jpg",
      type: "image/jpeg",
    });
    formData.append("frontID", {
      uri: frontID,
      name: "front_id.jpg",
      type: "image/jpeg",
    });
    formData.append("backID", {
      uri: backID,
      name: "back_id.jpg",
      type: "image/jpeg",
    });
    try {
      const response = await axios.post(
        `${Backend_API}/users/addCoHost/${id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (response.data.flag == true) {
        dispatch(addUser(response.data.data));
      } else {
        errors[response.data.sort] = response.data.error;
        return { errors };
      }
    } catch (error) {
      errors.general = "There was an error fetching the data.";
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

export const getUser = (id) => async(dispatch) =>{
  await dispatch(setLoading(true));
  let errors = {}
  try{
    const response = await axios.get(`${Backend_API}/users/${id}`);
    if(response.data.flag == true){
      return response.data.data
    }else{
      errors[response.data.sort] = response.data.error
      return {errors}
    }
  }catch(error){
    errors.general = "There was an error fetching the data";
  }finally{
    await dispatch(setLoading(false))
  }
}

export const changePassword =(id, data) =>async (dispatch) =>{
  await dispatch(setLoading(true));
  const {curpassword, newpassword, confirmpassword} = data;
  let errors = {}
  try{
    const curpasswordValidation = isValidPassword(curpassword);
    if (!curpasswordValidation.valid) {
      errors.curpassword = curpasswordValidation.message;
    }
    const newpasswordValidation = isValidPassword(newpassword);
    if (!newpasswordValidation.valid) {
      errors.newpassword = newpasswordValidation.message;
    }
    if(newpassword != confirmpassword){
      errors.confirmpassword = "Please confirm password again";
    }
    if (Object.keys(errors).length > 0) {
      return { errors };
    }
    const response = await axios.post(`${Backend_API}/users/changePassword/${id}`,{curpassword,newpassword}, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    if (response.data.flag == true) {
      dispatch(addUser(response.data.data));
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  }catch(error){
    errors.general = "There was an error fetching the data";
  }finally{
    await dispatch(setLoading(false))
  }
}