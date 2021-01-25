import {connect} from 'react-redux';
import Column from './Column';

export const getCardsforColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);

const mapStateToProps = (state, props) => ({
  cards: getCardsforColumn(state, props.id),
});

export default connect(mapStateToProps)(Column);