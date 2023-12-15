import {useState, useRef} from 'react';
import postRequest from '@/utils/api-requests/postRequests';

export default function FormContainer({ styles, FormComponent, title }){
  const [errObj, setErrObj] = useState({});
  const formRef = useRef();

  const top = title ? '' : 'top-[20vh]';

  const handleSubmit = (e, path, submissionObj) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    if (submissionObj.validate){
      submissionObj.validate(formData, setErrObj);
    }
    if (Object.keys(errObj).length === 0){
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
    <article className={ [top, "relative w-[400px] text-xl p-4 bg-primary-dark text-white rounded-xl overflow-hidden"].join(' ') }>
      <FormComponent styles={styles} handleSubmit={ handleSubmit }  formRef={formRef} errObj={errObj} />
    </article>
    </>
  );
}