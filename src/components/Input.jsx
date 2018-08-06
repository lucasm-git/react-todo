import React, { Component } from 'react';
import styled from 'styled-components';


export const StyledForm = styled.form`
    margin-bottom: 1.2rem;
`;


export const StyledInput = styled.input`
    width: 90%;
    border 2px solid black;
    padding: 0.4rem 0.6rem 0.3rem;
    border-radius: 0.5rem 0 0 0.5rem;
    box-sizing: border-box;
    font-size: 1rem;
    &:focus {
        outline: 0;
    }
`;

export const Submit = styled( StyledInput )`
    width: 10%;
    box-sizing: border-box;
    background: black;
    color: white;
    border-radius: 0 0.5rem 0.5rem 0;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
`;

export class Input extends Component {

    render(){
        return(
            <StyledForm onSubmit={ this.props.onSubmit }>
                <StyledInput type="text" value={ this.props.value } onChange={ this.props.onChange } />
                <Submit type="submit" value="+" />
            </StyledForm>
        );
    }
}