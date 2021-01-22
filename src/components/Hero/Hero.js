import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';



const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    <img src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png" className={styles.image}/>
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
};

export default Hero;