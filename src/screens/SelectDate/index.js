import React, {useContext, useState} from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import { Container, SelectDateTitleContainer, SelectDateTitle, 
                                SelectDateSubtitle } from './styles';

import Button from '../../components/Button';

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
            <Button 
                text="Proximo passo"
                onPress={() => handleNext()} 
                icon="arrow-right"/>
        </Container>
    );
}

export default SelectDate;