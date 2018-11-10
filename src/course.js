import React from 'react';
import styled from 'styled-components'

import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border:${props => (
    props.isDragDisabled ? '2px solid lightgrey' : '2px solid #1bba41'
)};
  border-radius: 15px;
  padding: 8px;
  color: white;
  margin-bottom: 8px;
  text-align: center;
  background-color: ${props => (
      props.isDragDisabled ? 'lightgrey' : '#1bba41'
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