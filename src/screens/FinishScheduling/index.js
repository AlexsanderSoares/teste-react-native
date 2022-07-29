import React from 'react';
import { View } from 'react-native';

import { Container, FinishSchedulingTitleContainer, FinishSchedulingTitle, FinishSchedulingSubtitle } from './styles';

const FinishScheduling = () => {
    return (
        <Container>
            <FinishSchedulingTitleContainer>
                <FinishSchedulingTitle>
                    Confira os dados e confirme
                </FinishSchedulingTitle>
                <FinishSchedulingSubtitle>
                    Confira se os dados abaixo, caso estejam corretos confirme o agendamento para finalizar.
                </FinishSchedulingSubtitle>
            </FinishSchedulingTitleContainer>
        </Container>
    );
}

export default FinishScheduling;