import React, { useContext } from 'react';
import { Container, InfoContainer} from './styles';
import Button from '../../components/Button';
import Title from '../../components/Title';
import api from '../../services/api/axios';
import {SchedulingContext} from '../../contexts/scheduling';
import { Alert } from 'react-native';

import RowList from '../../components/RowList';

const FinishScheduling = (props) => {

    const {scheduling} = useContext(SchedulingContext);

    async function handleFinishScheduling(){
        const response = await api.post('/', scheduling);

        if(response.status === 200)
            Alert.alert("Sucesso", "O seu agendamento foi realizado com sucesso.");
        else
            Alert.alert("Erro", "Não foi possível fazer o agendamento");

        props.navigation.navigate("Home");
    } 

    return (
        <Container>
            <Title 
                title="Confira os dados e confirme"
                subtitle="Confira os dados abaixo, caso estejam corretos confirme para agendar." />
            <InfoContainer>
                <RowList label="Nome" info={scheduling.name}/>
                <RowList label="CPF" info={scheduling.cpf}/>
                <RowList label="Data de nascimento" info={scheduling.birthDate}/>
                <RowList label="Telefone" info={scheduling.phone}/>
                <RowList label="Especialidade médica" info={scheduling.medicalSpecialty}/>
                <RowList label="Data para agendamento" info={new Date(scheduling.dateScheduling).toLocaleDateString()}/>
            </InfoContainer>
            <Button 
                text="Confirmar"
                onPress={() => handleFinishScheduling()} 
                icon="check"/>
        </Container>
    );
}

export default FinishScheduling;