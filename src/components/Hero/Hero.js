import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Ash Shetty
      </SectionTitle>

      <SectionText>
      I am a Professionally certified AWS solutions architect. I have 4+ years of
      freelancing experience using the well-architected and cloud adoption
      frameworks to re-factor, re-platform and rehost clients ranging from start-ups
      to mid sized companies on AWS. I have experience in end-to-end ownership of shaping solution and defining the right architectural approach. 
      I have worked extensively in an Agile environment using Scrum and Kanban approaches. I am also a
      self-taught full-stack Node.JS and Python developer.

      </SectionText>

      {/* <Button onClick={() => window.location = 'https://gmail.com'}>Contact me</Button> */}
      
    </LeftSection>
  </Section>
);

export default Hero;