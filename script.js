console.log("Passowort Check");

const button = document.querySelector("#button");
button.addEventListener("click", showpassword);

function showpassword() {
  const input = document.getElementById("inputpw");
  const input2 = document.getElementById("inputpw2");
  if (inputpw.type === "password" || inputpw2.type === "password") {
    inputpw.type = "text";
    inputpw2.type = "text";
  } else {
    inputpw.type = "password";
    inputpw2.type = "password";
  }
}

const pw1 = document.getElementById("inputpw");
const pw2 = document.getElementById("inputpw2");

pw1.addEventListener("keyup", equalpasswords);
pw2.addEventListener("keyup", equalpasswords);

function equalpasswords() {
  const pw1value = pw1.value;
  const pw2value = pw2.value;

  if (pw1value !== pw2value || pw1value == "") {
    const yes = document.getElementById("equalyes");
    const no = document.getElementById("equalno");
    yes.classList.add("equalno");
    no.classList.remove("equalyes");

    return true;
  } else {
    const no = document.getElementById("equalno");
    const yes = document.getElementById("equalyes");
    no.classList.add("equalyes");
    yes.classList.remove("equalno");
  }
}

pw1.addEventListener("keyup", lowercasepassword);

function lowercasepassword() {
  const pw1value = pw1.value;

  if (pw1value.match(/[a-z]+/)) {
    const yes = document.getElementById("loweryes");
    const no = document.getElementById("lowerno");
    yes.classList.remove("lowerno");
    no.classList.add("loweryes");
    return true;
  } else {
    const no = document.getElementById("lowerno");
    const yes = document.getElementById("loweryes");
    no.classList.remove("loweryes");
    yes.classList.add("lowerno");
    return true;
  }
}

pw1.addEventListener("keyup", uppercasepassword);

function uppercasepassword() {
  const pw1value = pw1.value;

  if (pw1value.match(/[A-Z]+/)) {
    const yes = document.getElementById("upperyes");
    const no = document.getElementById("upperno");
    yes.classList.remove("upperno");
    no.classList.add("upperyes");
    return true;
  } else {
    const no = document.getElementById("upperno");
    const yes = document.getElementById("upperyes");
    no.classList.remove("upperyes");
    yes.classList.add("upperno");
    return true;
  }
}

pw1.addEventListener("keyup", numberpassword);

function numberpassword() {
  const pw1value = pw1.value;

  if (pw1value.match(/[0-9]+/)) {
    const yes = document.getElementById("numberyes");
    const no = document.getElementById("numberno");
    yes.classList.remove("numberno");
    no.classList.add("numberyes");
    return true;
  } else {
    const no = document.getElementById("numberno");
    const yes = document.getElementById("numberyes");
    no.classList.remove("numberyes");
    yes.classList.add("numberno");
    return true;
  }
}

pw1.addEventListener("keyup", characterpassword);

function characterpassword() {
  const pw1value = pw1.value;

  if (pw1value.length > 10) {
    const yes = document.getElementById("tenyes");
    const no = document.getElementById("tenno");
    yes.classList.remove("tenno");
    no.classList.add("tenyes");
    return true;
  } else {
    const no = document.getElementById("tenno");
    const yes = document.getElementById("tenyes");
    no.classList.remove("tenyes");
    yes.classList.add("tenno");
    return true;
  }
}
