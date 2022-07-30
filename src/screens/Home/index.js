import React from 'react';
import { Container, WelcomeTextContainer, 
                WelcomeTextTitle, WelcomeTextSubtitle, StartSchedulingContainer} from './styles';

import Button from '../../components/Button';

const Home = (props) => {
  return (
    <Container>
        <WelcomeTextContainer>
            <WelcomeTextTitle>
                Olá, seja bem vindo(a)
            </WelcomeTextTitle>
            <WelcomeTextSubtitle>
                Toque no botão abaixo para fazer o agendamento da consulta.
            </WelcomeTextSubtitle>
            <Button 
                    text="Começar"
                    onPress={() => props.navigation.navigate("PatientData")} 
                    icon="arrow-right"/>
        </WelcomeTextContainer>
    </Container>
  );
}

export default Home;