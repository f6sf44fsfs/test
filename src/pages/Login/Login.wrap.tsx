
import { fetchUserRequest } from '../../redux/User';
import Login from './Login';

import { connect } from 'react-redux';

import { Dispatch } from 'redux';
import { RootState } from '../../redux/types';



const mapStateToProps = (state: any) => ({
    user: state.user,
  });
  
  const mapDispatchToProps = (dispatch: Dispatch) => ({
    getUser: (userId: number) => dispatch(fetchUserRequest(userId)),
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Login);
  