import axios from "axios";

export function updateUserData(userId, userGroup, userName) {
  axios({
    method: "put",
    url: " http://46.253.93.3:80/mirsal-api/public/User/Update.php/user/update",
    data: {
      userId: userId,
      userName: userName,
      userGroup: userGroup,
    },
    headers: { "Access-Control-Allow-Origin": "*" },
  });
}
