import {connect} from 'react-redux';
import SearchResults from './SearchResults.js';
import {
  getSearchResults,
} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getSearchResults(state, props.match.params.searchId),
});

export default connect(mapStateToProps)(SearchResults);