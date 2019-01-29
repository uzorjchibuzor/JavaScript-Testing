const caesarCipher = (string, key) => {
  let output = "";
  const matcher = /[a-z]/i;

  for (let i = 0; i < string.length; i += 1) {
    let char = string[i];
    if (char.match(matcher)) {
      let code = string.charCodeAt(i);

      // For Capital Letters
      if (code >= 65 && code <= 90)
        char = String.fromCharCode(((code - 65 + key) % 26) + 65);
      //  For Lowercase Letters
      else if (code >= 97 && code <= 122)
        char = String.fromCharCode(((code - 97 + key) % 26) + 97);
    }

    output += char;
  }
  return output;
};

module.exports = caesarCipher;
