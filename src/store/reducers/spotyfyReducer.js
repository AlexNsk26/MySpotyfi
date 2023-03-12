/* eslint-disable no-restricted-syntax */
import * as MyType from '../actions/types/types';

const initialState = {
  loading: false,
  error: null,
  loginData: {},
  accessToken: null,
  idRefTokenInt: null,
  refreshToken: null,
  errorMessage: {},
  playingTrack: '',
  userLogIn: false,
  filters: {},
};

// eslint-disable-next-line default-param-last
export default function SpotyfyReducer(state = initialState, action) {
  switch (action.type) {
    case MyType.USER_LOGIN_STARTED: {
      return {
        ...state,
        loading: true,
      };
    }

    case MyType.USER_LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        loginData: action.payload,
      };
    }

    case MyType.USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        errorMessage: action.payload.errorMessage,
      };

    case MyType.USER_SIGNUP_STARTED: {
      return {
        ...state,
        loading: true,
      };
    }

    case MyType.USER_SIGNUP_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        loginData: action.payload,
      };
    }

    case MyType.USER_SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        errorMessage: action.payload.errorMessage,
      };
    case MyType.USER_ACCESS_TOKEN_STARTED: {
      return {
        ...state,
        loading: true,
      };
    }

    case MyType.USER_ACCESS_TOKEN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        accessToken: action.payload.access,
        refreshToken: action.payload.refresh,
      };
    }

    case MyType.USER_ACCESS_TOKEN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        errorMessage: action.payload.errorMessage,
      };
    case MyType.USER_REFRESH_TOKEN_STARTED: {
      return {
        ...state,
        loading: true,
      };
    }

    case MyType.USER_REFRESH_TOKEN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        accessToken: action.payload.access,
      };
    }

    case MyType.USER_REFRESH_TOKEN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        errorMessage: action.payload.errorMessage,
      };

    case MyType.USER_REFRESH_TOKEN_INT: {
      return {
        ...state,
        idRefTokenInt: action.payload,
      };
    }

    case MyType.ADD_TRACK_PLAYING:
      return {
        ...state,
        playingTrack: action.payload,
      };

    case MyType.USER_LOGIN:
      return {
        ...state,
        userLogIn: action.payload,
        /*         loginData: action.payload.loginData,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken, */
      };

    case MyType.USER_PRELOGIN:
      return {
        ...state,
        userLogIn: true,
        loginData: action.payload.loginData,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        idRefTokenInt: action.payload.idRefTokenInt,
      };

    case MyType.USER_LOGOUT:
      return { ...initialState, idRefTokenInt: state.idRefTokenInt };

    case MyType.ADD_TRACK_FILTER: {
      const { filters } = state;
      const { typeFilter } = action.payload;
      const { itemIndex } = action.payload;

      if (filters[typeFilter]) {
        const findIndex = filters[typeFilter]?.indexOf(itemIndex);
        if (findIndex === -1) {
          const newArrItems = [...filters[typeFilter], itemIndex];
          return {
            ...state,
            filters: { ...state.filters, [typeFilter]: newArrItems },
          };
        }
        const newSplitArr = [...filters[typeFilter]];
        newSplitArr.splice(findIndex, 1);
        if (newSplitArr.length) {
          return {
            ...state,
            filters: { ...state.filters, [typeFilter]: newSplitArr },
          };
        }
        const newFilters = {};
        for (const [key, value] of Object.entries(state.filters)) {
          if (key !== typeFilter) {
            newFilters[key] = value;
          }
        }
        return {
          ...state,
          filters: { ...newFilters },
        };
      }
      return {
        ...state,
        filters: { ...state.filters, [typeFilter]: [itemIndex] },
      };
    }
    case MyType.ADD_TRACK_FILTER_YEAR: {
      const { typeFilter } = action.payload;
      const { value } = action.payload;

      return {
        ...state,
        filters: { ...state.filters, [typeFilter]: value },
      };
    }
    default:
      return state;
  }
}
