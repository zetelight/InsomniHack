const testdata = {
    tasks: {
        "task-1": { id: "task-1", content: "CIS210" , isMoveable: true},
        "task-2": { id: "task-2", content: "CIS211" , isMoveable: false},
        "task-3": { id: "task-3", content: "CIS212" , isMoveable: false},
        "task-4": { id: "task-4", content: "CIS313" , isMoveable: false}

    },
    columns: {
        "column-1": {
            id: "column-1",
            title: "unselected",
            taskIds: ["task-1", "task-2", "task-3", "task-4"]
        },
        "column-2": {
            id: "column-2",
            title: "term plan",
            taskIds: []
        },
        "column-3": {
            id: "column-3",
            title: "taken",
            taskIds: []
        }
    },
    // Facilitate reordering of the columns
    columnOrder: ["column-1", "column-2", "column-3"]
};

export default testdata;