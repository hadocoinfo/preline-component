// cleanup-css.js
const fs = require('fs');
const path = require('path');

const cssFilePath = path.join(__dirname, 'dist', 'manager.css'); // Adjust path as necessary

fs.readFile(cssFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading CSS file:', err);
    return;
  }

  // Define the pattern to remove extra styles. Adjust the regex as needed.
  const cleanedCss = data.replace(/\/\* Extra Styles Start \*\/[\s\S]*$/, '');

  fs.writeFile(cssFilePath, cleanedCss, 'utf8', (err) => {
    if (err) {
      console.error('Error writing cleaned CSS:', err);
      return;
    }
    console.log('CSS cleanup completed successfully.');
  });
});
