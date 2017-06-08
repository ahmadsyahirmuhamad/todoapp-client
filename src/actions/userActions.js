export function fetchUser () {
  return fetch('http://localhost:3000/api/users/user.json')
    .then((response) => response.json())
    .then((responseJson) => {
      return {
        type: "FETCH_USER_SUCCESS",
        payload: responseJson
      }
    })
    .catch((error) => {
      console.error(error);
      return {
        type: "FETCH_USER_REJECTED",
        payload: error
      }
    });
}


export function setUserFirstName (name) {
  return {
    type: "FETCH_USER_SUCCESS",
    payload: { first_name: name}
  }
}

