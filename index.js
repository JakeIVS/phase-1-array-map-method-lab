const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
 const tutorialsCased = tutorials.map((lines)=>{
  const words = lines.split(' ');
  const casedWords = words.map((letter)=>letter[0].toUpperCase()+letter.substring(1));
  const newLines = casedWords.join(' ');
  return newLines
 })
 return tutorialsCased;
}

console.log(titleCased(tutorials))