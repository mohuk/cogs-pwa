import axios from 'axios';

const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

export function login(email: string, password: string) {
  return dispatch => {
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));
    callLoginApi(email, password)
      .then(res => {
        dispatch(setLoginSuccess(true));
      })
      .catch(error => {
        dispatch(setLoginError(error));
      });
  };
}

function setLoginSuccess(isLoginSuccess: any) {
  return {
    type: SET_LOGIN_SUCCESS,
    isLoginSuccess
  };
}

function setLoginError(loginError: any) {
  return {
    type: SET_LOGIN_ERROR,
    loginError
  };
}

function callLoginApi(email: string, password: string): Promise<any> {
  var body = {
    data:
      {
        type: 'auths',
        attributes: {
          userName: 'asad',
          password: '',
          keepMeLoggedIn: true
        }
      },
    included: []
  };
  if (email === 'admin' && password === 'admin') {
    return Promise.resolve();
  } else {
    return Promise.reject(new Error('Login Failed'));
  }
  // axios.post('https://cogs.10pearls.com/cogsapi/api/auth/login', body)
  //   .then(console.log)
  //   .catch(console.log);
}

export function reducer(state: any = {
  isLoginSuccess: false,
  loginError: null
}, action: any) {
  switch (action.type) {

    case SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });

    case SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.loginError
      });

    default:
      return state;
  }
}
