import {Facebook,
  Instagram,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  
`;

const Logo = styled.h1``;
const Description = styled.p`
margin: 20px 0px;`;
const SocialContainer = styled.div`
display: flex;`;
const SocialIcon = styled.div`
width: 40px;
height:40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color};
display: flex;
align-items: center;
justify-content: center;  
margin-right: 20px
`;

const Fotter = () => {
  return (
    <Container>
      <Left>
        <Logo>Lama</Logo>
        <Description>
          The details that you provide for a product affect the way that the
          product is displayed to customers, make it easier for you to organize
          your products, and help customers find the product. You don't have to
          provide every detail for each product. For products that don't have
          any variants, the Pricing, Inventory, and Shipping sections are shown
          on the product details page. If you add variants, then those sections
          are no longer shown on the product details page
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};

export default Fotter;
