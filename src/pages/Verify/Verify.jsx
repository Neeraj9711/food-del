import React, { useContext, useEffect } from 'react';
import './Verify.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {
         const { verifyPayment} = useContext(StoreContext);
   

    useEffect(()=>{
        verifyPayment();
    
    },[])


  return (
    <div className='verify'>
        <div className="spinner">

        </div>
      
    </div>
  )
}

export default Verify
