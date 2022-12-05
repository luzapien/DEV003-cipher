const cipher = {
  encode: function (offsetValue, textareaValue) {
    if (typeof offsetValue !== "number" || typeof textareaValue !== "string") {
      throw new TypeError("Tipos de datos no válidos", "cipher.js", 3);
    }

    let output = "";
    for (let i = 0; i < textareaValue.length; i++) {
      let char = textareaValue[i];
      const code = textareaValue.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + offsetValue) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + offsetValue) % 26) + 97);
      }

      output = output + char;
    }

    return output;
  },
  decode: function (offsetValue, textareaValue) {
    if (typeof offsetValue !== "number" || typeof textareaValue !== "string") {
      throw new TypeError("Tipos de datos no válidos", "cipher.js", 25);
    }

    let output = "";
    for (let i = 0; i < textareaValue.length; i++) {
      let char = textareaValue[i];
      const code = textareaValue.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 90 - offsetValue) % 26) + 90);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 122 - offsetValue) % 26) + 122);
      }

      output = output + char;
    }

    return output;
  }
};

export default cipher;
