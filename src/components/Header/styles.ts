import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;
        gap: 0.5rem;

        a {
            width: 3rem;
            height: 3rem;

            display: flex;
            justify-content: center;
            align-items: center;

            color: ${(props) => props.theme['gray-100']};

            border-top: 3px solid transparent; // 3px para ficar parelho com o border bottom de 3px e centralizar correatmente
            border-bottom: 3px solid transparent; //transparente pois quando adicioinado o hover, nao ira causar nenhum movimento

            &:hover {
                border-bottom: 3px solid ${props => props.theme['green-500']};
            }
        }
    }

`