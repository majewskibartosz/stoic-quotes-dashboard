import PropTypes from 'prop-types';

interface GetRandomIntInclusiveProps {
  min: number;
  max: number;
}

const getRandomIntInclusive = ({ min, max }: GetRandomIntInclusiveProps): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomIntInclusive.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default getRandomIntInclusive;