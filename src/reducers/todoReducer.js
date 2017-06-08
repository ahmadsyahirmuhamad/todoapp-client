const initialState = {
  todos: [],
  fetching: false,
  fetch: false,
  error: null,
}

export default function reducer(state=initialState, action) {

  switch(action.type){
    case "FETCH_TODOS":{
      return {
        ...state,
        fetching: true
      }
    }
    case "FETCH_TODOS_REJECTED":{
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case "FETCH_TODOS_SUCCESS":{
      return {
        ...state,
        fetching: false,
        fetch: true,
        todos: action.payload
      }
    }
    default: {
      return state
    }
  }
}