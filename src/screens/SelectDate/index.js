import React, {useContext, useState} from 'react';
import CalendarPicker from 'react-native-calendar-picker';

import { Container } from './styles';
import Button from '../../components/Button';
import Title from '../../components/Title';

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
            <Title 
                title="Selecione uma data" 
                subtitle="Selecione a data que você deseja agendar o atendimento"/>
            <CalendarPicker onDateChange={setSelectedDate} selectedDayColor="#fff"/>
            <Button 
                text="Proximo passo"
                onPress={() => handleNext()} 
                icon="arrow-right"/>
        </Container>
    );
}

export default SelectDate;