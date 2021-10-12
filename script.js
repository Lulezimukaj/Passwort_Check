console.log("Passowort Check");

const button = document.querySelector("#button");
button.addEventListener("click", showpassword);
const PasswordInput1 = document.getElementById("inputpw");
const PasswordInput2 = document.getElementById("inputpw2");
PasswordInput1.addEventListener("keyup", equalpasswords);
PasswordInput2.addEventListener("keyup", equalpasswords);
PasswordInput1.addEventListener("keyup", lowercasepassword);
PasswordInput2.addEventListener("keyup", lowercasepassword);
PasswordInput1.addEventListener("keyup", uppercasepassword);
PasswordInput2.addEventListener("keyup", uppercasepassword);
PasswordInput1.addEventListener("keyup", numberpassword);
PasswordInput2.addEventListener("keyup", numberpassword);
PasswordInput1.addEventListener("keyup", characterpassword);
PasswordInput2.addEventListener("keyup", characterpassword);

function showpassword() {
  if (
    PasswordInput1.type === "password" ||
    PasswordInput2.type === "password"
  ) {
    PasswordInput1.type = "text";
    PasswordInput2.type = "text";
  } else {
    PasswordInput1.type = "password";
    PasswordInput2.type = "password";
  }
}

function equalpasswords() {
  const PasswordInput1value = PasswordInput1.value;
  const PasswordInput2value = PasswordInput2.value;
  const PasswordNotEqual = document.getElementById("equalno");
  const PasswordEqual = document.getElementById("equalyes");

  if (
    PasswordInput1value !== PasswordInput2value ||
    PasswordInput1value == ""
  ) {
    PasswordEqual.classList.add("equalno");
    PasswordNotEqual.classList.remove("equalyes");
  } else {
    PasswordNotEqual.classList.add("equalyes");
    PasswordEqual.classList.remove("equalno");
  }
}

function lowercasepassword() {
  const PasswordInput1value = PasswordInput1.value;
  const PasswordInput2value = PasswordInput2.value;
  const PasswordLowerCase = document.getElementById("loweryes");
  const PasswordNotLowerCase = document.getElementById("lowerno");

  if (
    PasswordInput1value === PasswordInput2value &&
    PasswordInput1value.match(/[a-z]+/)
  ) {
    PasswordLowerCase.classList.remove("lowerno");
    PasswordNotLowerCase.classList.add("loweryes");
  } else {
    PasswordNotLowerCase.classList.remove("loweryes");
    PasswordLowerCase.classList.add("lowerno");
  }
}

function uppercasepassword() {
  const PasswordInput1value = PasswordInput1.value;
  const PasswordInput2value = PasswordInput2.value;
  const PasswordUpperCase = document.getElementById("upperyes");
  const PasswordNotUpperCase = document.getElementById("upperno");

  if (
    PasswordInput1value === PasswordInput2value &&
    PasswordInput1value.match(/[A-Z]+/)
  ) {
    PasswordUpperCase.classList.remove("upperno");
    PasswordNotUpperCase.classList.add("upperyes");
  } else {
    PasswordNotUpperCase.classList.remove("upperyes");
    PasswordUpperCase.classList.add("upperno");
  }
}

function numberpassword() {
  const PasswordInput1value = PasswordInput1.value;
  const PasswordInput2value = PasswordInput2.value;
  const PasswordNumber = document.getElementById("numberyes");
  const PasswordNoNumber = document.getElementById("numberno");

  if (
    PasswordInput1value === PasswordInput2value &&
    PasswordInput1value.match(/[0-9]+/)
  ) {
    PasswordNumber.classList.remove("numberno");
    PasswordNoNumber.classList.add("numberyes");
  } else {
    PasswordNoNumber.classList.remove("numberyes");
    PasswordNumber.classList.add("numberno");
  }
}

function characterpassword() {
  const PasswordInput1value = PasswordInput1.value;
  const PasswordInput2value = PasswordInput2.value;
  const PasswordTenCharacter = document.getElementById("tenyes");
  const PasswordNotTenCharacter = document.getElementById("tenno");

  if (
    PasswordInput1value === PasswordInput2value &&
    PasswordInput1value.length >= 10
  ) {
    PasswordTenCharacter.classList.remove("tenno");
    PasswordNotTenCharacter.classList.add("tenyes");
  } else {
    PasswordNotTenCharacter.classList.remove("tenyes");
    PasswordTenCharacter.classList.add("tenno");
  }
}
