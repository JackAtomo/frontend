import axios from "axios";

export function register({
  firstName,
  lasrName,
  email,
  password,
  gender,
  dob,
  address,
  postalCode,
  phone,
  borIn,
  role
}) {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/users`, {
    firstName: firstName,
    lastName: lasrName,
    email: email,
    password: password,
    gender: gender,
    DOB: dob,
    address: address,
    postalCode: postalCode,
    phone: phone,
    bornIn: borIn,
    userStatus: role
  });
}
