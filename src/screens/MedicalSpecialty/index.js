import React, {useState, useContext} from 'react';

import { Container, MedicalSpecialtyTitleContainer, MedicalSpecialtyTitle, 
                                              MedicalSpecialtySubTitle, FormContainer } from './styles';
import {Picker} from '@react-native-picker/picker';
import Button from '../../components/Button';
import Title from '../../components/Title';

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
            <Title 
                title="Especialidade médica" 
                subtitle="Selecione abaixo para qual especialidade médica que você deseja fazer o agendamento"/>
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