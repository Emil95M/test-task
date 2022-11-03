
import { useEffect} from 'react';
import { selectorUser } from '../../store/selector/selector';
import  "./userlist.scss"
import { useDispatch, useSelector } from 'react-redux';
import { getUsersThunk } from '../../store/slice/thunk';
import UserItem from './components';






const UserList = ({setModalOpen}) => {
  


  const {userOption} = useSelector(selectorUser) 
  const dispatch = useDispatch()
  console.log(userOption,"userOption")
  useEffect(()=>{
      dispatch(getUsersThunk())
  },[])// eslint-disable-line react-hooks/exhaustive-deps

  

 

  return (
     <div className='userslist'>
       {
       userOption?.length > 0 && userOption.map((e,i)=>(
            <UserItem key={i} setModalOpen={setModalOpen} e={e} />
         ))
       }
        </div>
  )
}

export default UserList