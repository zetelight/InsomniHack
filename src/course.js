import React from 'react';
import styled from 'styled-components'

import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (
    props.isDragDisabled ? '#ffebbb' : '#ffcab0'
  )};
`;

export default class Course extends React.Component {
    render() {
        const isDragDisabled = this.props.task.isMoveble === false;
        return(
            <Draggable 
                draggableId={this.props.task.id} 
                index={this.props.index}
                isDragDisabled={isDragDisabled}
            >
                {provided => (
                    <Container
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        isDragDisabled={isDragDisabled}
                    >
                        {this.props.task.content}
                    </Container>
                )}
            </Draggable>
        );
    }
}