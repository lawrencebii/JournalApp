/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Button, ScrollView, TextInput, View } from 'react-native';
import tw from '../../common/styles/tailwind';
import StyledParagraph from '../../components/styled-paragraph/styled-paragraph';
import InputField from '../../components/input-fields/input-field';
import { colors } from '../../common/styles/colors/colors';
import { inputStyles } from '../../components/input-fields/input-style';

const CreateJournal = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');
    const handleSaveJournal = () => {
        console.log('saving journal');
    }

    return (
        <ScrollView contentContainerStyle={tw.style(
            'bg-wi-aqua relative pt-10 flex-1 flex-col justify-start',
        )}>

            <StyledParagraph pStyles={tw.style('font-bold text-xl pb-5 ')}>
                Create New Journal
            </StyledParagraph>
            <InputField
                label={'Title'}
                inputProps={{
                    placeholder: 'Sport Fishing ...',
                    onChangeText: (text: string) => { setTitle(text) },
                    value: title,
                }}

            />
            <InputField
                label={'Category'}
                inputProps={{
                    placeholder: 'Travel',
                    onChangeText: (text: string) => { setCategory(text) },
                    value: category,
                }}

            />
            <InputField
                label={'Date'}
                inputProps={{
                    placeholder: 'Thur 23rd June 2024',
                    onChangeText: (text: string) => { setDate(text) },
                    value: date,
                }}

            />

            <View style={tw.style(' mx-2')}>
                <StyledParagraph pStyles={inputStyles.label}>
                    Content
                </StyledParagraph>
                <TextInput
                    style={tw.style(
                        'border-0 bg-wi-light-gray py-2 px-5 rounded-md flex-col mb-5',
                    )}
                    onChangeText={text => setContent(text)}
                    value={content}
                    underlineColorAndroid="transparent"
                    placeholder="Write message"
                    placeholderTextColor="grey"
                    numberOfLines={8}
                    multiline={true}
                />
            </View>

            <View style={tw.style('mt-6 w-[20rem] self-center h-[45px] rounded-md ')} >
                <Button
                    title="Save"

                    onPress={() => { handleSaveJournal() }}
                    color={colors.PRIMARY_YELLOW}

                />
            </View>

        </ScrollView >

    );
};

export default CreateJournal;
