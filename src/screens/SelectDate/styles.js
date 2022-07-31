import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled(LinearGradient).attrs({
    colors: ['#3CB371', '#00FA9A'],
    start: {x: 0, y: 0},
    end: {x: 1, y: 1}
})`
    flex: 1;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 0px 20px 0 20px;
`;

export const SelectDateTitleContainer = styled.View`
    text-align: center;
    padding: 5px;
`;

export const SelectDateTitle = styled.Text`
    font-size: 40px;
    color: #fff;
    font-weight: bold;
`;

export const SelectDateSubtitle = styled.Text`
    font-size: 24px;
    color: #fff;
    /* font-weight: bold; */
`;

export const ButtonNextConatiner = styled.View`
    align-items: center;
    justify-content: center;
    align-content: center;
    margin-top: 50px;
`;

export const ButtonNext = styled.TouchableOpacity`
    width: 200px;
    height: 60px;
    border-radius: 20px;
    border: none;
    align-items: center;
    justify-content: center;
    align-content: center;
    background-color: #fff;
`;

export const ButtonNextText = styled.Text`
    font-size: 18px;
    color: #777;
    font-weight: bold;
`;