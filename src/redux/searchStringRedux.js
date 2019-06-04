// selectors

export const getSearchString = (state) => state.searchString;
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;
export const countAllCards = ({cards}) => cards.length;

// const reducerName = 'cards';
// const createActionName = name => `app/${reducerName}/${name}`;
//
// // action types
// export const ADD_CARD = createActionName('ADD_CARD');
//
// // action creators
// export const createAction_addCard = payload => ({payload, type: ADD_CARD});

// action name creator
const reducerName = 'search';
const createActionName = name => `app/${reducerName}/${name}`;
// actions types
export const CHANGE = createActionName('CHANGE');
// action creators
export const createAction_CHANGE = payload => ({payload, type: CHANGE});
// reducer



