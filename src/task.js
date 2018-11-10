import React from 'react';
import styled from 'styled-components'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
`;

export default class Task extends React.Component {
    render() {

        return(
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {provided => (
                    <Container
                        //innerRef={provided.innerRef}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        {this.props.task.content}

                    </Container>
                )}
            </Draggable>
        );


    }
}