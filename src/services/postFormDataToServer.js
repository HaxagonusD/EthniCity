import axios from "axios";
function postFormDataToServer(resumeData) {
  const url = "http://localhost:5000/test";
  axios.post(url, resumeData).then(({ data }) => {
    console.log(data);
  });
}

export default postFormDataToServer;
