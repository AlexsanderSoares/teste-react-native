import React from 'react';
import { Masks, useMaskedInputProps } from 'react-native-mask-input';

import { FormFieldComponent, LabelField, LabelContainer } from './styles';

const FormField = (props) => {

    
  const maskedInputProps = {
        cpf: useMaskedInputProps({
                value: props.value,
                onChangeText: props.onChangeText,
                mask: Masks.BRL_CPF,
            }),
        birthDate: useMaskedInputProps({
                value: props.value,
                onChangeText: props.onChangeText,
                mask: Masks.DATE_DDMMYYYY,
            }),
        phone: useMaskedInputProps({
                value: props.value,
                onChangeText: props.onChangeText,
                mask: Masks.BRL_PHONE,
            }),
        name: {
            value: props.value,
            onChangeText: props.onChangeText,
            placeholder: props.placeholder,
        }
    }
    return (
        <>
            <LabelContainer>
                <LabelField>
                    {props.label}
                </LabelField>
            </LabelContainer>
                <FormFieldComponent {...maskedInputProps[props.mask] ?? "name"}/>
        </>
    );
}

export default FormField;