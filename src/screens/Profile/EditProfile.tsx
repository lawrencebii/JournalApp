import React from 'react'
import { ScrollView } from 'react-native'
import StyledParagraph from '../../components/styled-paragraph/styled-paragraph'
import tw from '../../common/styles/tailwind'

const EditProfile = () => {
    return (
        <ScrollView contentContainerStyle={tw.style(
            'bg-wi-aqua relative pt-10 flex-1 flex-col justify-start',
        )}>

            <StyledParagraph pStyles={tw.style('text-2xl')}>
                Create Journal
            </StyledParagraph>

        </ScrollView>

    )
}

export default EditProfile
