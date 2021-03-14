import React from 'react';
import {InputArea, Input} from './styles';
import colors from '../../utils/colors';
import Svg from 'react-native-svg';

interface SignInputProps {
  IconSvg: Svg;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  password?: boolean;
}

const SignInput: React.FC<SignInputProps> = ({
  IconSvg,
  placeholder,
  value,
  onChangeText,
  password,
}) => {
  return (
    <InputArea>
      <IconSvg width="24" height="24" fill={colors.darkBlue} />
      <Input
        placeholder={placeholder}
        placeholderTextColor={colors.darkBlue}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
    </InputArea>
  );
};

export default SignInput;
