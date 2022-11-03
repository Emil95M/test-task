import MapComponent from './components/map';
import UserList from './components/userList';
import UsersTitle from './components/usersTitle';
import { useDispatch,useSelector} from 'react-redux';
import { addAnotherUser } from './store/slice/userSlice';
import { selectorUser } from './store/selector/selector';

import './style/style.scss'
import UserInfoModal from './components/modals/components/userInfoModal';
import { useState } from 'react';


function App() {

  const {users,userOption} = useSelector(selectorUser)
  const dispatch = useDispatch()
  const [modalOpen,setModalOpen] = useState(false)
  
  const getUsers = () =>{
    dispatch(addAnotherUser(users.slice(0,userOption.length + 10)))
  }
  

  return (
    <>
     <div className='wrapper'>
          <UserInfoModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
          <MapComponent/>
          <div className='wrapper__container'>
           <UsersTitle/>
           <UserList setModalOpen={setModalOpen}/>
           <div className='footer'>
             <div className='footer__button'>
               <button onClick={() => getUsers()}>More User</button>
             </div>
           </div> 
          </div>
     </div>
    </>
  );
}

export default App;
