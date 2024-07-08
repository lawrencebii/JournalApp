import React from 'react'
import { View } from 'react-native'
import StyledParagraph from '../styled-paragraph/styled-paragraph'
import tw from '../../common/styles/tailwind'

const CategoryChip = () => {
    return (
        <View style={tw.style('border-[1px] border-wi-blue  px-4 rounded-full mx-2')}>
            <StyledParagraph pStyles={tw.style('text-[14px] font-normal ')}>
                Travel
            </StyledParagraph>
        </View>
    )
}

export default CategoryChip
