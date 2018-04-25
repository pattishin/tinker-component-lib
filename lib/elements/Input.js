import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = ({ className, placeholder }) => {
  return (
    <input
      type={'text'}
      placeholder={placeholder}
      className={className}
    />
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string
}

export default Input;
