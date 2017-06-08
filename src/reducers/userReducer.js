const initialState = {
  user: {
    id: null,
    first_name: null,
    last_name: null,
    email: null,
  },
  fetching:false,
  fetched: false,
  error: null,
}


export default function reducer(state=initialState, action) {
  switch(action.type){
    case "FETCH_USER":{
      return {
        ...state,
        fetching: true
      }
    }
    case "FETCH_USER_REJECTED":{
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case "FETCH_USER_SUCCESS":{
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload
      }
    }
    default: {
      return state
    }
  }
}