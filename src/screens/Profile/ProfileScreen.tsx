import React from 'react';
import { ScrollView } from 'react-native';
import { View } from 'react-native';
import StyledParagraph from '../../components/styled-paragraph/styled-paragraph';
import tw from '../../common/styles/tailwind';
import IconF6 from 'react-native-vector-icons/Ionicons';
import { colors } from '../../common/styles/colors/colors';


const ProfileScreen = () => {

  const renderDataTitle = (key: string, data: string) => {
    return <View style={tw.style(' bg-wi-light-gray py-3 px-5  flex-row ')}>
      <StyledParagraph pStyles={tw.style('text-[15px] font-normal mr-2 ')}>
        {key} :
      </StyledParagraph>
      <StyledParagraph pStyles={tw.style('text-[15px] font-bold ')}>
        {data}
      </StyledParagraph>
    </View>;
  }

  const renderActionTile = (name: string) => {
    return <View style={tw.style(' bg-wi-light-gray py-3 px-5 my-2 mx-2 flex-row justify-between ')}>

      <StyledParagraph pStyles={tw.style('text-[15px] font-bold ')}>
        {name}
      </StyledParagraph>
      <IconF6

        name={'chevron-forward'}
        size={20}
        color={colors.PRIMARY_YELLOW}

      />
    </View>;
  }
  return (
    <ScrollView contentContainerStyle={tw.style(
      'bg-wi-aqua relative pt-5 flex-1 flex-col justify-start',
    )}>

      <StyledParagraph pStyles={tw.style('text-2xl')}>
        Profile
      </StyledParagraph>

      <View style={tw.style('mt-5 pt-2 bg-wi-yellow w-[100px] h-[100px] rounded-full self-center flex-col justify-center ')}>

        <StyledParagraph pStyles={tw.style('text-3xl font-bold ')}>
          LB
        </StyledParagraph>

      </View>

      <StyledParagraph pStyles={tw.style('text-xl font-bold mt-5 mb-5 self-start mx-2 ')}>
        User Details
      </StyledParagraph>
      {renderDataTitle('Name', 'Lokesh Balaji')}
      {renderDataTitle('Email', 'XXXXXXXXXXXXXXXXXXXXXX')}
      {renderDataTitle('Status', 'Active')}

      <StyledParagraph pStyles={tw.style('text-xl font-bold mt-5 mb-5 self-start mx-2 ')}>
        User Actions
      </StyledParagraph>
      {renderActionTile('Edit Profile')}
      {renderActionTile('Change Password')}
      {renderActionTile('Logout')}



    </ScrollView>
  );
};

export default ProfileScreen;
