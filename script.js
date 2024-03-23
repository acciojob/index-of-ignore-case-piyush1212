function indexOfIgnoreCase(s1, s2) {
  // If either string is empty, return -1
  if (!s1 || !s2) return -1;

  // Convert both strings to lowercase for case-insensitive comparison
  function toLowerCase(str) {
    let lowerCaseStr = '';
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) { // Uppercase letters
        lowerCaseStr += String.fromCharCode(charCode + 32);
      } else {
        lowerCaseStr += str[i];
      }
    }
    return lowerCaseStr;
  }

  const lowercaseS1 = toLowerCase(s1);
  const lowercaseS2 = toLowerCase(s2);

  // Find the index of s2 in s1
  for (let i = 0; i <= lowercaseS1.length - lowercaseS2.length; i++) {
    let match = true;
    for (let j = 0; j < lowercaseS2.length; j++) {
      if (lowercaseS1[i + j] !== lowercaseS2[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      return i;
    }
  }

  return -1; // If s2 is not found in s1
}

// Test cases
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
