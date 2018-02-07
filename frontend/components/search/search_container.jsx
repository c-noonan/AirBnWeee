import { connect } from "react-redux";
import SpotSearch from './spot_search';
import { fetchSpots } from '../../actions/spots';

const mapStateToProps = (state, ownProps) => ({
  spots: Object.values(state.entities.spots)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchSpots: () => dispatch(fetchSpots())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotSearch);
