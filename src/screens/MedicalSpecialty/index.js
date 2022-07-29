import React, {useState} from 'react';

import { Container, MedicalSpecialtyTitleContainer, MedicalSpecialtyTitle, 
                                              MedicalSpecialtySubTitle, FormContainer, ButtonNextContainer,
                                                                ButtonNext, ButtonNextText } from './styles';
import {Picker} from '@react-native-picker/picker';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

const MedicalSpecialty = () => {

  const [selectedLanguage, setSelectedLanguage] = useState();

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
            <FormContainer>
              <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }
                style={{
                  color: "#777",
                  backgroundColor: "#fff",
                  marginTop: 15,
                }}>
                  <Picker.Item label="Selecionar especialidade médica" value="" />
                  <Picker.Item label="Java" value="java" />
                  <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </FormContainer>
            <ButtonNextContainer>
                <ButtonNext>
                    <ButtonNextText>
                        Proximo passo
                        <IconFontAwesome name='arrow-right' color="#777" size={20}/>
                    </ButtonNextText>
                </ButtonNext>
            </ButtonNextContainer>
        </Container>
  );
}

export default MedicalSpecialty;