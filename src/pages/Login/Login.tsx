import React, {  useEffect } from 'react';
import { User } from '../../redux/User/types';

interface Props {
    getUser: (userId: number) => void;
    user: User|null;
}

const Login:React.FunctionComponent<Props> = ({getUser,user}) => {

    useEffect(() => {
        console.log("useEffect");
        getUser(1);
    }, [getUser])

    const [userId, setUserId] = React.useState('');
    const fetchUser = () => {
        getUser(parseInt(userId));
    }
    const isNumber = (value: string) => {
        return /^\d+$/.test(value);
    }

      
      return <>
      <input type="text" value={userId} onChange={e => setUserId(e.currentTarget.value)}/>
      <h2>Hi, I am Login!</h2>
      {user?.login && <h3>{user.login}</h3>}
      {!isNumber(userId) ? <p>Enter a number</p> : <button onClick={fetchUser}>Fetch User</button>}
      </>
      ;
    
  };
  
export default Login;
