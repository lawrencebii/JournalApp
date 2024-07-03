import React from 'react'
import InputField from '../../components/input-fields/input-field'
import { ScrollView } from 'react-native'
import tw from '../../common/styles/tailwind'

const LoginScreen = () => {
    
  return (
    <ScrollView contentContainerStyle ={ tw.style(
        'bg-wi-aqua pt-10 relative flex-1 flex-col justify-end',
      )}>
    <InputField
            label={'Email'}
            inputProps={{
              placeholder: 'user@gmail.com',
              onChangeText: (text:string) => {console.log(text)},
              value: '',
            }}
            prefixIcon={'mail'}
          />
              <InputField
            label={'Email'}
            inputProps={{
              placeholder: 'user@gmail.com',
              onChangeText: (text:string) => {console.log(text)},
              value: '',
            }}
            prefixIcon={'mail'}
          />
          </ScrollView>
  )
}

export default LoginScreen
