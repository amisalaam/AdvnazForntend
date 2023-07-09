import {
  LOGOUT,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  ACTIVATION_FAIL,
  ACTIVATION_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  USER_LOADED_FAIL,
  USER_LOADED_SUCCESS,
  AUTHENTICATED_FAIL,
  AUTHENTICATED_SUCCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_CONFIRMS_FAIL,
  PASSWORD_RESET_CONFIRMS_SUCCESS,
} from "./types";
import axios from "axios";
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const API_URL = import.meta.env.VITE_API_URL;

export const checkAuthenticated = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ token: localStorage.getItem("access") });
    try {
      const res = await axios.post(`${API_URL}/auth/jwt/verify/`, body, config);
      if (res.data.code !== "token_not_valid") {
        dispatch({
          type: AUTHENTICATED_SUCCESS,
        });
      } else {
        dispatch({
          type: AUTHENTICATED_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: AUTHENTICATED_FAIL,
      });
    }
  } else {
    dispatch({
      type: AUTHENTICATED_FAIL,
    });
  }
};

export const load_user = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(`${API_URL}/api/me/`, config);
     
      


      dispatch({
        type: USER_LOADED_SUCCESS,
        payload: res.data.access,
        payload: res.data,
      });
       console.log(res.data)
    } catch (err) {
      console.log(err);
      dispatch({
        type: USER_LOADED_FAIL,
      });
    }
  } else {
    dispatch({
      type: USER_LOADED_FAIL,
    });
  }
};

export const signup = (name,email, password,re_password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({name,email, password,re_password});

  try {
    const res = await axios.post(`${API_URL}/auth/users/`, body, config);

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
      
    });

  } catch (err) {
    console.log(err)
    dispatch({
      type: SIGNUP_FAIL,
    });
    toast.error('Signup failed. Please try again.');
  }
};

export const verify =(uid,token) => async dispatch =>{
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({uid,token});

  try {
    
    await axios.post(`${API_URL}/auth/users/activation/`, body, config);

    dispatch({
      type: ACTIVATION_SUCCESS,
      
    });

  } catch (err) {
    console.log(err);
    dispatch({
      type: ACTIVATION_FAIL,
    });
  }
};
  

export const login = (email, password) => async (dispatch) => {
  
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(`${API_URL}/auth/jwt/create/`, body, config);
console.log(res)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
      
    });
    
    dispatch(load_user());
    
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOGIN_FAIL,
    });
    toast.error('Login failed. Please try again.');

  }
};

export const reset_password = (email) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email });
  try {
    await axios.post(`${API_URL}/auth/users/reset_password/`, body, config);
    dispatch({
      type: PASSWORD_RESET_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: PASSWORD_RESET_FAIL,
    });
  }
};

export const reset_password_confirm =
  (uid, token, new_password, re_new_password) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ uid, token, new_password, re_new_password });
    try {
      await axios.post(
        `${API_URL}/auth/users/reset_password_confirm/`,
        body,
        config
      );
      dispatch({
        type: PASSWORD_RESET_CONFIRMS_SUCCESS,
      });
    } catch (err) {
      dispatch({
        type: PASSWORD_RESET_CONFIRMS_FAIL,
      });
    }
  };

// LOGOUT FUNCTION
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  toast.success('Logout success.');
};



