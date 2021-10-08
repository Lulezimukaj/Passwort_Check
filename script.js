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
  console.log("hello");
  console.log(pw1, pw2);

  if (pw1value !== pw2value) {
    const yes = document.getElementById("equalyes");
    const no = document.getElementById("equalno");
    yes.classList.add("equalno");
    yes.classList.remove("equalyes");
    return true;
  } else {
    const no = document.getElementById("equalno");
    const yes = document.getElementById("equalyes");
    no.classList.add("equalyes");
    yes.classList.remove("equalno");
    return true;
  }
}
