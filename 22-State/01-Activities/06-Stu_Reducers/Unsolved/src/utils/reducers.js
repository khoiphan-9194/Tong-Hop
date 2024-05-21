import createId from './createId';

export default function reducer(state, action) {
  switch (action.type) {
case 'ADD_STUDENT':{
    const newID = createId(state.students);
    const newStudent = { ...action.payload, id: newID };

    return {  ...state,
      students: [...state.students, newStudent],

    };
  }
  
  case 'REMOVE_STUDENT':{
    return{ ...state,
      students: state.students.filter((student) => student.id !== action.payload),

    };

    }

    default:
      return state;
  }

};


/*


export default function reducer(state, action) {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case REMOVE_STUDENT:
      return {
        ...state,
        students: [...state.students].filter(
          (student) => student.id !== action.payload
        ),
      };
    default:
      return state;
  }
}



export const ADD_STUDENT = 'ADD_STUDENT';
export const REMOVE_STUDENT = 'REMOVE_STUDENT';
*/