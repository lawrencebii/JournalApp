import React from 'react';
import { concatStyles } from '../../common/styles/style-util';
import { Text } from 'react-native';
import { paragraphStyles } from './paragraph-style';


type StyledParProps = {
  children: any,
  pStyles: any
}
const StyledParagraph = (props: StyledParProps) => {
  return (
    <Text style={concatStyles(paragraphStyles.paragraph, props.pStyles)}>
      {props.children}
    </Text>
  );
};

export default StyledParagraph;
