import {StyleSheet} from 'react-native';

import tw from '../../common/styles/tailwind';
const inputStyles = StyleSheet.create({
  container: tw.style('relative my-2 mx-2'),
  label: tw.style('text-wi-blue font-300 text-base text-left mb-2'),
  input: tw.style('border-0 bg-wi-light-gray py-3 px-5 rounded-md'),
  inputWithIcon: tw.style('pl-14'),
  iconContainer: tw.style('absolute bottom-12px'),
  prefixIconCOntainer: tw.style('left-[20px]'),
  suffixContainer: tw.style('right-[20px]'),
  icon: tw.style('text-wi-blue opacity-50'),
});

export {inputStyles};
