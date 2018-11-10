import React, { Component } from 'react';
import './App.css';
import initialData from './initial-data'

import Column from './column';
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd';

const Container = styled.div`
    display: flex;
    background-color: ${props => ('#0f81c7')}
`;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: initialData.columns,
            cisCourses: initialData.cisCourses,
            columnOrder: initialData.columnOrder,
            numberOfColumns: 3
        };
        this.addTerm = this.addTerm.bind(this);
        //this.getTermName = this.getTermName.bine(this);

    }

    onDragEnd = result => {
        // retrieve info from the DragEndEvent
        const { destination, source, draggableId } = result;

        // if no destination, do nothing
        if (!destination) {
            return;
        }

        // if drop back to the same position, do nothing
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const start = this.state.columns[source.droppableId];
        const finish = this.state.columns[destination.droppableId];

        // drop in the same column and don't update course color
        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds);

            newTaskIds.splice(source.index, 1);

            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                taskIds: newTaskIds
            };

            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn,
                },
            };

            this.setState(newState);
            return;
        }

        // drop at other column and update course color
        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds
        };

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds
        };

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };

        // plantraverse();
        // xxx

        this.setState(newState);

    };


    getTermName(id){
        return "Term"+id
    }

    addTerm(){
        var numOfCol = this.state.numberOfColumns+1
        var name = this.getTermName(numOfCol-2)

        var newCol = {
            name: {
                id: name,
                title: name,
                taskIds: []
            }
        }

        var cols = {}
        var colsOrder = []
        for (var c in this.state.columns) {
            cols[c] = this.state.columns[c]
        }

        for (var index in this.state.columnOrder){
            colsOrder.push(this.state.columnOrder[index])
        }

        colsOrder.splice(-1,0,name)
        cols[name] = newCol['name']

        this.setState({
            columns:cols,
            columnOrder:colsOrder,
            numberOfColumns:numOfCol
        })

    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <button onClick={this.addTerm}>add</button>
                <Container>
                    {this.state.columnOrder.map(columnId => {
                        const column = this.state.columns[columnId];
                        const tasks = column.taskIds.map(taskId => this.state.cisCourses[taskId]);
                        return <Column key={column.id} column={column} tasks={tasks}/>;
                    })}
                </Container>
            </DragDropContext>
        );
    }
}
export default App;
