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