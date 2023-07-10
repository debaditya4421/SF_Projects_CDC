import { useFormik } from 'formik'
import React, { useContext } from 'react'
import * as Yup from "yup";
import axios from 'axios';
import UserContext from '../../Context/UserContext';

const ShareIDea = (props) => {
    const usercontext = useContext(UserContext);
    const {userToken} = usercontext;
    const formik = useFormik({
        initialValues:{
            title: "",
            category: "",
            message:""
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Required"),
            category: Yup.string().required("Required"),
            message: Yup.string().required("Required")
        }), 
        onSubmit: (values) => {
          const req = {
            "token":userToken,
            "title":values.title,
            "idea":values.message,
            "category":values.category 
          }
          axios.
          post("https://mainapi.springfest.in/cap/ideas/add", req)
          .then((response)=>{
            console.log(response);
            if(response.data.code==0){
              props.showToast(true,response.data.message,"Success")
            }else{        
              props.showToast(true,response.data.message,"Unsuccess")
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        },
    })
  return (
<>
<div className="form-boxpp form-boxpp-idea">
<div className="mx-auto text-center text-5xl mt-8" id='suggest-an-idea'>SUGGEST AN IDEA</div>

      <form onSubmit={formik.handleSubmit} className="mb-8 container mx-auto w-[70%] bg-slate-700/60 p-5 rounded-lg mt-10">
  <div class="">
    {/* <label for="title" class="block mb-2 text-sm font-medium text-gray-300">Title</label> */}
    <input type="text" id="title" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Title" required autoComplete="off" value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            
            {formik.touched.title && formik.errors.title ? (
          <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500"><span class="font-medium">{formik.errors.title}</span></p>
        ) : <br/>}
  </div>
  <div class="">
    {/* <label for="category" class="block mb-2 text-sm font-medium text-gray-300">Category</label> */}
    <input type="text" id="category" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Category" required autoComplete="off" value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            
            {formik.touched.category && formik.errors.category ? (
          <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500"><span class="font-medium">{formik.errors.category}</span></p>
        ) : <br/>}
  </div>
  <div class="">
    {/* <label for="message" class="block mb-2 text-sm font-medium text-gray-300">Message</label> */}
    <textarea type="text" id="message" class="shadow-sm h-[150px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Message" required autoComplete="off" value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            
            {formik.touched.message && formik.errors.message ? (
          <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500"><span class="font-medium">{formik.errors.message}</span></p>
        ) : <br/>}
  </div>
  <button type="submit" class="text-white ml-auto mr-auto block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

  </form>
  </div>
</>
    )
}

export default ShareIDea