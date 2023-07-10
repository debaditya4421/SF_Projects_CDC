import React, { useEffect, useState, useContext, createContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import data from "./city.json";
import UserContext from "../../Context/UserContext";
import "./Profile.css";
import axios from "axios";
const Profile = (props) => {
  const [statecity, setStatecity] = useState([]);

  function calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    console.log(Math.abs(ageDate.getUTCFullYear() - 1970));
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  const usercontext = useContext(UserContext);
  const { setuser, setUserToken } = usercontext;
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      a_email: "",
      password: "",
      c_password: "",
      college: "",
      phone: "",
      gender: "",
      dob: "",
      yog: "",
      por: "",
      address: "",
      city: "",
      state: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid Email").required("Required"),
      a_email: Yup.string().email("Invalid Email").required("Required"),
      phone: Yup.number()
        .min(1000000000, "Enter A valid Phone Number")
        .max(9999999999, "Enter A valid Phone Number")
        .typeError("That doesn't look like a phone number")
        // .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .required("Required"),
      college: Yup.string().required("Required"),
      dob: Yup.string()
        .required("Required")
        .test(
          "dob",
          "You must be older than 16 years to register.",
          function (dob) {
            return calculateAge(new Date(dob)) > 16;
          }
        ),
      gender: Yup.string().required("Required"),
      por: Yup.string().required("Required"),
      yog: Yup.number()
        .required("Required")
        .typeError("That doesn't look like a Year of Passing")
        .integer("A phone number can't include a decimal point")
        .max(2029, "Invalid Input")
        .min(2023, "Invalid Input"),
      password: Yup.string()
        .min(8, "Password length must be greater than 8 letters")
        .required("Required"),
      c_password: Yup.string()
        .min(8, "Password length must be greater than 8 letters")
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
      address: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      state: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      axios
        .post("https://mainapi.springfest.in/cap/user/checkregister", {
          email: formik.values.email,
          password: "NA",
        })
        .then((res) => {
          console.log('res', res)
          if (res.data.code == -4) {
            console.log("hell");
            const req = {
              isRegistered: 0,
              email: values.email,
              alt_email: values.a_email,
              password: values.password,
              dob: values.dob,
              gender: values.gender,
              name: values.name,
              college: values.college,
              yop: values.yog,
              mobile: values.phone,
              addr: values.address,
              city: values.city,
              state: values.state,
              por: values.por,
              password: values.password,
            };
            console.log("req", req);
            axios
              .post("https://mainapi.springfest.in/cap/user/register", req)
              .then((response2) => {
                console.log(response2);
                if (response2.data.code == 0) {
                  setUserToken(response2.data.message.token);

                  console.log("success");
                  props.showToast(true, "You have Successfully Registered", "Success");
                  axios
                    .post("https://mainapi.springfest.in/cap/user/alldata", {
                      token: response2.data.message.token,
                    })
                    .then((response1) => {
                      setuser(response1.data.message);
                      localStorage.setItem("user",JSON.stringify({
                        "token": response2.data.message.token,
                        "data": response1.data.message
                      }))
              navigate("/profile")

                    });
                  // localStorage.setItem('logstat',true)
                  props.setOpenModal(false);
                } else {
                  props.showToast(true, response2.data.message, "Unsuccessful");
                }
              })
              .catch(function (error) {
                console.log(error);
              });
          }
          else{
            props.showToast(true, "You are already registered", "failure");
          }
        });
    },
  });

  useEffect(() => {
    data.states.forEach((element) => {
      if (formik.values.state == element.state) {
        setStatecity(element.districts);
      }
    });
  }, [formik.values.state]);

  return (
    <div className="form-boxp">
      <h2>SignUp </h2>
      <br />
      <form onSubmit={formik.handleSubmit} className="profile">
        <div className="inputfield">
          <label for="email" class="">
            Email
          </label>
          <input
            type="email"
            id="email"
            class=""
            placeholder="xyz@abc.klm"
            required
            autoComplete="off"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <p class="">
            <span class="font-medium">{formik.errors.email}</span>
          </p>
        ) : (
          <br />
        )}
        <div className="inputfield">
          <label for="a_email" class="">
            Alt-Email
          </label>
          <input
            type="email"
            id="a_email"
            class=""
            placeholder="xyz@abc.klm"
            required
            autoComplete="off"
            value={formik.values.a_email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.a_email && formik.errors.a_email ? (
          <p class="">
            <span class="font-medium">{formik.errors.a_email}</span>
          </p>
        ) : (
          <br />
        )}
        <div className="inputfield">
          <label for="name" class="">
            Name
          </label>
          <input
            type="text"
            id="name"
            class=""
            required
            autoComplete="off"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.name && formik.errors.name ? (
          <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500">
            <span class="font-medium">{formik.errors.name}</span>
          </p>
        ) : (
          <br />
        )}

        <div className="inputfield">
          <label for="password" class="">
            Password
          </label>
          <input
            type="password"
            id="password"
            class=""
            required
            autoComplete="off"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.password && formik.errors.password ? (
          <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500">
            <span class="font-medium">{formik.errors.password}</span>
          </p>
        ) : (
          <br />
        )}
        <div className="inputfield">
          <label for="c_password" class="">
            Confirm Password
          </label>
          <input
            type="password"
            id="c_password"
            class=""
            required
            autoComplete="off"
            value={formik.values.c_password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.c_password && formik.errors.c_password ? (
          <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500">
            <span class="font-medium">{formik.errors.c_password}</span>
          </p>
        ) : (
          <br />
        )}
        <div className="inputfield">
          <label for="college" class="">
            College
          </label>
          <input
            type="text"
            id="college"
            class=""
            required
            autoComplete="off"
            value={formik.values.college}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.college && formik.errors.college ? (
          <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500">
            <span class="font-medium">{formik.errors.college}</span>
          </p>
        ) : (
          <br />
        )}
        <div className="inputfield">
          <label for="phone" class="">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            class=""
            required
            autoComplete="off"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.phone && formik.errors.phone ? (
          <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500">
            <span class="font-medium">{formik.errors.phone}</span>
          </p>
        ) : (
          <br />
        )}
        <div className="inputfield">
          <label for="gender" class="">
            Gender
          </label>
          <select
            type="text"
            id="gender"
            class=""
            required
            autoComplete="off"
            value={formik.values.gender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="" label="Select your Gender">
              Select your Gender
            </option>
            <option value="M" label="Male">
              Male
            </option>
            <option value="F" label="Female">
              Female
            </option>
            <option value="Other" label="Other">
              Other
            </option>
          </select>
        </div>
        {formik.touched.gender && formik.errors.gender ? (
          <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500">
            <span class="font-medium">{formik.errors.gender}</span>
          </p>
        ) : (
          <br />
        )}
        <div
          className="inputfield calender"
          onClick={() => {
            document.getElementById("datepicker-signup").showPicker();
          }}
        >
          <label htmlFor="dob">Date of Birth </label>
          <input
            type="date"
            name="dob"
            required
            autoComplete="off"
            value={formik.values.dob}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="dateinput"
            id="datepicker-signup"
          />
        </div>
        {formik.touched.dob && formik.errors.dob ? (
          <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500">
            <span class="font-medium">{formik.errors.dob}</span>
          </p>
        ) : (
          <br />
        )}
        <div className="inputfield">
          <label for="yog" class="">
            Year Of Graduation
          </label>
          <select
            type="text"
            id="yog"
            class=""
            autoComplete="off"
            value={formik.values.yog}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="" label="Select Year Of Passing ">
              Select Year Of Passing
            </option>
            <option value="2023" label="2023">
              2023
            </option>
            <option value="2024" label="2024">
              2024
            </option>
            <option value="2025" label="2025">
              2025
            </option>
            <option value="2026" label="2026">
              2026
            </option>
            <option value="2027" label="2027">
              2027
            </option>
            <option value="2028" label="2028">
              2028
            </option>
            <option value="2029" label="2029">
              2029
            </option>
          </select>
        </div>
        {formik.touched.yog && formik.errors.yog ? (
          <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500">
            <span class="font-medium">{formik.errors.yog}</span>
          </p>
        ) : (
          <br />
        )}
        <div className="inputfield">
          <label for="por" class="">
            Position Of Responsibility
          </label>
          <input
            type="text"
            id="por"
            class=""
            autoComplete="off"
            value={formik.values.por}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.por && formik.errors.por ? (
          <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500">
            <span class="font-medium">{formik.errors.por}</span>
          </p>
        ) : (
          <br />
        )}
        <div className="inputfield">
          <label for="address" class="">
            Address
          </label>
          <input
            type="text"
            id="address"
            class=""
            autoComplete="off"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.address && formik.errors.address ? (
          <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500">
            <span class="font-medium">{formik.errors.address}</span>
          </p>
        ) : (
          <br />
        )}
        <div className="inputfield">
          <label for="state" class="">
            State
          </label>
          <select
            type="text"
            id="city"
            class=""
            required
            autoComplete="off"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="" label="Select your City">
              Select your City
            </option>
            {statecity.map((ele) => {
              return (
                <option value={ele} label={ele}>
                  {ele}
                </option>
              );
            })}{" "}
          </select>
        </div>
        {formik.touched.city && formik.errors.city ? (
          <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500">
            <span class="font-medium">{formik.errors.city}</span>
          </p>
        ) : (
          <br />
          )}
          <div className="inputfield">
            <label for="city" class="">
              City
            </label>
            <select
              type="text"
              id="city"
              class=""
              required
              autoComplete="off"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" label="Select your City">
                Select your City
              </option>
              {statecity.map((ele) => {
                return (
                  <option value={ele} label={ele}>
                    {ele}
                  </option>
                );
              })}{" "}
            </select>
          </div>
          {formik.touched.city && formik.errors.city ? (
            <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500">
              <span class="font-medium">{formik.errors.city}</span>
            </p>
          ) : (
            <br />
          )}

        <button type="submit" class="sgnbutton">
          Sign Up
        </button>
      </form>
      <div className="my-8"></div>
    </div>
  );
};

export default Profile;
