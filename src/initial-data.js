const initialData = {
    cisCourses: {
        'cis210': {
            id: 'cis210',
            courseNum: 210, 
            courseTitle: "Basic concepts and practices of computer science (basic Python).", 
            status: 1,
            preReq: [],
            termAvailability: ["fall", "winter"]
        },

        'cis211': {
           id: 'cis211',
           courseNum: 211, 
           courseTitle: "Basic concepts and practices of computer science (basic Python).", 
           status: 1,
           preReq: ['cis210'],
           termAvailability: ["winter", "spring"]
       },

       'cis212': {
           id: 'cis212',
           courseNum: 212, 
           courseTitle: "Basic concepts and practices of computer science (basic Python).", 
           status: 1,
           preReq: ['cis211'],
           termAvailability: ["winter", "spring"]
       },

       'cis313': {
           id: 'cis313',
           courseNum: 313, 
           courseTitle: "Basic concepts and practices of computer science (basic Python).", 
           status: 1,
           preReq: ['cis212'],
           termAvailability: ["fall", "winter"]
       },

       'cis314': {
           id: 'cis314',
           courseNum: 314, 
           courseTitle: "Basic concepts and practices of computer science (basic Python).", 
           status: 1,
           preReq: ['cis212'],
           termAvailability: ["fall", "winter"]
       },

       'cis315': {
           id: 'cis315',
           courseNum: 315, 
           courseTitle: "Basic concepts and practices of computer science (basic Python).", 
           status: 1,
           preReq: ['cis313'],
           termAvailability: ["winter", "spring"]
       },

       'cis322': {
           id: 'cis322',
           courseNum: 322, 
           courseTitle: "Basic concepts and practices of computer science (basic Python).", 
           status: 1,
           preReq: ['cis212'],
           termAvailability:["fall", "spring"]
       },

       'cis330': {
           id: 'cis330',
           courseNum: 330, 
           courseTitle: "Basic concepts and practices of computer science (basic Python).", 
           status: 1,
           preReq: ['cis314'],
           termAvailability:["winter", "spring"]
       },

       'cis401': {
           id: 'cis401',
           courseNum: 401, 
           courseTitle: "Basic concepts and practices of computer science (basic Python).", 
           status: 1,
           preReq: ['cis212'],
           termAvailability:["fall", "winter", "spring"]
       }
    },

       columns: {
           'cisLower': {
               id: 'cisLower',
               title: 'CIS Lower-Division ',
               taskIds: ['cis210', 'cis211', 'cis212']
           },

           'cisUpper': {
                id: 'cisUpper',
                title: 'CIS Upper Division ',
                taskIds: ['cis313', 'cis314', 'cis315', 'cis330']
           },

           'cisElective': {
                id: 'cisElective',
                title: 'CIS Elective',
                taskIds: [ 'cis322', 'cis401']
            },
           'Term1': {
               id: 'Term1',
               title: 'Term1',
               taskIds: []
           },
           
           'columnTaken':{
               id:"columnTaken",
               title: 'taken courses',
               taskIds:[],
           }
       },
       columnOrder: ['cisLower', 'Term1']
    
}

export default initialData;