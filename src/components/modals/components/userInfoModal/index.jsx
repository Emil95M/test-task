import Modals from '../..'
import { useDispatch, useSelector } from 'react-redux';
import { selectorUser } from '../../../../store/selector/selector';
import { useForm } from "react-hook-form";
import './userinfomodals.scss'
import { updateUsersThunk } from '../../../../store/slice/thunk';
import { functionGenerator } from '../../../../helpers/functionGenerator';
import CircularProgress from '@mui/material/CircularProgress';

const  UserInfoModal = ({modalOpen,setModalOpen}) => {
    const {oneUser,userId,loading} = useSelector(selectorUser)
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
      } = useForm({ mode: "onSubmit",});

      const onsubmit  = (data) =>{
          const adress = [data.secondaryAddress,...functionGenerator()[0].secondaryAddress]
          const changeData = {...data,secondaryAddress:adress }
            if(data){
                dispatch(updateUsersThunk({uid:userId,userCollections:{userCollection:[changeData]}})).then(res =>{
                  if(res.meta.requestStatus === "fulfilled"){
                    setModalOpen(false)
                  }
                })
            }
            
       }
    
  return (
      <Modals modalOpen={modalOpen}>
            <div className='userInfo'>
               <div className='user__title'>
                 <h2>User DETALS</h2>
                 <span onClick={() => setModalOpen(false)}>X</span>
               </div>
               <div className='user__content'>
                   <form className="form" id="form1" onSubmit={handleSubmit((data) => {
                      onsubmit(data);
                     })}>
                       <div className="form__input-name">
                           <span>name</span>
                           <input type="text" {...register("firstName") } placeholder={oneUser?.firstName?.stringValue}/>
                       </div>
                       <div className="form__input-username">
                           <span>userNmae</span>
                           <input type="text" {...register("username") } placeholder={oneUser?.username?.stringValue}/>
                       </div>
                       <div className="form__input-email">
                           <span>email</span>
                           <input type="text" {...register("email") }  placeholder={oneUser?.email?.stringValue}/>
                       </div>
                       <div className="form__input-website">
                           <span>website</span>
                           <input type="text" {...register("website") } placeholder={oneUser?.website?.stringValue}/>
                       </div>
                       <div className="form__input-number">
                           <span>phone number</span>
                           <input type="text" {...register("number") } placeholder={oneUser?.number?.stringValue}/>
                       </div>
                       <div className="form__input-adress">
                           <span>address</span>
                           <input type="text" {...register("secondaryAddress") } placeholder={oneUser?.secondaryAddress?.arrayValue?.values[0]?.stringValue}/>
                       </div>
                       <div className="form__input-companyname">
                           <span>company name</span>
                           <input type="text" {...register("Company") } placeholder={oneUser?.Company?.stringValue}/>
                       </div>
                       <div className="form__input-companyphrase">
                           <span>company catchphrase</span>
                           <input type="text" {...register("componyPhrase") } placeholder={oneUser?.componyPhrase?.stringValue}/>
                       </div>
                   </form>
                   <div className="user__content-button">
                       <button type='submit' form="form1">{loading ? <CircularProgress color="success" /> : "Save"}</button>
                   </div>
               </div>
             </div>
      </Modals>
  
  )
}

export default UserInfoModal