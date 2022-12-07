import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: 140px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND};
`
export const Resulte = styled.Text`
    text-align: right;
    font-size: 75px;
    color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`
export const GroupButton = styled.View`

`

export const CircleButton = styled.View`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background: ${({ theme }) => theme.COLORS.BUTTON_1_SECONDARY};
`
