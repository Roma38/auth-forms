"use strict";

(() => {
  //login form input fields
  const loginUserName = document.querySelector("#loginUserName");
  const loginPassword = document.querySelector("#loginPassword");
  //register form input fields
  const registerEmail = document.querySelector("#registerEmail");
  const registerUserName = document.querySelector("#registerUserName");
  const registerPassword = document.querySelector("#registerPassword");
  //forms
  const loginForm = document.querySelector("#loginForm");
  const registerForm = document.querySelector("#registerForm");

  loginUserName.addEventListener("input", () =>
    validateField(loginUserName, isUserNameValid)
  );
  loginPassword.addEventListener("input", () =>
    validateField(loginPassword, isPasswordValid)
  );
  registerEmail.addEventListener("input", () =>
    validateField(registerEmail, isEmailValid)
  );
  registerUserName.addEventListener("input", () =>
    validateField(registerUserName, isUserNameValid)
  );
  registerPassword.addEventListener("input", () =>
    validateField(registerPassword, isPasswordValid)
  );

  loginForm.addEventListener("submit", e => {
    if (
      isUserNameValid(loginUserName.value) &&
      isPasswordValid(loginPassword.value)
    ) {
      return loginForm.submit();
    }
    
    e.preventDefault();
    validateField(loginUserName, isUserNameValid);
    validateField(loginPassword, isPasswordValid);
  });

  registerForm.addEventListener("submit", e => {
    if (
      isEmailValid(registerEmail.value) &&
      isUserNameValid(registerUserName.value) &&
      isPasswordValid(registerPassword.value)
    ) {
      return registerForm.submit();
    }
    
    e.preventDefault();
    validateField(registerEmail, isEmailValid);
    validateField(registerUserName, isUserNameValid);
    validateField(registerPassword, isPasswordValid);
  });

  function isEmailValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  // длиннее 3-х символов
  function isUserNameValid(userName) {
    return userName.length > 3;
  }

  // содержит латинские буквы верхнего и нижнего регистра, цифру, и не короче 6-ти символов
  function isPasswordValid(password) {
    return (
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      password.length > 5
    );
  }

  function validateField(field, validationFunc) {
    if (validationFunc(field.value)) {
      field.classList.add("valid");
      field.classList.remove("invalid");
    } else {
      field.classList.add("invalid");
      field.classList.remove("valid");
    }
  }
})();
