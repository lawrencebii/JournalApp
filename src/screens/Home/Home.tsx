/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView } from 'react-native';
import tw from '../../common/styles/tailwind';
import StyledParagraph from '../../components/styled-paragraph/styled-paragraph';
import CategoryChip from '../../components/categories/CategoryChip';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={tw.style(
      'bg-wi-aqua relative pt-6 flex-1 flex-col justify-start items-start px-2',
    )}>

      <StyledParagraph pStyles={tw.style('font-bold text-xl pb-5 ')}>
        Welcome Back,
      </StyledParagraph>
      <CategoryChip />


    </ScrollView>

  );
};

export default Home;
