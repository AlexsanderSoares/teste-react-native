import React, { useContext } from 'react';
import { Container, FinishSchedulingTitleContainer, 
                FinishSchedulingTitle, FinishSchedulingSubtitle, 
                        RowContainer, InfoContainer, Label, Info,
                                FinishButtonContainer, FinishButton, FinishButtonText } from './styles';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import {SchedulingContext} from '../../contexts/scheduling';

const FinishScheduling = () => {

    const {scheduling} = useContext(SchedulingContext);

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