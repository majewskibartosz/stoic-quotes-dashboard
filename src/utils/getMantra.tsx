import getRandomIntInclusive from './getRandomIntInclusive';

export type MantrasDictionary = {
  [key: number]: string;
};

export const mantras: string[] = [
  "Don't let your dreams be dreams.",
  'Yesterday you said tomorrow.',
  'So just do it.',
  'Make your dreams come true.',
  'Just do it.',
  'Nothing is impossible.',
  "You're not going to stop.",
  'What are you waiting for?',
  'Yes you can.',
  'Stop giving up.',
  'You will win.',
  'You will succeed.',
  'Aim high.',
  'Believe in Yourself!',
  'Never give up!',
  'It starts with You!',
  'Never let them change you.',
  'Trust your talents.',
  'Trust yourself.',
  'Well done.',
  'Baby steps.',
  'Be grateful.',
  'Life happens now.',
  'Live simply.',
  'Be the change.',
  'Make it count.',
  'Enjoy the process.',
  'Be fearless.',
  'Focus on the journey.',
  'Progress, not perfection.',
  'You are not alone.',
  'Value yourself.',
  'Breathe.',
  'Stop procrastinate.',
  'There is a way.',
  'Be honest.',
  'Create everyday.',
  'You are enough.',
  'Modest life.',
  'Everyday is a fresh start.',
  'Now is the moment.',
  'Lead by example.',
  'Walk the talk.',
  'Good thoughts.',
  'Simple life.',
  'Work smart.',
  'Look for opportunities.',
  'Positive mindset.',
  'Be calm.',
  'Tomorrow is another try.',
  'Simple. Modest. Life.',
  'Be unstoppable.',
  'You are well.',
  'Create opportunities.'
];

export const getMantra = (dictionary: MantrasDictionary): string => {
  const randomNumber = getRandomIntInclusive({
    min: 0,
    max: mantras.length - 1
  });
  return dictionary[randomNumber];
};
