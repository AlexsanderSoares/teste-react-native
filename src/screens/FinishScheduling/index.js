import React, { useContext, useState } from 'react';
import { InfoContainer} from './styles';
import Container from '../../components/Container';
import Button from '../../components/Button';
import Title from '../../components/Title';
import api from '../../services/api/axios';
import {SchedulingContext} from '../../contexts/scheduling';
import { Alert } from 'react-native';

import RowList from '../../components/RowList';

const FinishScheduling = (props) => {

    const {scheduling} = useContext(SchedulingContext);
    const [loading, setLoading] = useState(false);


    async function handleFinishScheduling(){
        try{
            if(!loading){
                setLoading(true);

                const response = await api.post('/', scheduling, {timeout: 10000});

                if(response.status === 200)
                    Alert.alert("Sucesso", "O seu agendamento foi enviado");
                else
                    Alert.alert("Erro", "Não foi possível enviar o agendamento");

                setLoading(false);

                props.navigation.navigate("Home");
            }
        }catch(err){

            setLoading(false);

            console.log(err);

            Alert.alert("Erro", "Erro inesperado.");

        }
    } 


    function formatDate(date){
        return `${date.getDate()}/${"0" + (date.getMonth() + 1)}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`;
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
                <RowList label="Data e hora para agendamento" info={formatDate(scheduling.dateScheduling)}/>
            </InfoContainer>
            <Button 
                disabled={loading}
                text={loading ? "Enviando..." : "Confirmar"}
                onPress={() => handleFinishScheduling()} 
                icon={loading ? null : "check"}/>
        </Container>
    );
}

export default FinishScheduling;