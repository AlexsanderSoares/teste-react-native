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

export const FinishSchedulingTitleContainer = styled.View`
    text-align: center;
    padding: 5px;
`;

export const FinishSchedulingTitle = styled.Text`
    font-size: 40px;
    color: #fff;
    font-weight: bold;
`;

export const FinishSchedulingSubtitle = styled.Text`
    font-size: 24px;
    color: #fff;
    /* font-weight: bold; */
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

export const FinishButtonContainer = styled.View`
    align-items: center;
    justify-content: center;
    align-content: center;
    margin-top: 50px;
`;

export const FinishButton = styled.TouchableOpacity`
    width: 200px;
    height: 60px;
    border-radius: 20px;
    border: none;
    align-items: center;
    justify-content: center;
    align-content: center;
    background-color: #fff;
`;

export const FinishButtonText = styled.Text`
    font-size: 20px;
    color: #777;
    font-weight: bold;
    text-align: center;
`;
