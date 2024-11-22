export const isValidEmail = (email) => {
  if (!email) {
    return { valid: false, message: "Email is required." };
  }

  if (!email.includes("@")) {
    return { valid: false, message: "Invalid email format." };
  }

  return { valid: true, message: "Valid email." };
};

export const isValidPassword = (password) => {
  if (!password) {
    return { valid: false, message: "Password is required." };
  }

  if (password.length <= 6) {
    return {
      valid: false,
      message: "Password must be longer than 6 characters.",
    };
  }

  return { valid: true, message: "Valid password." };
};

export const isValidDate = (dateString) => {
  const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$/;

  if (!dateString) {
    return { valid: false, message: "Date is required." };
  }

  if (!regex.test(dateString)) {
    return {
      valid: false,
      message: "Invalid date format. Please use MM/DD/YYYY.",
    };
  }

  const [month, day, year] = dateString.split("/").map(Number);
  const date = new Date(year, month - 1, day);

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return { valid: false, message: "Invalid date." };
  }

  return { valid: true, message: "Valid date." };
};

export const isValidString = (inputString) => {
  if (!inputString) {
    return { valid: false, message: "This field is required." };
  }

  if (inputString.trim().length === 0) {
    return {
      valid: false,
      message: "This field must not be empty or consist only of spaces.",
    };
  }
  return { valid: true, message: "Valid input string." };
};

export const isValidNumber = (value) => {
  if (value <= 0 || value == null) {
    return {
      valid: false,
      message: "This fields must not be empty",
    };
  }
  return { valid: true, message: "Valid input number" };
};
