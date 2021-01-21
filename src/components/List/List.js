import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';


class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    image: PropTypes.string,
    column: PropTypes.string,

  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} />
        <div className={styles.description}>
        {this.props.children}
        <div className={styles.columns}>
          <Column columnTitle={'Animals'}></Column>
          <Column columnTitle={'Plants'}></Column>
          <Column columnTitle={'Minerals'}></Column>
        </div>
        </div>
        
      </section>
      )
    }
  }

  export default List;
