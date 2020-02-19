import { connect } from 'react-redux'
import UPortLogin from '../../views/examples/UPortLogin'
import { loginUser } from './LoginButtonActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginUserClick: (event) => {
      event.preventDefault();

      dispatch(loginUser())
    }
  }
}

const LoginButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UPortLogin)

export default LoginButtonContainer
