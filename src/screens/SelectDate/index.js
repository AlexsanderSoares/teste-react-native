import React, {useContext, useState} from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import { Container } from './styles';
import Button from '../../components/Button';
import Title from '../../components/Title';
import {SchedulingContext} from '../../contexts/scheduling';

import DatePicker from 'react-native-date-picker'

const SelectDate = (props) => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const {saveDateScheduling} = useContext(SchedulingContext);

    function handleNext(){
        saveDateScheduling(selectedDate.toJSON());

        props.navigation.navigate("FinishScheduling");
    }

    return (
        <Container>
            <Title 
                title="Selecione a data e hora" 
                subtitle="Selecione a data e a hora que você deseja agendar o atendimento"/>
            <DatePicker
                date={selectedDate}
                onConfirm={(date) => {
                    setSelectedDate(date)
                }}
                textColor="#555"
                minimumDate={new Date()}
                fadeToColor="none"
            />
            <Button 
                text="Proximo passo"
                onPress={() => handleNext()} 
                icon="arrow-right"/>
        </Container>
    );
}

export default SelectDate;