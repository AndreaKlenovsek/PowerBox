const form = document.querySelector(".signUp");
const initBtn = document.querySelector(".init-btn");
const singUpBtn = document.querySelector(".sign-up__btn");
const message = document.querySelector(".message");
const name = document.querySelector("#name");
const mail = document.querySelector("#mail");

const validateForm = (e) => {

clearMessage();

if(name.value !== "" && mail.value !== "") {
if(initBtn.style.background = "#40b549"){
// Clear message

// Create message
createMessage("success", "Ready to roll!");
// Power button green
singUpBtn.disabled = false;
singUpBtn.style.background = "#40b549";

}
}else {
createMessage("warning", "Please fill out the form");
return;
}
};


if(form){
form.addEventListener("submit", validate);
}

function validate(e) {
e.preventDefault();
validateForm();
restartForm();
}


function restartForm() {
form.reset();
initBtn.style.background = "#d61f26";
setTimeout(() => {
singUpBtn.style.background = "#d61f26";
clearMessage();
}, 2000);
}



function clearMessage() {
if(document.querySelector(".alert")) {
document.querySelector(".alert").remove();
}
}

function createMessage(className, msg) {
const div = document.createElement("div");
div.className = `alert ${className}`;
div.appendChild(document.createTextNode(msg));
message.appendChild(div);

}














