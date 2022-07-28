import React from 'react';
import { Container, WelcomeTextContainer, 
                WelcomeTextTitle, WelcomeTextSubtitle, 
                    StartSchedulingContainer, StartSchedulingButton, StartSchedulingButtonText } from './styles';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  return (
    <Container>

        <WelcomeTextContainer>
            <WelcomeTextTitle>Olá, Seja bem vindo(a)</WelcomeTextTitle>
            <WelcomeTextSubtitle>Toque no botão abaixo para iniciar o agendamento</WelcomeTextSubtitle>
        </WelcomeTextContainer>

        <StartSchedulingContainer>
            <StartSchedulingButton onPress={() => {}}>
                <StartSchedulingButtonText>
                    Iniciar agendamento
                    <IconFontAwesome name='arrow-right' color="#fff" size={24}/>
                </StartSchedulingButtonText>
            </StartSchedulingButton>
        </StartSchedulingContainer>

    </Container>
  );
}

export default Home;