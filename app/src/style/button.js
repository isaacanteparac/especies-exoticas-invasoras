import styled from "styled-components";

export const Button = styled.button`
    width: 200px;
    height: 30px;
    border-radius: 25px;
    outline: none;
    border: none;
    background-color: #0236fb;
    font-size: 20px;
    color: white;
    font-weight: 600px;
    text-transform: capitalize;
    //$(props => props.variant ==='orange' ? 'background': '#Fb4802');
    &:active{
        background-color: #014a97;
    }
`;
