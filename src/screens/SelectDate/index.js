import React, {useState} from 'react';
import CalendarPicker from 'react-native-calendar-picker';

import { Container } from './styles';

const SelectDate = (props) => {

    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <Container>
            <CalendarPicker onDateChange={setSelectedDate}/>
        </Container>
    );
}

export default SelectDate;