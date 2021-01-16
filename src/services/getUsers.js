import axios from "axios";
const url = "/users";

async function getUsers() {
  return await axios.get(url).then(({ data: { result } }) => {
    return result;
  });
}

export default getUsers;
