import { Type_Signup, Type_Login } from "./types.action";
import { Backend_API } from "../../Utils/Constant";
import axios from "axios";
import { Alert } from "react-native";

import {
  isValidEmail,
  isValidPassword,
  isValidDate,
} from "../../Utils/Validate";
import { setLoading } from "../../Store/Global";
import { addUser } from "../../Store/Slices";

export const Signup = (personInfo) => async (dispatch) => {
  await dispatch(setLoading(true));
  try {
    const emailValidation = isValidEmail(personInfo.email);
    const passwordValidation = isValidPassword(personInfo.password);
    const dateValidation = isValidDate(personInfo.birthDay);
    const errorMessages = [];

    if (!emailValidation.valid) {
      errorMessages.push(emailValidation.message);
    }
    if (!passwordValidation.valid) {
      errorMessages.push(passwordValidation.message);
    }
    if (!dateValidation.valid) {
      errorMessages.push(dateValidation.message);
    }

    if (errorMessages.length > 0) {
      alert(errorMessages.join("\n"));
      return;
    }

    const response = await axios.post(`${Backend_API}/users`, personInfo, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (response.status == 201) {
      Alert.alert("Signup successfully.");
    } else {
      Alert.alert(response.data.error);
    }
  } catch (error) {
    Alert.alert("There was an error fetching the data.");
  } finally {
    await dispatch(setLoading(false)); // Hide loading indicator once done
  }
};

export const Signin = (personInfo) => async (dispatch) => {
  await dispatch(setLoading(true));
  try {
    const emailValidation = isValidEmail(personInfo.email);
    const passwordValidation = isValidPassword(personInfo.password);
    const errorMessages = [];

    if (!emailValidation.valid) {
      errorMessages.push(emailValidation.message);
    }
    if (!passwordValidation.valid) {
      errorMessages.push(passwordValidation.message);
    }
    if (errorMessages.length > 0) {
      alert(errorMessages.join("\n"));
      return;
    }

    const response = await axios.get(
      `${Backend_API}/users/${personInfo.email}/${personInfo.password}`
    );
    if (response.status == 200) {
      dispatch(addUser(response.data));
      alert(JSON.stringify(response.data.existingUser));
    } else {
      Alert.alert(response.data.error);
    }
  } catch (error) {
    Alert.alert("There was an error fetching the data.");
  } finally {
    await dispatch(setLoading(false)); // Hide loading indicator once done
  }
};
