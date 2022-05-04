import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={s.list}>
    {Object.keys(options).map(key => (
      <li className={s.item} key={key}>
        <button
          type="button"
          className={s[key]}
          onClick={() => onLeaveFeedback(key)}
        >
          {key}
        </button>
      </li>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
