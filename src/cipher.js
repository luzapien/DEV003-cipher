const cipher = {
  encode: function (offsetValue, textareaValue) {
    let output = "";
    
    for (let i = 0; i < textareaValue.length; i++) {
      let char = textareaValue[i];
      const code = textareaValue.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + offsetValue) % 26) + 65);
      }
      
      output = output + char;
    }

    return output;
  },
  decode: function (offsetValue, textareaValue) {
    let output = "";

    for (let i = 0; i < textareaValue.length; i++) {
      let char = textareaValue[i];
      const code = textareaValue.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 90 - offsetValue) % 26) + 90);
      }
      
      output = output + char;
    }

    return output;
  }
};



export default cipher;
