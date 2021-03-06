import { connect } from 'react-redux';
import { login } from "../../actions/session";
import Login from './login';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch) => ({
  login: (formUser) => dispatch(login(formUser))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
