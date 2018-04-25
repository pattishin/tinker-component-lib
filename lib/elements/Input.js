import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = ({ type, className, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
    />
  );
}

Input.defaultProps = {
  type: 'text'
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string
}

export default Input;
