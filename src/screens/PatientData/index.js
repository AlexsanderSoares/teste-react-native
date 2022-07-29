import React from 'react';
import { Container, ScrollViewPatientData, PatientDataTitleContainer, 
            PatientDataTitle, PatientDataSubtitle, FormContainer, 
                    FormField, ButtonNext, ButtonNextText } from './styles';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

const PatientData = () => {
  return (
    <Container>
        <PatientDataTitleContainer>
            <PatientDataTitle>
                Dados do paciente
            </PatientDataTitle>
            <PatientDataSubtitle>
                Preencha os campos a baixo com os dados do paciente.
            </PatientDataSubtitle>
        </PatientDataTitleContainer>
        <FormContainer>
            <FormField placeholder="Nome"/>
            <FormField placeholder="CPF"/>
            <FormField placeholder="Data de nascimento"/>
            <FormField placeholder="Telefone"/>
            <ButtonNext>
                <ButtonNextText>
                    Proximo passo
                    <IconFontAwesome name='arrow-right' color="#777" size={20}/>
                </ButtonNextText>
            </ButtonNext>
        </FormContainer>
    </Container>
  );
}

export default PatientData;