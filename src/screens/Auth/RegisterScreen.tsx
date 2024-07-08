import React, { useState } from 'react';
import InputField from '../../components/input-fields/input-field';
import { Button, ScrollView, View } from 'react-native';
import tw from '../../common/styles/tailwind';
import { colors } from '../../common/styles/colors/colors';
import StyledParagraph from '../../components/styled-paragraph/styled-paragraph';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = () => {
    // Handle registration logic here
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    <ScrollView contentContainerStyle={tw.style(
      'bg-wi-aqua relative pt-10 flex-1 flex-col justify-start',
    )}>
      <StyledParagraph pStyles={tw.style('font-bold text-xl pb-5 ')}>
        Create Account
      </StyledParagraph>
      <InputField
        label={'Email'}
        inputProps={{
          placeholder: 'user@gmail.com',
          onChangeText: (text: string) => { setEmail(text) },
          value: email,
        }}
        prefixIcon={'email-outline'}
      />
      <InputField
        label={'Name'}
        inputProps={{
          placeholder: 'Full Name ',
          onChangeText: (text: string) => { setName(text) },
          value: name,
        }}
        prefixIcon={'account-circle-outline'}
      />
      <InputField
        label={'Password'}
        inputProps={{
          placeholder: 'password',
          onChangeText: (text: string) => { setPassword(text) },
          value: password,
          secureTextEntry: !showPassword,
        }}
        prefixIcon={'lock'}
        onSuffixIconPress={handleShowPassword}
        suffixIcon={showPassword ? 'eye-outline' : 'eye-off-outline'}
      />
      <InputField
        label={'Confirm Password'}

        inputProps={{
          secureTextEntry: !showPassword,
          placeholder: 'password',
          onChangeText: (text: string) => { setConfirmPassword(text) },
          value: confirmPassword,
        }}
        prefixIcon={'lock'}
        onSuffixIconPress={handleShowPassword}

        suffixIcon={showPassword ? 'eye-outline' : 'eye-off-outline'} />
      <View style={tw.style('mt-6 w-[20rem] self-center h-[45px] rounded-md ')} >
        <Button
          title="Register"

          onPress={() => { handleRegister() }}
          color={colors.PRIMARY_YELLOW}

        />
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
