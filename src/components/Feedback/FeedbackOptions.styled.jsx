import styled from 'styled-components';

export const List = styled.div `
    display: flex;
    gap: 10px;

    button {
        cursor: pointer;
        padding: 5px;
        border: 1px solid tomato;
        border-radius: 5px;

        :hover {
            background-color: tomato;
        }
    }
`