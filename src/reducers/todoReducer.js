const initialState = {
  todos: [],
  fetching: false,
  fetch: false,
  error: null,
}

export default function reducer(state=initialState, action) {

  switch(action.type){
    case "FETCH_TODOs":{
      return {
        ...state,
        fetching: true
      }
    }
    case "FETCH_REJECTED":{
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case "FETCH_SUCCESS":{
      return {
        ...state,
        fetching: false,
        fetch: true,
        user: action.payload
      }
    }
    default: {
      return state
    }
  }
}