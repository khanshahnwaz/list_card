import {useFormik} from 'formik'
import {RxCross1} from 'react-icons/rx'
import { useState,useEffect } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const EditItem=(props)=>{


    //  close the form on clicking anywhere 
    const handleForm=()=>{
        document.addEventListener('mouseup', function(e) {
            var container = document.getElementById('container');
            if (container && !container.contains(e.target)) {
                container.style.display = 'none';
                props.setEditItem(false);
            }  
        });
    }
   
   useEffect(()=>handleForm)


     // state to manage the error tooltip for every input box 
     const[visiDescription,setVisiDescription]=useState(false);
     const[visiPhoto,setVisiPhoto]=useState(false);
    
    // Formik library
    const formik=useFormik({
        initialValues:props.data,
        // enableReinitialize:true,
        // enableReinitialize:true,
        validate:values=>{
            const errors={};
           
            if(!values.description){
                errors.description='Required'
            }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.description)) {
                errors.description = 'Invalid description';
            }
            if(!values.photo){
                errors.photo='Required'
            }
           
            return errors;
        },
        onSubmit: async values=>{
            console.log("submitted data in EditItem form ",values)
            const data={
                
                description:values.description,
               
                photo:values.photo
            }
           
            // console.log("sent data",JSON.stringify(data))
            
        }
    })

    useEffect(()=>{
        if(formik.errors.description && formik.touched.description){
            setVisiDescription(true)
        }else setVisiDescription(false)
        if(formik.errors.photo && formik.touched.photo){
            setVisiPhoto(true)
        }else setVisiPhoto(false)
    },[formik])
    if(props.editItem){
        return (
        <div >
       {/* <!-- Overlay element --> */}
    
    <div className="fixed  z-30 w-screen h-screen inset-0 bg-gray-700 bg-opacity-60"></div>
    
    <div id='container'  className="flex fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-40  bg-white rounded-lg shadow-2xl p-10 md:w-max w-[92%] "> 
    <RxCross1 className='float-right fixed -traslate-x-1/2 -translate-y-1/2 -right-1 -top-2 hover:opacity-10 cursor-pointer text-white' onClick={()=>props.setEditItem(false)}  />
    
   

        {/* left division */}
        <div className="h-max bg-gradient-to-br from-[#01061b] to-[#112576]  border-white rounded-lg shadow-lg w-[350px] hidden lg:block ">
            <p className="text-left text-base font-bold text-white pl-10 mt-4">Shahnwaz_Khan</p>
            <p className="text-4xl tracking-wider text-left mt-10 p-10 text-white font-bold">Resume your <br/> journey with us</p>
            <p className="text-sm mt-2 text-left px-10 text-gray-200">Discover world best community of freelancers and business owners.</p>
            <div className=" mt-44  py-5 px-5 pb-4 mx-10 bg-[#112576] text-base font-bold  text-left text-gray-200 h-32 rounded-lg shadow-lg">Simply unbelievable! I am absolutely satisfied with my business. This is absolutely wonderful.</div>
        </div>
        {/* right division */}
        <div className="bg-white h-full w-[100%] lg:w-[50%] ">
            <div className='mt-5 p-5 lg:p-10 mb-0'><p className='text-left text-4xl font-bold tracking-wide text-[#01061b]'>Edit Item</p>
            <p className='mt-2 text-sm tracking-wide text-left font-semibold'>Don't want to edit?<span className="text-[#01061b] cursor-pointer" onClick={()=>props.setEditItem(false)}>Close</span></p>
            
            </div>
            <div className='-mt-8 lg:p-10 p-5 '>
                {/* Form section  */}
               
                <form onSubmit={formik.handleSubmit}>
           <div className="grid gap-5">
            <div>
             <label htmlFor='description' className='float-left text-[#01061b] font-bold' >Description</label><br/>
             <Tippy visible={visiDescription} content={formik.errors.description} placement='top-end'>
             <input type='text' className='border-2 border-[#bd8ce2] rounded-lg float-left mt-1 py-2 w-full' name='description' onBlur={formik.handleBlur}onChange={formik.handleChange} value={formik.values.description} ></input></Tippy>
             </div>
            
             
             <div>
             <label htmlFor='photo' className='float-left text-[#01061b] font-bold' >Photo</label><br/>
             <Tippy visible={visiPhoto} content={formik.errors.photo} placement='top-end'>
             <input type='file' className='border-2 border-[#bd8ce2] rounded-lg float-left mt-1 py-2 w-full' name='photo' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.photo} ></input>
             </Tippy>
             </div>
             </div>
            
             <button type='submit' className='my-2 font-bold float-left cursor-pointer bg-[#01061b] text-white py-2 px-5 rounded '>Submit</button>
             </form>
             
            </div>
        </div>
    </div>
    </div>
    )}
}

export default EditItem;