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

    unpickTraverse(unpick, newCourses) {
        var unpicked = unpick.taskIds;
        var i;
        var j;
        for (i = 0; i < unpicked.length; i++) {
          const prerequest = newCourses[unpicked[i]].preReq
          var flag = true
          for (j = 0; j < prerequest.length; j++) {
            if (unpicked.includes(prerequest[j])) {
              flag = false
            }
          }
          newCourses[unpicked[i]].isMoveble = flag
    
        }
        return newCourses
      }
    
      planTraverse(newColumns, newCourses) {
        // dictionary of tasks
        // key is the class name (string)
        // values is the class instance
        var newArray = [];
        var curCol = newColumns['columnTaken'];
        for (var j = 0; j < curCol.taskIds.length; j++) {
          var curCourse = newCourses[curCol.taskIds[j]];
          newArray.push({ key: curCol.taskIds[j], value: curCourse })
        }
        for (var i = 1; i <= Object.keys(newColumns).length - 2; ++i) {
          curCol = newColumns['Term' + i];
          for (j = 0; j < curCol.taskIds.length; j++) {
            curCourse = newCourses[curCol.taskIds[j]];
            newArray.push({ key: curCol.taskIds[j], value: curCourse })
          }
        }
        for (var myKey in newArray) {
          var course = newArray[myKey];
          for (var myIn in course.value.preReq) {
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
    
        //is able to add to previous term
        var case2Allow = true;
        if (destination.droppableId !== "columnUnpicked" && destination.droppableId !== "columnTaken") {
          console.log(this.state.columnOrder)
          for (var col in this.state.columnOrder) {
            if (this.state.columnOrder[col] !== "columnUnpicked" && this.state.columnOrder[col] !== "columnTaken") {
              console.log(destination.droppableId < this.state.columnOrder[col])
              if (destination.droppableId < this.state.columnOrder[col]) {
                console.log(destination.droppableId < this.state.columnOrder[col])
                case2Allow = false;
              }
            }
          }
        }
    
        if (!case2Allow || isConflictWithTerm) return;
    
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
    
        var newColumns = this.state.columns
        var unpick = newStart
        newColumns[newStart.id] = newStart
        newColumns[newFinish.id] = newFinish
        
    
        var newCourses = this.unpickTraverse(unpick, this.state.cisCourses);
        var courses = this.planTraverse(newColumns, newCourses);
    
        var newState = {
          ...this.state,
          columns: newColumns,
          cisCourses: courses
        };
    
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
            <DragDropContext  onDragEnd={this.onDragEnd}>
            <div className={'div2style'}>
            
                <p className={'pstyle'}>
                    Computer and Information Science
                </p>
            </div>

            <div className={'divstyle'}>
            <button className={'buttonstyle'} onClick={this.addTerm}>add</button>
            </div>
               
                <Container className={  'containerstyle'  }>
                    {this.state.columnOrder.map(columnId => {
                        console.log(columnId);
                        const column = this.state.columns[columnId];
                        const tasks = column.taskIds.map(taskId => this.state.cisCourses[taskId]);
                        const isDropDisabled = column.taskIds.length >= 5 && column.id !== "columnUnpicked" && column.id !== "columnTaken";
                        const left = columnId === "columnUnpicked";
                        const right = columnId === "columnTaken"
                        
                        return <Column className={'columnstyle'} left={left}  right={right} key={column.id} column={column} tasks={tasks} isDropDisabled={isDropDisabled} />;
                    })}
                </Container>
            </DragDropContext>
        );
    }
}
export default App;
