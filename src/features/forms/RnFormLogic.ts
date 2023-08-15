import {useReducer, useRef, useState} from 'react';

interface FormObject {
  textValue: string;
  booleanValue: boolean;
  listValue: string[];
  updatedAt: string;
}
const initialState: FormObject = {
  textValue: '',
  booleanValue: false,
  listValue: [],
  updatedAt: new Date().toISOString(),
};

interface ActionObject {
  type: string;
  payload: any;
}

function reducer(state: FormObject, action: ActionObject): FormObject {
  switch (action.type) {
    case 'one':
      return {
        ...state,
        textValue: action.payload,
        updatedAt: new Date().toISOString(),
      };
    case 'two':
      return {
        ...state,
        booleanValue: action.payload,
        updatedAt: new Date().toISOString(),
      };
    case 'three':
      return {
        ...state,
        listValue: [...state.listValue, action.payload],
        updatedAt: new Date().toISOString(),
      };
    default:
      return state;
  }
}

export default function useRnForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const textValue = useRef('');
  const [loading, setLoading] = useState(false);

  function doLoading() {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }

  return {
    state,
    dispatch,
    textValue,
    loading,
    doLoading,
  };
}
