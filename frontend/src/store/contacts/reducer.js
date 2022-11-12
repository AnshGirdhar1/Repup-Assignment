import {
  ADD_CONTACT_FAILURE,
  ADD_CONTACT_LOADING,
  ADD_CONTACT_SUCCESS,
  DELETE_ALL_CONTACTS_ERROR,
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

const initialState = {
  get: {
    data: [],
    loading: false,
    error: false,
  },
  post: {
    success: false,
    loading: false,
    error: false,
  },
  edit: {
    success: false,
    loading: false,
    error: false,
  },
  delete: {
    success: false,
    loading: false,
    error: false,
  },
  deleteAll: {
    success: false,
    loading: false,
    error: false,
  },
};

export const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS_SUCCESS: {
      return {
        ...state,
        get: {
          ...state.get,
          data: payload,
        },
      };
    }
    case GET_CONTACTS_FAILURE: {
      return {
        ...state,
        get: {
          ...state.get,
          error: payload,
        },
      };
    }
    case GET_CONTACTS_LOADING: {
      return {
        ...state,
        get: {
          ...state.get,
          loading: payload,
        },
      };
    }
    case ADD_CONTACT_SUCCESS: {
      return {
        ...state,
        post: {
          ...state.post,
          success: payload,
        },
      };
    }
    case ADD_CONTACT_FAILURE: {
      return {
        ...state,
        post: {
          ...state.post,
          error: payload,
        },
      };
    }
    case ADD_CONTACT_LOADING: {
      return {
        ...state,
        post: {
          ...state.post,
          loading: payload,
        },
      };
    }
    case DELETE_CONTACT_SUCCESS: {
      return {
        ...state,
        delete: {
          ...state.delete,
          success: payload,
        },
      };
    }
    case DELETE_CONTACT_FAILURE: {
      return {
        ...state,
        delete: {
          ...state.delete,
          error: payload,
        },
      };
    }
    case DELETE_CONTACT_LOADING: {
      return {
        ...state,
        delete: {
          ...state.delete,
          loading: payload,
        },
      };
    }
    case EDIT_CONTACT_SUCCESS: {
      return {
        ...state,
        edit: {
          ...state.edit,
          success: payload,
        },
      };
    }
    case EDIT_CONTACT_FAILURE: {
      return {
        ...state,
        edit: {
          ...state.edit,
          error: payload,
        },
      };
    }
    case EDIT_CONTACT_LOADING: {
      return {
        ...state,
        edit: {
          ...state.edit,
          loading: payload,
        },
      };
    }
    case DELETE_ALL_CONTACTS_LOADING: {
      return {
        ...state,
        deleteAll: {
          ...state.deleteAll,
          loading: payload,
        },
      };
    }
    case DELETE_ALL_CONTACTS_SUCCESS: {
      return {
        ...state,
        deleteAll: {
          ...state.deleteAll,
          success: payload,
        },
      };
    }
    case DELETE_ALL_CONTACTS_ERROR: {
      return {
        ...state,
        deleteAll: {
          ...state.deleteAll,
          error: payload,
        },
      };
    }
    default: {
      return state;
    }
  }
};
