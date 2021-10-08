console.log("Passowort Check");

const button = document.querySelector("#button");
button.addEventListener("click", showpassword);

function showpassword() {
  const input = document.getElementById("#inputpw");
  const input2 = document.getElementById("#inputpw2");
  if (inputpw.type === "password" || inputpw2.type === "password") {
    inputpw.type = "text";
    inputpw2.type = "text";
  } else {
    inputpw.type = "password";
    inputpw2.type = "password";
  }
}
