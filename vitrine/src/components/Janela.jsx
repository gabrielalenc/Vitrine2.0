import React from "react";
import styled from "styled-components";


const Modelo = styled.div`
    background-color: #fff;
    margin: 32px 0;
    overflow: hidden;
    padding: 32px;
`

function Janela (props){
    return<Modelo>
        {props.children}
    </Modelo>
}

export default Janela