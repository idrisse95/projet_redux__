import React, { useRef } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { submit } from '../../slices/Slices'

export const Connection = () => {
    const emailRef = useRef(null);
        const passwordRef = useRef(null);

        const dispatch = useDispatch();

        const handleClick = () => {
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
            dispatch(submit({email, password}));
        }

        const loginDenied = useSelector(state => state.connection.denied);
        const loginAcces = useSelector(state => state.connection.acces);
  return (
    <div>
        {loginAcces?
            <h3 className='text-center mt-[20%]'>Connection avec succes!</h3>
            :
            <div className='flex flex-col w-[50%] mt-12 mx-auto'>
                <p>Adresse e-mail</p>
                <input 
                    ref={emailRef}
                    type="email" 
                />
        
                <p>Mot de passe</p>
                <input 
                    type="password" 
                    ref={passwordRef}
                />
        
                <button className='mt-12 bg-pink-500 text-white py-1 px-2 relative rounded-lg w-[50%] mx-auto' onClick={handleClick}>Identiffiez-vous</button>
            </div>
            
        }

        {loginDenied ? <h3 className='text-center mt-10'>!!! Erreur de connection !!!</h3> : null}
    </div>
  )
}
