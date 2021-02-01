import React from 'react';
import Container from '../Container/Container.js';
import Hero from '../Hero/Hero.js';
import {settings} from '../../data/dataStore';

const Faq = () => (
  <Container>
    <Hero titleText={settings.faq.title} image={settings.faq.image}/>
    <p>{settings.faq.subtitle}</p>
  </Container>
);


export default Faq;