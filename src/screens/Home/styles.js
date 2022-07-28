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

export const WelcomeTextContainer = styled.View`
    text-align: center;
    padding: 5px;
`;

export const WelcomeTextTitle = styled.Text`
    font-size: 2rem;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
`;

export const WelcomeTextSubtitle = styled.Text`
    font-size: 1rem;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
`;

export const StartSchedulingContainer = styled.View`
    align-items: center;
    justify-content: center;
    align-content: center;
    margin-top: 50px;
`;

export const StartSchedulingButton = styled.TouchableWithoutFeedback`
    width: 200px;
    height: 60px;
    border-radius: 5px;
    border: none;
    align-items: center;
    justify-content: center;
    align-content: center;
    background-color: #fff;
`;

export const StartSchedulingButtonText = styled.Text`
    font-size: 1.5em;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    font-weight: bold;
`;