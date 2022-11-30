import cipher from './cipher.js';

const cipherBtn = document.getElementById("cipher");
const decipherBtn = document.getElementById("decipher");

cipherBtn.addEventListener("click", function () {
  const offsetValue = parseInt(document.getElementById("offset").value);
  const textareaValue = document.getElementById("textarea").value;
  const messageElement = document.getElementById("message");
  const answer = cipher.encode(offsetValue, textareaValue);

  messageElement.value = answer;

  //console.log(cipher);
})

decipherBtn.addEventListener("click", function () {
  const offsetValue = parseInt(document.getElementById("offset").value);
  const textareaValue = document.getElementById("textarea").value;
  const messageElement = document.getElementById("message");
  const answer = cipher.decode(offsetValue, textareaValue);

  messageElement.value = answer;


})


//console.log(cipher)
