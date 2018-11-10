import React, { Component } from 'react';
import './App.css';
import initialData from './initial-data'

import Column from './column';
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd';

const Container = styled.div`
    display: flex;
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
    }

    unpickTraverse(courses) {
      var newCourses = Object.assign({}, courses);
      var unpicked = this.state.columns['columnUnpicked'].taskIds;
      var i;
      var j;
      for (i=0;i<unpicked.length;i++) {
        const prerequest = newCourses[unpicked[i]].preReq
        var flag = true
        for (j=0;j<prerequest.length;j++) {
          if (unpicked.includes(prerequest[j])) {
            flag = false
          }
        }
        
        newCourses[unpicked[i]].isMoveble = flag
          
      }
      console.log(newCourses);
      return newCourses
    }

    planTraverse(newCourses){
      // dictionary of tasks
      // key is the class name (string)
      // values is the class instance
      var newArray = [];
      var curCol = this.state.columns['columnTaken'];
      for (var j=0; j<curCol.taskIds.length; j++){
        var curCourse = newCourses[curCol.taskIds[j]];
        newArray.push({key:curCol.taskIds[j], value: curCourse})
      }
      for(var i=1; i<=Object.keys(this.state.columns).length-2; ++i){
          curCol = this.state.columns['columnTerm' + i];
          for (j=0; j<curCol.taskIds.length; j++){
              curCourse = newCourses[curCol.taskIds[j]];
              newArray.push({key:curCol.taskIds[j], value: curCourse})
          }
      }
      for (var myKey in newArray){
        var course = newArray[myKey];
          for (var myIn in course.value.preReq){
            var pre = course.value.preReq[myIn]
            newCourses[pre].isMoveble = false;
          }
      }
    return newCourses;
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


        // check if the course has the preReq in the current term. If so, return and do nothing
        let curClass = start.taskIds[source.index];
        let curTermClasses = finish.taskIds;
        let curPre = this.state.cisCourses[curClass].preReq;
        let isConflictWithTerm = false;
        for (var i = 0; i < curTermClasses.length; i++) {
            if (curPre.indexOf(curTermClasses[i]) !== -1) {
                isConflictWithTerm = true;
            }
        }
        
        if (isConflictWithTerm) return;


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
        var newCourses = this.unpickTraverse(this.state.cisCourses);
        var courses = this.planTraverse(newCourses);

        
        console.log(newCourses);

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },

            cisCourses: courses
        };

        console.log(newState)


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
                        const isDropDisabled = column.taskIds.length >= 5 && column.id !== "columnUnpicked" && column.id !== "columnTaken";
                        return <Column key={column.id} column={column} tasks={tasks} isDropDisabled={isDropDisabled}/>;
                    })}
                </Container>
            </DragDropContext>
        );
    }
}
export default App;
