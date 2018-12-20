import React from 'react';
import styled from 'styled-components'
import Course from "./course";
import './App.css';
import { Droppable } from 'react-beautiful-dnd'

const Container = styled.div`
 
background-color: #F4F4F4;
  margin: auto;
  margin-top:20px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;
  display: flex;
  flex-direction: column;
  border: 2px solid #F7D25F;
  border-radius: 15px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const CourseList = styled.div`
  padding: 8px;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : '#F4F4F4')};
  border: 2px solid #F4F47;
  border-radius: 15px;
  flex-grow:1;
  min-height:100px;
`;

export default class Column extends React.Component {
    render() {
        return(
            <Container >
                <Title>{this.props.column.title}</Title>
                <Droppable 
                    droppableId={this.props.column.id}
                    isDropDisabled={this.props.isDropDisabled}
                >
                    {(provided, snapshot) => (
                        <CourseList 
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                        >
                            {this.props.tasks.map((task,index) =>
                                <Course key={task.id} task={task} index={index} />
                            )}
                            {provided.placeholder}
                        </CourseList>
                    )}
                </Droppable>
            </Container>

        );
    }
}