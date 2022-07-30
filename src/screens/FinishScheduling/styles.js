import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled(LinearGradient).attrs({
    colors: ['#00FF7F', '#00FA9A'],
    start: {x: 0, y: 0},
    end: {x: 1, y: 1}
})`
    flex: 1;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 0px 20px 0 20px;
`;

export const InfoContainer = styled.View`
    width: 100%;
    margin-top: 10px;
`;

export const RowContainer = styled.View`
    flex-direction: row;
    border-width:1px;
    border-color: #eee;
    margin-top: 0px;
    padding: 12px;
    background-color: #fff;
`;

export const Label = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #555;
    margin-right: 5px;
`;

export const Info = styled.Text`
    font-size: 18px;
    color: #555;
`;