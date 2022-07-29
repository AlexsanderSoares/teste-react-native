import React, {useState} from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import { Container, SelectDateTitleContainer, SelectDateTitle, 
                                SelectDateSubtitle, ButtonNextConatiner, ButtonNext, ButtonNextText } from './styles';

const SelectDate = (props) => {

    const [selectedDate, setSelectedDate] = useState(null);

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
                <ButtonNext>
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