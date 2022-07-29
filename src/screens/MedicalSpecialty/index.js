import React from 'react';

import { Container, MedicalSpecialtyTitleContainer, MedicalSpecialtyTitle, 
                                              MedicalSpecialtySubTitle } from './styles';

const MedicalSpecialty = () => {
  return (
        <Container>
            <MedicalSpecialtyTitleContainer>
                <MedicalSpecialtyTitle>
                    Especialidade médica
                </MedicalSpecialtyTitle>
                <MedicalSpecialtySubTitle>
                    Selecione abaixo para qual especialidade médica que você deseja fazer o agendamento.
                </MedicalSpecialtySubTitle>
            </MedicalSpecialtyTitleContainer>
        </Container>
  );
}

export default MedicalSpecialty;