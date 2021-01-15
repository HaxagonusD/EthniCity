const parseResumeFormData = (resumeData) => {
  const { firstName, lastName, gender, email, LGBTQ, ethnicity } = resumeData;

  const parsedData = { firstName, lastName, gender, email, LGBTQ, ethnicity };
  parsedData.work = [];
  parsedData.volunteer = [];
  parsedData.education = [];
  parsedData.project = [];

  for (const key in resumeData) {
    // console.log(key);
    const location = key[0];

    function is_numeric(str) {
      return /^\d+$/.test(str);
    }
    if (!is_numeric(location)) {
      continue;
    }
    const rest = key.slice(1);

    const type =
      rest.match("work") ||
      rest.match("volunteer") ||
      rest.match("project") ||
      rest.match("education");

    rest.replace(type[0], "");
    console.log(parsedData[type[0]][location]);

    if (parsedData[type[0]][location]) {
      if (rest.match("highlight")) {
        parsedData[type[0]][location].highlight.push(resumeData[key]);
      } else {
        parsedData[type[0]][location][rest] = resumeData[key];
      }
    } else {
      parsedData[type[0]].push({ highlight: [] });
      if (rest.match("highlight")) {
        parsedData[type[0]][parsedData[type[0]].length - 1].highlight.push(
          resumeData[key]
        );
      } else {
        parsedData[type[0]][parsedData[type[0]].length - 1][rest] =
          resumeData[key];
      }
    }
  }
  return parsedData;
};

export default parseResumeFormData;
