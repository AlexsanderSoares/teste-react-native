import React from 'react';
import { Container, ScrollViewPatientData, PatientDataTitleContainer, 
            PatientDataTitle, PatientDataSubtitle, FormContainer, 
                    FormField, ButtonNext, ButtonNextText } from './styles';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

const PatientData = () => {
  return (
    <Container>
        <ScrollViewPatientData>
            <PatientDataTitleContainer>
                <PatientDataTitle>
                    Dados do paciente
                </PatientDataTitle>
                <PatientDataSubtitle>
                    Os campos sinalizados com * são obrigatórios
                </PatientDataSubtitle>
            </PatientDataTitleContainer>
            <FormContainer>
                <FormField placeholder="Nome completo"/>
                <FormField placeholder="CPF"/>
                <ButtonNext>
                    <ButtonNextText>
                        Proximo passo
                        <IconFontAwesome name="arrow-right" color="#fff" size={24}/>
                    </ButtonNextText>
                </ButtonNext>
            </FormContainer>
        </ScrollViewPatientData>
    </Container>
  );
}

export default PatientData;