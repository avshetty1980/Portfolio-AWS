import React from 'react';
import { SiAmazonaws, SiFreelancer,SiOpsgenie } from "react-icons/si";
import { LinkContainer, Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have executed cloud strategy development and migration projects on AWS.
      I have implemented projects in a large regulated enterprise environment.
    </SectionText>
    <List>
      <ListItem>
        <SiAmazonaws size="3rem"/>
        <LinkContainer>
          <ListTitle>Cloud native services</ListTitle>
          <ListParagraph>
            AWS SA-Pro Certified
            Serverless <br />
            Security <br />
            Scalibility <br />
            Networking <br />
            IaC (Terraform) <br />
            CI/CD
          </ListParagraph>
        </LinkContainer>
      </ListItem>
      <ListItem>
        <SiFreelancer size="3rem"/>
        <LinkContainer>
          <ListTitle>Full-Stack</ListTitle>
          <ListParagraph>
            Linux <br />
            Bash scripting <br />
            Python <br />
            Node.js <br />
            SQL <br />
            NoSQL
          </ListParagraph>
        </LinkContainer>
      </ListItem>
      <ListItem>
        <SiOpsgenie size="3rem"/>
        <LinkContainer>
          <ListTitle>Leadership</ListTitle>
          <ListParagraph>
            Project Management <br />
            Cost estimation <br />
            Mentoring <br />
            Appraisals <br />            
          </ListParagraph>
        </LinkContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
