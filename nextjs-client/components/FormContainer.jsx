import {useState, useRef} from 'react';
import { motion } from 'framer-motion';
import postRequest from '@/utils/api-requests/postRequests';
import useVisualMode from '@/utils/helpers/useVisualMode';

import HelixLoader from './HelixLoader';

export default function FormContainer({ styles, FormComponent, title }){
  const [errObj, setErrObj] = useState({});
  const { mode, transition } = useVisualMode('FORM')
  const formRef = useRef();

  //pre defined classes
  const container = `relative w-11/12 xs:w-10/12 sm:w-[400px] p-4 text-xl rounded-xl ${title ? '' : 'top-[20vh]'}`;
  const flex = 'flex flex-col justify-center items-center';
  const colour = 'bg-primary-dark text-white';

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
      postRequest(reqObj, submissionObj.stateFunc)
    }
  }

  return (
    <>
    {title && <h1 className={"relative text-6xl my-8 text-secondary-action font-cursive"}>{ title }</h1>}
      <motion.article 
        className={ [container, flex, colour].join(' ') }
        animate={{ minHeight: mode === 'FORM' ? '300px' : '120px' }}
        transition={{ height: { duration: .2 } }}
      >
        { mode === 'FORM' && <FormComponent 
          styles={styles} 
          handleSubmit={ handleSubmit }  
          formRef={formRef} 
          errObj={errObj} 
          transition={ transition } />}

        { mode === 'LOADER' && <HelixLoader /> }
      </motion.article>
    </>
  );
}