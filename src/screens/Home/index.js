import React from 'react';
import { Container, WelcomeTextContainer, 
                WelcomeTextTitle, WelcomeTextSubtitle, 
                    StartSchedulingContainer, StartSchedulingButton, StartSchedulingButtonText } from './styles';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

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
            <StartSchedulingContainer>
                <StartSchedulingButton onPress={() => props.navigation.navigate("PatientData")}>
                    <StartSchedulingButtonText>
                        Comerçar
                        <IconFontAwesome name="arrow-right" size={20} color="#777" />
                    </StartSchedulingButtonText>
                </StartSchedulingButton>
            </StartSchedulingContainer>
        </WelcomeTextContainer>
    </Container>
  );
}

export default Home;