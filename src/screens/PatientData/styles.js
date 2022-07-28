import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled(LinearGradient).attrs({
    colors: ['#00FA9A', '#00FF7F'],
    start: {x: 0, y: 0},
    end: {x: 1, y: 1}
})`
    flex: 1;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: ${70 + getStatusBarHeight()}px 20px 0 20px;
`;

export const ScrollViewPatientData = styled.ScrollView``;

export const PatientDataTitleContainer = styled.View`
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 5px;
`;

export const PatientDataTitle = styled.Text`
    font-size: 2rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: #fff;
`;

export const PatientDataSubtitle = styled.Text`
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
`;

export const FormContainer = styled.View`
    align-items: center;
    justify-content: center;
    align-content: center;
    margin-top: 15px;
`;

export const FormField = styled.TextInput.attrs({
    placeholder: props => props.placeholder
})`
    background-color: #fff;
    border-radius: 5px;
    padding: 5px;
`;

export const ButtonNext = styled.TouchableWithoutFeedback`
    width: 200px;
    height: 60px;
    border-radius: 5px;
    border: none;
    align-items: center;
    justify-content: center;
    align-content: center;
    background-color: #fff;
`;

export const ButtonNextText = styled.Text`
    font-size: 1.5em;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    font-weight: bold;
`;

