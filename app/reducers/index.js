import axios from 'axios';

const initialState = {
  allCandies: [],
};

const GET_ALL_CANDIES = 'GET_ALL_CANDIES';

export const getCandies = candies => {
  return { type: GET_ALL_CANDIES, candies };
};

export const fetchCandies = () => async dispatch => {
  console.log('in index');
  const { data } = await axios.get('/api/candies');
  dispatch(getCandies(data));
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CANDIES:
      return { ...state, allCandies: action.candies };

    default:
      return state;
  }
};

export default rootReducer;
