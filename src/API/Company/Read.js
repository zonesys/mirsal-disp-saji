import axios from "axios";
export async function login(username, password) {
  try {
    const response = await axios.get(
      "http://46.253.93.3:80/mirsal-api/public/User/Read.php/user/login",
      {
        params: {
          username: username,
          password: password,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
