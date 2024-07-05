import { combineReducers } from 'redux';

const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';

export const addTask = (task) => ({ type: ADD_TASK, task });
export const deleteTask = (id) => ({ type: DELETE_TASK, id });

const initialState = {
  tasks: []
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { id: Date.now(), task: action.task }]
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.id)
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  task: taskReducer
});

export default rootReducer;
