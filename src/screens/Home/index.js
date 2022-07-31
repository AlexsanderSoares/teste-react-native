import React from 'react';
import Container from '../../components/Container';
import Button from '../../components/Button';
import Title from '../../components/Title';

const Home = (props) => {
  return (
    <Container>
        <Title 
            title="Olá, seja bem vindo(a)" 
            subtitle="Toque no botão abaixo para fazer o agendamento da consulta"/>
        <Button 
                text="Começar"
                onPress={() => props.navigation.navigate("PatientData")} 
                icon="arrow-right"/>
    </Container>
  );
}

export default Home;