import React from 'react';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import { ButtonComponent, ButtonText, ButtonContainer } from './styles';

const Button = (props) => {
  return (
    <ButtonContainer>
        <ButtonComponent onPress={props.onPress}>
            <>
                <ButtonText>
                    {props.text}
                </ButtonText>
                {props.icon ? <IconFontAwesome name={props.icon} size={20} color="#555"/> : null}
            </>
        </ButtonComponent>
     </ButtonContainer>
  );
}

export default Button;