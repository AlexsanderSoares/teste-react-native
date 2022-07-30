import React, {useState, useContext} from 'react';

import { Container, MedicalSpecialtyTitleContainer, MedicalSpecialtyTitle, 
                                              MedicalSpecialtySubTitle, FormContainer, ButtonNextContainer,
                                                                ButtonNext, ButtonNextText } from './styles';
import {Picker} from '@react-native-picker/picker';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import {SchedulingContext} from '../../contexts/scheduling';

const MedicalSpecialty = (props) => {

  const [selectedMedicalSpecialty, setSelectedMedicalSpecialty] = useState("");

  const {saveMedicalSpecialty} = useContext(SchedulingContext);

  function handleNext(){
      saveMedicalSpecialty(selectedMedicalSpecialty);

      props.navigation.navigate("SelectDate");
  }

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
                selectedValue={selectedMedicalSpecialty}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedMedicalSpecialty(itemValue)
                }
                style={{
                  color: "#777",
                  backgroundColor: "#fff",
                  marginTop: 15,
                }}>
                  <Picker.Item label="Selecionar especialidade médica" value="" />
                  <Picker.Item label="Cardiologista" value="Cardiologista" />
                  <Picker.Item label="Clínico Geral" value="Clínico Geral" />
              </Picker>
            </FormContainer>
            <ButtonNextContainer>
                <ButtonNext onPress={handleNext}>
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