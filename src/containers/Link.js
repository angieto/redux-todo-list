import { connect } from 'react-redux';
import setVisibilityFilter from '../store/actions/filterAction';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => ({
    isActive: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () =>  dispatch( setVisibilityFilter(ownProps.filter) )
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);