const validationRules = {
  email: {
    rules: [
      {
        regex:
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        errorMessage: "This email is invalid",
      },
    ],
  },
  name: {
    rules: [
      {
        regex: /^\w{3,}$/,
        errorMessage: "Name should have at least 3 characters",
      },
    ],
  },
  password: {
    rules: [
      {
        regex: /[\w\.\*\!\$\#]{8,}/,
        errorMessage: "Minimun lenght is 8 characters",
      },
      {
        regex: /.*[A-Z].*/,
        errorMessage: "Password should contain at least one capital letter",
      },
      {
        regex: /.*[a-z].*/,
        errorMessage: "Password should contain at least one lowercase letter",
      },
      {
        regex: /.*\d.*/,
        errorMessage: "Password should contain at least one numeric character",
      },
      {
        regex: /.*[\.\*\!\$\#].*/,
        errorMessage:
          "Password should contain at least one nspecial character e.g .,*,$,#,!",
      },
    ],
  },
};
export default validationRules;
