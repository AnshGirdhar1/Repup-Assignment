import {
  ADD_CONTACT_FAILURE,
  ADD_CONTACT_LOADING,
  ADD_CONTACT_SUCCESS,
  DELETE_ALL_CONTACTS_LOADING,
  DELETE_ALL_CONTACTS_SUCCESS,
  DELETE_CONTACT_FAILURE,
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
  EDIT_CONTACT_FAILURE,
  EDIT_CONTACT_LOADING,
  EDIT_CONTACT_SUCCESS,
  GET_CONTACTS_FAILURE,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
} from "./action.types";
import axios from "axios";

export const getContacts = () => async (dispatch) => {
  dispatch({
    type: GET_CONTACTS_LOADING,
    payload: true,
  });
  try {
    let res = await axios.get("http://localhost:7000/contacts");
    dispatch({
      type: GET_CONTACTS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_CONTACTS_FAILURE,
      payload: e,
    });
  } finally {
    dispatch({
      type: GET_CONTACTS_LOADING,
      payload: false,
    });
  }
};

export const postContacts = (formData) => async (dispatch) => {
  dispatch({
    type: ADD_CONTACT_LOADING,
    payload: true,
  });
  try {
    let res = await axios.post("http://localhost:7000/contacts", formData);
    dispatch({
      type: ADD_CONTACT_SUCCESS,
      payload: res.data.msg,
    });
    dispatch(getContacts());
    alert(res.data.msg);
  } catch (e) {
    dispatch({
      type: ADD_CONTACT_FAILURE,
      payload: e,
    });
  } finally {
    dispatch({
      type: ADD_CONTACT_LOADING,
      payload: false,
    });
  }
};

export const deleteContact = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_CONTACT_LOADING,
    payload: true,
  });
  try {
    let res = await axios.delete(`http://localhost:7000/contacts/${id}`);
    dispatch({
      type: DELETE_CONTACT_SUCCESS,
      payload: res.data.msg,
    });
    dispatch(getContacts());
    alert(res.data.msg);
  } catch (e) {
    dispatch({
      type: DELETE_CONTACT_FAILURE,
      payload: e,
    });
  } finally {
    dispatch({
      type: DELETE_CONTACT_LOADING,
      payload: false,
    });
  }
};

export const editContact = (id, formData) => async (dispatch) => {
  dispatch({
    type: EDIT_CONTACT_LOADING,
    payload: true,
  });
  try {
    let res = await axios.patch(
      `http://localhost:7000/contacts/${id}`,
      formData
    );
    dispatch({
      type: EDIT_CONTACT_SUCCESS,
      payload: res.data.msg,
    });
    dispatch(getContacts());
    alert(res.data.msg);
  } catch (e) {
    dispatch({
      type: EDIT_CONTACT_FAILURE,
      payload: e,
    });
  } finally {
    dispatch({
      type: EDIT_CONTACT_LOADING,
      payload: false,
    });
  }
};

export const deleteAllContacts = () => async (dispatch) => {
  dispatch({
    type: DELETE_ALL_CONTACTS_LOADING,
    payload: true,
  });
  try {
    let res = await axios.delete(`http://localhost:7000/contacts/`);
    dispatch({
      type: DELETE_ALL_CONTACTS_SUCCESS,
      payload: res.data.msg,
    });
    dispatch(getContacts());
    alert(res.data.msg);
  } catch (e) {
    dispatch({
      type: DELETE_CONTACT_FAILURE,
      payload: e,
    });
  } finally {
    dispatch({
      type: DELETE_ALL_CONTACTS_LOADING,
      payload: false,
    });
  }
};
