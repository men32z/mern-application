import axios from 'axios';

export const UPDATE_USER = 'users:updateUser';
export const SHOW_ERROR = 'users:showError';

export function updateUser(newUser){
  return {
    type:UPDATE_USER,
    payload:{
      user: newUser
    }
  }
}

export function showError(){
  return {
    type:SHOW_ERROR,
    payload: {
      user: 'Error!!'
    }
  }
}

export function apiRequest(){
  return dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res =>{
      console.log(res.data);
      dispatch(updateUser(res.data.title));
    }).catch(err=>{
      console.log(err);
      dispatch(showError());
    });
  }
}
