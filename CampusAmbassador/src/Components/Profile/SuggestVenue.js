import { useFormik } from 'formik'
import React,{useEffect,useState, useContext} from 'react'
import * as Yup from "yup";
import previewimg from "./images/Preview.png"
import "./Profile.css";
import axios from 'axios';
import UserContext from '../../Context/UserContext';



const SuggestVenue = (props) => {
  const usercontext = useContext(UserContext);
    const {userToken} = usercontext;
   const {preview,setPreview}=props
  const imageType = [ "image/png", "image/jpg","image/jpeg"]
    const [VenueStyle, setVenueStyle] = useState(`
    .preview-venue{
    background: url(${previewimg}) no-repeat;
    background-position: center;
    background-size: contain;
    height: 100%;
                width:100%; }
    `)
    const [previmage, setPrevimage] = useState()
    var loadFile = function(event) {
            const imgobj=new Image()
            const img = URL.createObjectURL(event.target.files[0]);
            imgobj.src=img
            setVenueStyle(`
            .preview-venue{
                background: url(${img}) no-repeat;
            background-position: center;
            background-size: contain;
                height: 100%;
                width:100%;

            }
            `)
            return img
          };
    const formik = useFormik({
        initialValues:{
            name: "",
            address: "",
            remarks:"",
            phone:"",
            city:"",
            file:"",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required"),
            address: Yup.string().required("Required"),
            remarks: Yup.string().required("Required"),
            city: Yup.string().required("Required"),
            phone: Yup.number()
            .min(1000000000,"Enter A valid Phone Number")
            .max(9999999999,"Enter A valid Phone Number")
            .typeError("That doesn't look like a phone number")
            // .positive("A phone number can't start with a minus")
            .integer("A phone number can't include a decimal point")
            .required("Required"),
            file: Yup.object().shape({
              type: Yup.string().required("Required")
            }).label("Required").nullable().test(
              "file",
              "File should be JPG/JPEG/PNG",
              function () {
                console.log('type', formik.values.file)
                return(imageType.includes(formik.values.file.type))
              }
                
              
            ),
            
            
        }), 
        onSubmit: (values) => {
          const req = {
            "venue_name":values.name,
            "venue_contact":values.phone,
            "venue_address": values.address,
            "venue_city": values.city,
            "venue_type_remarks":values.remarks,
            "token":userToken,
            "file":values.file 
          }
          axios.
          post("https://mainapi.springfest.in/cap/venue/add", req)
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
    useEffect(() => {
      }, [])
  return (
<>
<style>{VenueStyle}</style>

<div className="form-boxpp form-boxpp-venue">

<div className="mx-auto text-center text-5xl mt-8" id='suggest-a-venue'>SUGGEST A VENUE</div>

      <form onSubmit={formik.handleSubmit} style={{overflow:'scroll'}} className="mb-8 container mx-auto w-[70%] bg-slate-700/60 p-5 rounded-lg mt-10">
      <div class="">
      {/* <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-300 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
    Name
  </span> */}
    {/* <label for="name" class="block mb-2 text-sm font-medium text-gray-300">Name</label> */}
    <input type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg rou focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Name" required autoComplete="off" value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            
            {formik.touched.name && formik.errors.name ? (
          <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500"><span class="font-medium">{formik.errors.name}</span></p>
        ) : <br/>}
  </div>
  <div class="">
    {/* <label for="address" class="block mb-2 text-sm font-medium text-gray-300">Address</label> */}
    <input type="text" id="address" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Address" required autoComplete="off" value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            
            {formik.touched.address && formik.errors.address ? (
          <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500"><span class="font-medium">{formik.errors.address}</span></p>
        ) : <br/>}
  </div>
  <div class="">
    {/* <label for="remarks" class="block mb-2 text-sm font-medium text-gray-300">Remarks</label> */}
    <textarea type="text" id="remarks" class="shadow-sm h-[150px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Remarks" required autoComplete="off" value={formik.values.remarks}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            
            {formik.touched.remarks && formik.errors.remarks ? (
          <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500"><span class="font-medium">{formik.errors.remarks}</span></p>
        ) : <br/>}
  </div>
  <div class="">
    {/* <label for="phone" class="block mb-2 text-sm font-medium text-gray-300">Venue Phone Number</label> */}
    <input type="text" id="phone" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="XXXXXXXXXX" required autoComplete="off" value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            
            {formik.touched.phone && formik.errors.phone ? (
          <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500"><span class="font-medium">{formik.errors.phone}</span></p>
        ) : <br/>}
  </div>
  <div class="">
    {/* <label for="city" class="block mb-2 text-sm font-medium text-gray-300">Venue City</label> */}
    <select type="text" id="city" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="xyz@abc.klm" required autoComplete="off" value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}>
                <option value="">Select Your City</option>
                <option value="dummy1">dummy1</option>
                <option value="dummy2">dummy2</option>
                <option value="dummy3">dummy3</option>
                <option value="dummy4">dummy4</option>
                <option value="dummy5">dummy5</option>
            </select>
            {formik.touched.city && formik.errors.city ? (
          <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500"><span class="font-medium">{formik.errors.city}</span></p>
        ) : <br/>}
  </div>
  <div class="">
                
{/* <label class="block mb-2 text-sm font-medium text-gray-300" for="file_input">Upload file</label> */}
<div className='flex'>

<input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-l-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 border-r-0" aria-describedby="file_input_help" id="file_input" type="file" accept="image/jpeg, image/png, image/jpg"

onChange={(event)=>{
  console.log('event', event)
  formik.setFieldTouched("file",true)
  if(event.currentTarget.files[0]){
    formik.setFieldValue("file",event.currentTarget.files[0])
    setPrevimage(loadFile(event))
  }else{
    formik.setFieldValue("file","")

    setVenueStyle(`
    .preview-venue{
      background: url(${previewimg}) no-repeat;
      background-position: center;
      background-size: contain;
      height: 100%;
                width:100%; }
      `)
      URL.revokeObjectURL(previmage)
      
    }
  }}
/><span class="inline-flex items-center px-3 text-sm bg-gray-800 rounded-r-md border border-l-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 cursor-pointer hover:bg-gray-700" onClick={()=>{
  setPreview(true)
}}>
    Preview
  </span> 
  </div>
<p class="mt-1 text-sm text-gray-300 " id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>

{formik.touched.file && formik.errors.file ? (
          <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500"><span class="font-medium">{formik.errors.file.type||formik.errors.file}</span></p>
        ) : <br/>}
  </div>
  <button type="submit" class="text-white ml-auto mr-auto block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

  </form>
  </div>
</>
    )
}

export default SuggestVenue