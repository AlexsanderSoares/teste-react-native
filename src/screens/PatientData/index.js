import React, {useState, useContext} from 'react';
import {Alert} from 'react-native';
import { Container, ScrollViewPatientData, PatientDataTitleContainer, 
            PatientDataTitle, PatientDataSubtitle, FormContainer, 
                    FormField, ButtonNext, ButtonNextText } from './styles';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import {SchedulingContext} from '../../contexts/scheduling';

const PatientData = (props) => {

    const {savePatientData} = useContext(SchedulingContext);

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [phone, setPhone] = useState('');

    function handleNext(){

        if(!name || !cpf || !birthDate || !phone){
            Alert.alert("Erro", "Preencha todos os campos");
            return;
        }

        savePatientData({name, cpf, birthDate, phone});

        props.navigation.navigate("MedicalSpecialty");
    }

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
                <FormField placeholder="Nome" value={name} onChangeText={setName}/>
                <FormField placeholder="CPF" keyboardType="numeric" value={cpf} onChangeText={setCpf}/>
                <FormField placeholder="Data de nascimento" keyboardType="numeric" value={birthDate} onChangeText={setBirthDate}/>
                <FormField placeholder="Telefone" keyboardType="phone-pad" value={phone} onChangeText={setPhone}/>
                <ButtonNext>
                    <ButtonNextText onPress={handleNext}>
                        Proximo passo
                        <IconFontAwesome name='arrow-right' color="#777" size={20}/>
                    </ButtonNextText>
                </ButtonNext>
            </FormContainer>
        </Container>
    );
}

export default PatientData;