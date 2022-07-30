import React from 'react';

import { FormFieldComponent } from './styles';

const FormField = (props) => {

    return (
        <FormFieldComponent placeholder={props.placeholder} 
                            value={props.value} 
                            onChangeText={props.onChangeText}
                            keyboardType={props.keyboardType}/>
    );
}

export default FormField;