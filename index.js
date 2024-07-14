// const tutorials = [
//   'what does the this keyword mean?',
//   'What is the Constructor OO pattern?',
//   'implementing Blockchain Web API',
//   'The Test Driven Development Workflow',
//   'What is NaN and how Can we Check for it',
//   'What is the difference between stopPropagation and preventDefault?',
//   'Immutable State and Pure Functions',
//   'what is the difference between == and ===?',
//   'what is the difference between event capturing and bubbling?',
//   'what is JSONP?'
// ];

// const titleCased = () => {
//   return tutorials
// }
function titleCased() {
  const tutorialNames = [
      "what does the this keyword mean?",
      "What is the Constructor OO pattern?",
      "implementing Blockchain Web API",
      "The Test Driven Development Workflow",
      "What is NaN and how Can we Check for it",
      "What is the difference between stopPropagation and preventDefault?",
      "Immutable State and Pure Functions",
      "what is the difference between == and ===?",
      "what is the difference between event capturing and bubbling?",
      "what is JSONP?"
  ];

  // Capitalize the first letter of each word
  const titleCasedNames = tutorialNames.map(name => {
      const words = name.split(' ');
      const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
      return capitalizedWords.join(' ');
  });

  return titleCasedNames;
}

// Export the function if needed
module.exports = titleCased;
