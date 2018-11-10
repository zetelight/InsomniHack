import React, { Component } from 'react';
import './App.css';
import testdata from './testdata';
import Column from './column';
import styled from 'styled-components'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    display: flex;
`;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: testdata.columns,
            tasks: testdata.tasks,
            columnOrder: testdata.columnOrder
        };
    }

    onDragEnd = result => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const start = this.state.columns[source.droppableId];
        const finish = this.state.columns[destination.droppableId];

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

        this.setState(newState);

    };

    add(){
        console.log(this.state);

        var a = {
            "column-4": {
                id: "column-4",
                title: "44444",
                taskIds: []
            }
        }

        var c = {}
        var l = []
        for (var i in this.state.columns) {

            c[i] = this.state.columns[i]

        }

        for (var i in this.state.columnOrder){
            l.push(this.state.columnOrder[i])
        }

        l.push("column-4")

        c["column-4"] = a["column-4"]

        this.setState({
            columns:c,
            columnOrder:l
        })

    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <button  onClick={this.add.bind(this)} >add</button>

                <Container>

                    {this.state.columnOrder.map(columnId => {
                        const column = this.state.columns[columnId];
                        const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

                        return <Column key={column.id} column={column} tasks={tasks}/>;
                    })}

                </Container>
            </DragDropContext>

        );
    }


}


export default App;
