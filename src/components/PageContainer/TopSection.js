import React from "react";
import styled from "styled-components";
import TopSectionBackgroundImg from "../../images/main-background.webp";
import { BrandLogo } from "../BrandLogo";
// import Video from "../../images/clouds-and-blue-sky.mp4";
import { Marginer } from "../../components/Marginer/";
import { Button } from "../Button";



const TopSectionContainer = styled.div`
  width: 100%;
  height: 800px;
  background: url(${TopSectionBackgroundImg});
  background-position: 0px;
  background-size: cover;
`;


const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column; 
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 15em;
  color: #fff;
  line-height: 1.7;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const SloganText = styled.h3`
  margin: 0; 
  line-height: 1;
  color: #fff;
  font-weight: 500;
  font-size: 35px;
`;

export function TopSection(props) {
  const { children } = props;

  return ( 
    <TopSectionContainer>
        <BackgroundFilter>
          {children}
          <TopSectionInnerContainer>
            <LogoContainer>
              <BrandLogo logoSize={65} textSize={55}/>
              <Marginer direction="vertical" margin={8}></Marginer>
              <SloganText>Never know </SloganText>
              <SloganText>who watching...</SloganText>
              <Marginer direction="vertical" margin={15}/>
              <Button>Secure me</Button>
            </LogoContainer>
            <Title>Heaven</Title>      
          </TopSectionInnerContainer>
        </BackgroundFilter> 
    </TopSectionContainer>
  );
}