import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
height: 2em;
display: flex;
justify-content: flex-end;
align-items: center;
font-weight: bold;
font-size: 1.4em;
 padding: 0.5em;
outline: 1px solid #888888;
`;

export const Input = props => <InputWrapper>{props.input}</InputWrapper>;
