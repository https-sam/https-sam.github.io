const axios = require("axios");

const fetcher = (uri) => {
  return axios.get(uri);
};

const employeesDataURI =
  "https://raw.githubusercontent.com/https-sam/https-sam.github.io/main/assignments/hmn/company.json";

fetcher(employeesDataURI)
  .then(({ data }) => {
    data = JSON.parse(data);
    console.log(data.companyName);
  })
  .catch((e) => console.log(e));
