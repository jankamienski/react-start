import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/ColumnContainer.js';
import {settings} from '../../data/dataStore';
//import Creator from '../Creator/Creator.js';


class List extends React.Component {
  
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.string,
    columns: PropTypes.array,
    image: PropTypes.string,
    column: PropTypes.string,

  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    const {columns, title, image, description} = this.props;

    return (
      <section className={styles.component}>
        <Hero titleText={title} image={image} />
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        
        
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div> 
        {/*
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
        </div>
        */}

      </section>
    );
  }
}

  

export default List;
