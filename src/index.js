// imports at the top
const prompt = require('prompt-sync')();
let name = ''

// small, helper functions
const welcomeAndGetName = () => {
  console.log('Welcome!')
  name = prompt('What is your name: ')
  console.log(`Hello ${name.trim()}, nice to meet you!\n`)
}

const sayGoodbye = () => {console.log(`Goodbye, ${name}!`)}

const showOptions = () => {
  console.log('Here are your options:\n',
  '1 - play a guessing game\n',
  '2 - words of wisdom\n',
  '3 - cheer you on!\n',
  'Any other key - exit\n')
}

const getRandomIntInRange = (min, max) => Math.floor(Math.random() * max) + min

const handleGuessingGame = () => {
  const getUserNumber = Number(prompt('Pick a number: '))
  const rightNumber = getRandomIntInRange(0, 11)
  if (getUserNumber === rightNumber) return `Congrats ${name}! You Win!`
  if (getUserNumber !== rightNumber) return `Sorry ${name}. Better luck next time.\nThe number was: ${rightNumber}`
}

const wordsOfWisdom = [
  'You should go to bed by 12:30',
  "It's better to mostly understand a little more every day, than to never move forward until you understand everything",
  'Eating breakfast has statistical benefits to brain power',
  "The best laid plans often fail, but plans that don't exist can never succeed",
  'Time management and communication are the two most important skills in the workplace',
  'Try to listen more than you speak',
]

const cheers = [
  'You can do it!',
  'You are the best!',
  'You are a coding machine!',
  'YOU ARE UNREALLLLLLLLL!',
  'LITERALLY UNSTOPPABLE!',
  "Can't even handle your greatness right now!",
];

const getWordsOfWisdom = () => wordsOfWisdom[getRandomIntInRange(0, wordsOfWisdom.length)];
const getCheer = () => cheers[getRandomIntInRange(0, cheers.length)];

// more complex event handler functions
const chooseOption = () => {
  showOptions()
  const option = Number(prompt('What is your option: ').trim())
  if (option === 1) return handleGuessingGame();
  if (option === 2) return getWordsOfWisdom();
  if (option === 3) return getCheer();
}

// Primary runner function
const main = () => {
  welcomeAndGetName()
  console.log(chooseOption())
  sayGoodbye()
}
main();