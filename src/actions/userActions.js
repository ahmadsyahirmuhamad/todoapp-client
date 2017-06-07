export function fetchUser () {
  return {
    type: "FETCH_SUCCESS",
    payload: {
      first_name: "ahmad",
      last_name: "syahir",
      email: "ahmad@syahir.com",
    }
  }
}