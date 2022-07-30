import React from 'react';
import { Container, FinishSchedulingTitleContainer, 
                FinishSchedulingTitle, FinishSchedulingSubtitle, 
                        RowContainer, InfoContainer, Label, Info,
                                FinishButtonContainer, FinishButton, FinishButtonText } from './styles';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

const FinishScheduling = () => {
    return (
        <Container>
            <FinishSchedulingTitleContainer>
                <FinishSchedulingTitle>
                    Confira os dados e confirme
                </FinishSchedulingTitle>
                <FinishSchedulingSubtitle>
                    Confira se os dados abaixo, caso estejam corretos confirme para finalizar o agendamento.
                </FinishSchedulingSubtitle>
            </FinishSchedulingTitleContainer>
            <InfoContainer>
                <RowContainer>
                    <Label>
                        Nome: 
                    </Label>
                    <Info>
                        Alexsander
                    </Info>
                </RowContainer>
                <RowContainer>
                    <Label>
                        CPF: 
                    </Label>
                    <Info>
                        076.522.283-36
                    </Info>
                </RowContainer>
                <RowContainer>
                    <Label>
                        Data de nascimento: 
                    </Label>
                    <Info>
                        19/11/1999
                    </Info>
                </RowContainer>
                <RowContainer>
                    <Label>
                        Telefone: 
                    </Label>
                    <Info>
                        (86) 99557-7042
                    </Info>
                </RowContainer>
                <RowContainer>
                    <Label>
                        Especialidade médica: 
                    </Label>
                    <Info>
                        Cardiologista
                    </Info>
                </RowContainer>
                <RowContainer>
                    <Label>
                        Data para agendamento: 
                    </Label>
                    <Info>
                        28/07/2022
                    </Info>
                </RowContainer>
            </InfoContainer>
            <FinishButtonContainer>
                <FinishButton>
                    <FinishButtonText>
                        Confirmar agendamento
                    </FinishButtonText>
                </FinishButton>
            </FinishButtonContainer>
        </Container>
    );
}

export default FinishScheduling;