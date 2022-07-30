import React, {useState, useContext} from 'react';

import { Container, MedicalSpecialtyTitleContainer, MedicalSpecialtyTitle, 
                                              MedicalSpecialtySubTitle, FormContainer } from './styles';
import {Picker} from '@react-native-picker/picker';
import Button from '../../components/Button';

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
            <Button
              text="Proximo passo"
              onPress={() => handleNext()} 
              icon="arrow-right"/>
        </Container>
  );
}

export default MedicalSpecialty;