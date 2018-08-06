// Will contain all the logic, and render both the list component, and the input + button component
import React, { Component } from 'react';
import { List } from './../components/List';
import { Input } from './../components/Input';
import styled from 'styled-components';


export const StyledContainer = styled.div`
    width: 25%;
    min-height: 20rem;
    max-height: 30rem;
    padding: 1rem;
    border: 2px solid black;
    border-radius: 0.5rem;
    overflow: auto;
`;

export const StyledLi = styled.li`
    display: flex;
    justify-content: space-between;
    width: 100%;
    border 2px solid black;
    padding: 0.4rem 0.6rem 0.3rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
    margin-bottom: 0.3rem;
`;

export const Delete = styled.input`
    border: none;
    cursor: pointer;
    font-size: 0.8rem;
`;

export class TodoContainer extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            inputValue: '',
            tasks: [ 'Do stuff.' ]
        }
        this.handleChange = this.handleChange.bind( this );
        this.handleSubmit = this.handleSubmit.bind( this );
    }

    handleChange( e ) {
        this.setState({ inputValue: e.target.value });
    }

    handleSubmit( e ) {
        if( this.state.inputValue !== '' ) {
            this.setState({ tasks: [ ...this.state.tasks, this.state.inputValue ]})
            this.setState({ inputValue: '' });
        }
        e.preventDefault();
    }

    render() {
        let taskList = this.state.tasks.map((oneTask, i) => {
            return <StyledLi key={i}>{ oneTask }</StyledLi>;
        })
        return(
            <StyledContainer>
                <Input onSubmit = { this.handleSubmit } onChange = { this.handleChange } value = { this.state.inputValue } />
                <List taskList = { taskList } />
            </StyledContainer>
        );
    }
}