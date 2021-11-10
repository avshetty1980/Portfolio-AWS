import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem href="tel:+447931157589">+447931157589</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailo:avshetty1980@gmail.com">avshetty1980@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Code for Good!</Slogan>
        </CompanyContainer>

        <SocialIconsContainer>
        <SocialIcons href="https://github.com/avshetty1980">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/ash-shetty-34a21617b/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      {/* <SocialIcons href="https://github.com/avshetty1980">
        <AiFillGithub size="3rem"/>
      </SocialIcons> */}
      </SocialIconsContainer>

      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
