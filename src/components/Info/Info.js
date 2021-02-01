import React from 'react';
import {settings} from '../../data/dataStore';
import Container from '../Container/Container.js';
import Hero from '../Hero/Hero.js';


const Info = () => (
  <Container>
    <Hero titleText={settings.info.title} image={settings.info.image}/>
    <p>{settings.info.subtitle}</p>
  </Container>
);

export default Info;