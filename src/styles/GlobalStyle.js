import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const Globalstyle = createGlobalStyle`
    ${reset}
    * {
    box-sizing: border-box;
    }
    a{
        text-decoration: none;
    }
    span{
        margin: 0;
        padding: 0;
        line-height: none;
    }
    input{
        border: none;
        outline: none;
    }
    input:focus {
        outline: none;
    }
    button {
        border: none;
        background: none;
        padding: 0;
        cursor: pointer;
    }
    ol, ul, li {
        list-style: none;
    }
    img {
        display: block;
    }
    label {
        display:block;
    }
`;

export default Globalstyle;