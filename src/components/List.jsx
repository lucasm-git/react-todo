// Will contain the ul that displays the tasks
import React from 'react';
import styled from 'styled-components';

export const StyledList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

export const List = props => {
    return <StyledList>{ props.taskList }</StyledList>;
}