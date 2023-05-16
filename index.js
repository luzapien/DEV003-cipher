import cipher from './cipher.js';

const cipherBtn = document.getElementById("cipher");
const decipherBtn = document.getElementById("decipher");

cipherBtn.addEventListener("click", function () {
  const offsetValue = parseInt(document.getElementById("offset").value);
  const textareaValue = document.getElementById("textarea").value;
  const messageElement = document.getElementById("textarea2");
  const answer = cipher.encode(offsetValue, textareaValue);

  messageElement.value = answer;
})

decipherBtn.addEventListener("click", function () {
  const offsetValue = parseInt(document.getElementById("offset").value);
  const textareaValue = document.getElementById("textarea").value;
  const messageElement = document.getElementById("message");
  const answer = cipher.decode(offsetValue, textareaValue);

  messageElement.value = answer;
})

const cipherBtn2 = document.getElementById("cipher2");
const decipherBtn2 = document.getElementById("decipher2");

cipherBtn2.addEventListener("click", function () {
  const offsetValue = parseInt(document.getElementById("offset").value);
  const textareaValue = document.getElementById("textarea2").value;
  const messageElement = document.getElementById("textarea");
  const answer = cipher.encode(offsetValue, textareaValue);

  messageElement.value = answer;
})

decipherBtn2.addEventListener("click", function(){
  const offsetValue = parseInt(document.getElementById("offset").value);
  const textareaValue = document.getElementById("textarea2").value;
  const messageElement = document.getElementById("message2");
  const answer = cipher.decode(offsetValue, textareaValue);

  messageElement.value = answer;
})
