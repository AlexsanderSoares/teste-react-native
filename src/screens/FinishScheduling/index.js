import React, { useContext } from 'react';
import { Container, RowContainer, InfoContainer, Label, Info,} from './styles';
import Button from '../../components/Button';
import Title from '../../components/Title';
import api from '../../services/api/axios';
import {SchedulingContext} from '../../contexts/scheduling';
import { Alert } from 'react-native';

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
                <RowContainer>
                    <Label>
                        Nome: 
                    </Label>
                    <Info>
                        {scheduling.name}
                    </Info>
                </RowContainer>
                <RowContainer>
                    <Label>
                        CPF: 
                    </Label>
                    <Info>
                        {scheduling.cpf}
                    </Info>
                </RowContainer>
                <RowContainer>
                    <Label>
                        Data de nascimento: 
                    </Label>
                    <Info>
                        {scheduling.birthDate}
                    </Info>
                </RowContainer>
                <RowContainer>
                    <Label>
                        Telefone: 
                    </Label>
                    <Info>
                        {scheduling.phone}
                    </Info>
                </RowContainer>
                <RowContainer>
                    <Label>
                        Especialidade médica: 
                    </Label>
                    <Info>
                        {scheduling.medicalSpecialty}
                    </Info>
                </RowContainer>
                <RowContainer>
                    <Label>
                        Data para agendamento: 
                    </Label>
                    <Info>
                        {new Date(scheduling.dateScheduling).toLocaleDateString()}
                    </Info>
                </RowContainer>
            </InfoContainer>
            <Button 
                text="Confirmar"
                onPress={() => handleFinishScheduling()} 
                icon="check"/>
        </Container>
    );
}

export default FinishScheduling;