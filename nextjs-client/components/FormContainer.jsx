import {useState, useRef, useEffect} from 'react';
import { motion } from 'framer-motion';
import apiRequest from '@/utils/api-requests/apiRequests';
import useVisualMode from '@/utils/helpers/useVisualMode';
import { theme } from '@/tailwind.config';

import HelixLoader from './HelixLoader';
import Confirmation from './Confirmation';

export default function FormContainer({ styles, FormComponent, title }){
  const [errObj, setErrObj] = useState({});
  const confirmationObj = useRef({ link: {path: '/', text: 'Home Page'}, message: 'Form submitted successfully. Thank You!' });
  const rejectionError = useRef({})
  const { mode, transition } = useVisualMode('FORM')
  const formRef = useRef();

  //pre defined classes
  const container = 'relative w-[280px] xs:w-[350px] sm:w-[400px] m-4 p-4';
  const flex = 'flex flex-col justify-center items-center';

  const handleSubmit = (e, path, submissionObj) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    if (submissionObj.validate){
      submissionObj.validate(formData, setErrObj);
    }
    if (Object.keys(errObj).length === 0){
      transition('LOADER')
      const reqObj ={
        path: path,
        method: e.target.method,
        body: formData, 
      }
      apiRequest(reqObj, submissionObj.responseFunction, submissionObj.catchFunction)
    }
  }

  const getAnimations = () => {
    const animationObj = {}
    if (mode === 'CONFIRM'){
      animationObj.minHeight = '300px'
      const colour = confirmationObj.current.error ? 'error' : 'success';
      animationObj.borderColor = theme.extend.colors[colour]
    } else if (mode === 'STATUS'){
      animationObj.minHeight = '120px'
      animationObj.borderColor = theme.extend.colors['secondary-trim']
    } else {
      animationObj.minHeight = '300px'
      animationObj.borderColor = ['secondary-action']
    }
    return animationObj
  }

  return (
    <>
    {title && <h1 className={"relative text-6xl my-8 text-secondary-action font-cursive"}>{ title }</h1>}
      <article 
        className={ ['bg-primary-dark text-white text-xl rounded-xl', `${title ? '' : 'top-[20vh]'}`].join(' ') }
        >
        <motion.div className={ [container, flex, 'border-2 border-secondary-action rounded-xl'].join(' ') }
          animate={ getAnimations() }
          transition={{ duration: .2 }}
        >
          { mode === 'FORM' && <FormComponent 
            styles={styles} 
            handleSubmit={ handleSubmit }  
            formRef={ formRef } 
            errObj={ errObj } 
            transition={ transition } 
            confirmationObj={ confirmationObj }
            rejectionError={ rejectionError }
            />}

          { mode === 'LOADER' && <HelixLoader /> }
          { mode === 'CONFIRM' && <Confirmation confirmationObj={ confirmationObj.current }/> }
        </motion.div>
      </article>
    </>
  );
}