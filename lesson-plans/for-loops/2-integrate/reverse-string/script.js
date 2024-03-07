import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  const text = readString('user-text');
  debugger;

  // read user text

  // use a for loop that counts down (i--) to reverse the input
  let reversedString = '';
  for (let i = 0; i < text.length; i++) {
    reversedString = text[i] + reversedString;
  }


  // display the reversed string
  display('reversed-output', reversedString);
});
