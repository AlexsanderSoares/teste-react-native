import styled from "styled-components/native";

export const ButtonContainer = styled.View`
    align-items: center;
    justify-content: center;
    align-content: center;
    margin-top: 50px;
`;

export const ButtonComponent = styled.TouchableOpacity.attrs(props => ({
    disabled: props.disabled
}))`
    width: 250px;
    height: 60px;
    border-radius: 20px;
    border: none;
    align-items: center;
    justify-content: center;
    align-content: center;
    background-color: #fff;
    flex-direction: row;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    font-size: 20px;
    color: #555;
    font-weight: bold;
    margin-right: 15px;
`;