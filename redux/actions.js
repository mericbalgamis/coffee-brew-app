export const GET_DATA = 'GET_DATA';
export const SET_STYLE = 'SET_STYLE';
export const SET_SIZE = 'SET_SIZE';
export const SET_MILK = 'SET_MILK';
export const SET_SUGAR = 'SET_SUGAR';

const API_URL =
  'https://darkroastedbeans.coffeeit.nl/coffee-machine/60ba1ab72e35f2d9c786c610';

export const getData = () => {
  try {
    return async dispatch => {
      const result = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_DATA,
          payload: json,
        });
      } else {
        console.log('Unable to fetch data from API');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const setStyle = style => dispatch => {
  dispatch({
    type: SET_STYLE,
    payload: style,
  });
};

export const setSize = size => dispatch => {
  dispatch({
    type: SET_SIZE,
    payload: size,
  });
};

export const setMilk = milk => dispatch => {
  dispatch({
    type: SET_MILK,
    payload: milk,
  });
};

export const setSugar = sugar => dispatch => {
  dispatch({
    type: SET_SUGAR,
    payload: sugar,
  });
};
