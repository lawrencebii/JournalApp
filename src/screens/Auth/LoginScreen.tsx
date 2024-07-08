import React, { useState } from 'react';
import InputField from '../../components/input-fields/input-field';
import { Button, ScrollView, View } from 'react-native';
import tw from '../../common/styles/tailwind';
// import { connect, useSelector } from 'react-redux';
import StyledParagraph from '../../components/styled-paragraph/styled-paragraph';
import { colors } from '../../common/styles/colors/colors';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }
  const handleLogin = () => {
    console.log('Login');
  };
  // const { isSingningIn } = useSelector((state: any) => state.appState);

  return (
    <ScrollView contentContainerStyle={tw.style(
      'bg-wi-aqua relative pt-10 flex-1 flex-col justify-start',
    )}>
      <StyledParagraph pStyles={tw.style('font-bold text-xl pb-5 ')}>
        Login
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
        label={'Password'}
        inputProps={{
          placeholder: 'password',
          secureTextEntry: !showPassword,
          onChangeText: (text: string) => { setPassword(text) },
          value: password,
        }}
        prefixIcon={'lock'}
        onSuffixIconPress={handleShowPassword}
        suffixIcon={showPassword ? 'eye-outline' : 'eye-off-outline'}
      />

      <View style={tw.style('mt-6 w-[20rem] self-center h-[45px] rounded-md ')} >
        <Button
          title="Login"

          onPress={() => { handleLogin() }}
          color={colors.PRIMARY_YELLOW}

        />
      </View>
    </ScrollView>
  );
};


// const mapStateToProps = ({ appState }: any) => {
//   return {
//     isSigningIn: appState.isSingningIn,
//   };
// };

// export default connect(mapStateToProps, {})(
//   LoginScreen,
// );

export default LoginScreen;
