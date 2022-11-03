import { useDispatch} from 'react-redux';
import { mapDirection,addOneUser,usersId } from '../../../store/slice/userSlice';

const  UserItem = ({setModalOpen,e}) => {
    const dispatch = useDispatch()

    const openModal = (user) =>{
        setModalOpen(true)
        dispatch(addOneUser(user))
      }
    const  mapDirect = (id,e) => {
        dispatch(mapDirection(id))
        dispatch(usersId(e?.doc?.key?.path?.segments[6]))
      }

  return (
    <div className='userslist__list'  onDoubleClick={()=> openModal(e?.doc?.data?.value?.mapValue?.fields?.userCollection?.arrayValue?.values[0]?.mapValue?.fields)} onClick = {()=> mapDirect(e?.doc?.data?.value?.mapValue?.fields?.userCollection?.arrayValue?.values[0]?.mapValue?.fields?.secondaryAddress?.arrayValue?.values,e)}>
    <ul className="users-list">    
     <li className="userslist__item">{e?.doc?.data?.value?.mapValue?.fields?.userCollection?.arrayValue?.values[0]?.mapValue?.fields?.firstName?.stringValue}</li>
     <li className="userslist__item">{e?.doc?.data?.value?.mapValue?.fields?.userCollection?.arrayValue?.values[0]?.mapValue?.fields?.email?.stringValue}</li>
     <li className="userslist__item">{e?.doc?.data?.value?.mapValue?.fields?.userCollection?.arrayValue?.values[0]?.mapValue?.fields?.username?.stringValue}</li>
     <li className="userslist__item">{e?.doc?.data?.value?.mapValue?.fields?.userCollection?.arrayValue?.values[0]?.mapValue?.fields?.website?.stringValue}</li>
   </ul> 
   </div>
  )
}

export default UserItem