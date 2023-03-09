interface GetRandomIntInclusiveProps {
  min: number;
  max: number;
}

const getRandomIntInclusive = ({ min, max }: GetRandomIntInclusiveProps): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default getRandomIntInclusive;