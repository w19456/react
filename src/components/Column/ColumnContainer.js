import {connect} from 'react-redux';
import Column from './Column';
import {getCardsForColumn, createAction_addCard} from '../../redux/cardsRedux.js';


const mapStateToProps = (state, props) => ({
    cards: getCardsForColumn(state, props.id),
});
const mapDispatchToProps = (dispatch, props) => ({
    addCard: title => dispatch(createAction_addCard({
        columnId: props.id,
        title,
    })),
});
// export const getCardsForColumn = ({cards}, columnId) => cards.filter(cards => cards.columnId == columnId);

export default connect(mapStateToProps, mapDispatchToProps)(Column);