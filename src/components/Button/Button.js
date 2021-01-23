import React from 'react';
import styles from './Button.scss';
import PropTypes from 'prop-Types';


const Button = ({variant = '', ...otherProps}) => (
  <button 
    {...otherProps} 
    className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}
  />
);

Button.propTypes = {
  variant: PropTypes.node,
};

export default Button;
