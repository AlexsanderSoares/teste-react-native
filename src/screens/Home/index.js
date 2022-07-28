import React from 'react';
import { Container, WelcomeTextContainer, 
                WelcomeTextTitle, WelcomeTextSubtitle, 
                    StartSchedulingContainer, StartSchedulingButton, StartSchedulingButtonText } from './styles';

const Home = () => {
  return (
    <Container>

        <WelcomeTextContainer>
            <WelcomeTextTitle>Olá, Seja bem vindo(a)</WelcomeTextTitle>
            <WelcomeTextSubtitle>Toque no botão abaixo para iniciar o agendamento</WelcomeTextSubtitle>
        </WelcomeTextContainer>

        <StartSchedulingContainer>
            <StartSchedulingButton>
                <StartSchedulingButtonText>
                    Iniciar agendamento
                </StartSchedulingButtonText>
            </StartSchedulingButton>
        </StartSchedulingContainer>

    </Container>
  );
}

export default Home;