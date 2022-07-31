import React, {useState, useContext} from 'react';
import {Alert, Text} from 'react-native';
import { FormContainer } from './styles';
import Container from '../../components/Container';
import Button from '../../components/Button';
import Title from '../../components/Title';
import {SchedulingContext} from '../../contexts/scheduling';
import FormField from '../../components/FormField';

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

            <Title 
                title="Dados do paciente" 
                subtitle="Preencha os campos abaixo com os dados do paciente"/>

            <FormContainer>
                <FormField label="Nome" placeholder="Ex: João da Silva" value={name} onChangeText={setName} mask="name"/>
                <FormField label="CPF" keyboardType="numeric" value={cpf} onChangeText={setCpf} mask="cpf"/>
                <FormField label="Data de nascimento" keyboardType="numeric" value={birthDate} onChangeText={setBirthDate} mask="birthDate"/>
                <FormField label="Telefone" keyboardType="phone-pad" value={phone} onChangeText={setPhone} mask="phone"/>
                <Button 
                    text="Proximo passo"
                    onPress={() => handleNext()} 
                    icon="arrow-right"/>
            </FormContainer>
        </Container>
    );
}

export default PatientData;