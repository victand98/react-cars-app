import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";
import JeepImg from "../../../assets/images/jeep.png";

const AboutUsContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-center
        pt-4
        pb-4
        pr-7
        pl-7
        md:pl-0
        md:pr-0
        bg-white
    `}
`;

const CardContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
        md:w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16
    `}
`;

const Title = styled.h1`
  ${tw`
        text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `}
`;

const InfoText = styled.h1`
  ${tw`
        md:max-w-2xl
        text-sm
        md:text-base
        text-gray-500
        font-normal
        mt-4
    `}
`;

export const AboutUs = () => {
  return (
    <AboutUsContainer>
      <CardContainer>
        <img src={JeepImg} alt="" />
      </CardContainer>
      <InfoContainer>
        <Title>Fell the Best Experience with Our Deals</Title>
        <InfoText>
          Esse elit est veniam sunt fugiat ipsum magna veniam aliqua occaecat
          cillum. Duis pariatur excepteur anim ad. Pariatur consequat veniam et
          sint velit nisi elit ullamco. Fugiat anim et dolor aliquip dolore
          voluptate magna elit. Do aliquip aliquip amet do ad occaecat nostrud
          ut velit do enim. Dolore occaecat qui non elit ullamco consequat
          deserunt laboris. ut velit do enim. Dolore occaecat qui non elit
          ullamco consequat deserunt laboris. ut velit do enim. Dolore occaecat
          qui non elit ullamco consequat deserunt laboris.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
};
