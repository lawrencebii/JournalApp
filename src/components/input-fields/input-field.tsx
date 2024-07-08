import React from 'react';
import { TextInput, View } from 'react-native';
import { concatStyles } from '../../common/styles/style-util';
import { inputStyles } from './input-style';
import StyledParagraph from '../styled-paragraph/styled-paragraph';

import { colors } from '../../common/styles/colors/colors';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type inputProps = {
    label: any,
    inputProps: Object,
    prefixIcon?: any,
    suffixIcon?: any,
    onSuffixIconPress?: () => void
}
const InputField = (props: inputProps) => {
    return (

        <View style={inputStyles.container}>
            {
                props.label && (
                    <StyledParagraph pStyles={inputStyles.label}>
                        {props.label}
                    </StyledParagraph>
                )
            }
            <TextInput style={concatStyles(inputStyles.input, props.prefixIcon && inputStyles.inputWithIcon)} {...props.inputProps} />
            {
                props.prefixIcon && <Icon
                    style={concatStyles(inputStyles.iconContainer, inputStyles.prefixIconCOntainer)}
                    name={props.prefixIcon}
                    size={20}
                    color={colors.DARK_BLUE}
                />
            }

            {
                props.suffixIcon && <Icon
                    style={concatStyles(inputStyles.iconContainer, inputStyles.suffixContainer)}
                    name={props.suffixIcon}
                    size={20}
                    color={colors.DARK_BLUE}
                    onPress={props.onSuffixIconPress}
                />
            }


        </View>
    );
};

export default InputField;
