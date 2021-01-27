import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';
import {settings} from '../../data/dataStore';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.node,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const {title} = this.props;

    return (
      <section className={styles.component}>
        <div>{title}</div>
      </section>  
    );
  }
}

export default Card;