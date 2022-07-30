import React from 'react';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import { Button, ButtonText } from './styles';

const Button = (props) => {
  return (
     <Button onPress={props.onPress}>
        <>
            <ButtonText>
                {props.text}
            </ButtonText>
            {props.icon ?? <IconFontAwesome name={props.icon} size={20} color="#555"/>}
        </>
     </Button>
  );
}

export default Button;