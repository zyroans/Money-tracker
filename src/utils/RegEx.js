const validationRules = {
  email: {
    rules: [
      {
        regex:
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        errorMessage: "is invalid",
      },
    ],
  },
  name: {
    rules: [
      {
        regex: /^\w{3,}$/,
        errorMessage: "3 characters",
      },
    ],
  },
  password: {
    rules: [
      {
        regex: /[\w.*!$#]{8,}/,
        errorMessage: "Minimun lenght is 8 characters",
      },
      {
        regex: /.*[A-Z].*/,
        errorMessage: "one capital letter",
      },
      {
        regex: /.*[a-z].*/,
        errorMessage: "one lowercase letter",
      },
      {
        regex: /.*\d.*/,
        errorMessage: "one numeric character",
      },
      {
        regex: /.*[.*!$#].*/,
        errorMessage: "one special character e.g .,*,$,#,!",
      },
    ],
  },
};
export default validationRules;
