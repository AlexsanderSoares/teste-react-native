import React, {useContext, useState} from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {Text} from 'react-native';

import { Container, SelectDateTitleContainer, SelectDateTitle, 
                                SelectDateSubtitle, ButtonNextConatiner, ButtonNext, ButtonNextText } from './styles';

import {SchedulingContext} from '../../contexts/scheduling';

const SelectDate = (props) => {

    const [selectedDate, setSelectedDate] = useState("");

    const {saveDateScheduling} = useContext(SchedulingContext);

    function handleNext(){
        saveDateScheduling(selectedDate.toJSON());

        props.navigation.navigate("FinishScheduling");
    }

    return (
        <Container>
            <SelectDateTitleContainer>
                <SelectDateTitle>
                    Selecione uma data
                </SelectDateTitle>
                <SelectDateSubtitle>
                    Selecione a data que você deseja agendar o atendimento.
                </SelectDateSubtitle>
            </SelectDateTitleContainer>
            <CalendarPicker onDateChange={setSelectedDate} selectedDayColor="#fff"/>
            <ButtonNextConatiner>
                <ButtonNext onPress={handleNext}>
                    <ButtonNextText>
                        Conferir e agendar
                        <IconFontAwesome name="arrow-right" color="#777" size={18}/>
                    </ButtonNextText>
                </ButtonNext>
            </ButtonNextConatiner>
        </Container>
    );
}

export default SelectDate;