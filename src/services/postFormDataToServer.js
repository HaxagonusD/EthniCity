import axios from "axios";
function postFormDataToServer(resumeData) {
  const url = "/test";
  axios.post(url, resumeData).then(({ data }) => {
    console.log(data);
  });
}

export default postFormDataToServer;
