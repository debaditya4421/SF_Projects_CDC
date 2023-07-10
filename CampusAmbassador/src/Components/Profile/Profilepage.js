import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import data from "./city.json";
import "./Profilepage.css";
import UserContext from "../../Context/UserContext";
import editimg from "../Profile/images/edit.png";
import cancelimg from './images/cancel.png';

const ProfilePage = (props) => {
  const usercontext = useContext(UserContext);

  const [edit, setEdit] = useState(true);
  const [statecitypp, setStatecitypp] = useState([]);
  const { setuser, setUserToken, user } = usercontext;

  function calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    console.log(Math.abs(ageDate.getUTCFullYear() - 1970));
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  const formik = useFormik({
    initialValues: {
      sfid: "",
      email: "",
      namepp: "",
      a_email: "",
      password: "",
      c_password: "",
      college: "",
      phonepp: "",
      gender: "",
      dob: "",
      yog: "",
      por: "",
      addresspp: "",
      citypp: "",
      statepp: "",
    },
    validationSchema: Yup.object({
      namepp: Yup.string().required("Required"),
      email: Yup.string().email("Invalid Email").required("Required"),
      a_email: Yup.string().email("Invalid Email").required("Required"),
      phonepp: Yup.number()
        .min(1000000000, "Enter A valid Phone Number")
        .max(9999999999, "Enter A valid Phone Number")
        .typeError("That doesn't look like a phone number")
        // .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .required("Required"),
      college: Yup.string().required("Required"),
      dob: Yup.string()
        .test(
          "dob",
          "You must be older than 16 years to register.",
          function (dob) {
            return calculateAge(new Date(dob)) > 16;
          }
        )
        .required("Required"),
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
      addresspp: Yup.string().required("Required"),
      citypp: Yup.string().required("Required"),
      statepp: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      axios
        .post("https://mainapi.springfest.in/cap/user/checkregister", {
          email: formik.values.email,
          password: "NA",
        })
        .then((res) => {
          console.log("res", res);
          if (res.data.code == -4) {
            console.log("hell");
            const req = {
              isRegistered: 1,
              email: values.email,
              alt_email: values.a_email,
              password: values.password,
              dob: values.dob,
              gender: values.gender,
              name: values.namepp,
              college: values.college,
              yop: values.yog,
              mobile: values.phonepp,
              addr: values.addresspp,
              citypp: values.city,
              statepp: values.state,
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
                  props.showToast(true, "Successfully Logged In", "Success");
                  axios
                    .post("https://mainapi.springfest.in/cap/user/alldata", {
                      token: response2.data.message.token,
                    })
                    .then((response1) => {
                      setuser(response1.data.message);
                      localStorage.setItem(
                        "user",
                        JSON.stringify({
                          token: response2.data.message.token,
                          data: response1.data.message,
                        })
                      );
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
          } else {
            props.showToast(true, "You are already registered", "failure");
          }
        });
    },
  });

  useEffect(() => {
    data.states.forEach((element) => {
      if (formik.values.statepp == element.state) {
        setStatecitypp(element.districts);
      }
    });
  }, [formik.values.statepp]);
  useEffect(() => {
    if (user) {
      console.log("doing");
      formik.values.sfid = user.profile.sf_id;
      formik.values.email = user.profile.email;
      formik.values.namepp = user.profile.name;
      formik.values.a_email = user.profile.alt_email;
      formik.values.password = user.profile.password;
      formik.values.c_password = user.profile.c_password;
      formik.values.college = user.profile.college;
      formik.values.phonepp = user.profile.mobile;
      formik.values.gender = user.profile.gender;
      formik.values.dob = user.profile.dob;
      formik.values.yog = user.profile.yop;
      formik.values.por = user.profile.por;
      formik.values.addresspp = user.profile.addr;
      formik.values.citypp = user.profile.city;
      formik.values.statepp = user.profile.State;
      document.getElementById("yog").value = user.profile.yop;
      console.log("user.profile.yop", user.profile.yop);
      setEdit(false);
      console.log("done");
    }
  }, [user]);
  useEffect(() => {
    if (user) {
      formik.values.sfid = user.profile.sf_id;
      formik.values.email = user.profile.email;
      formik.values.namepp = user.profile.name;
      formik.values.a_email = user.profile.alt_email;
      formik.values.password = user.profile.password;
      formik.values.c_password = user.profile.c_password;
      formik.values.college = user.profile.college;
      formik.values.phonepp = user.profile.mobile;
      formik.values.gender = user.profile.gender;
      formik.values.dob = user.profile.dob;
      formik.values.yog = user.profile.yop;
      formik.values.por = user.profile.por;
      formik.values.addresspp = user.profile.addr;
      formik.values.citypp = user.profile.city;
      formik.values.statepp = user.profile.State;
      document.getElementById("yog").value = user.profile.yop;
      console.log("user.profile.yop", user.profile.yop);
    }
  }, [edit]);

  return (
    <div className="form-boxpp form-boxpp-info p-1">
      <div className="mx-auto text-center text-5xl mt-8" id="account-info">
        ACCOUNT INFORMATION
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="mb-4 container mx-auto w-[82%]  p-5 rounded-lg mt-10 "
      >
        <div className="">
          {/* <label
              for="sfid"
              class="block mb-2 text-sm font-medium text-gray-300"
            >
              sfid
            </label> */}
          <input
            type="text"
            key={"sfid"}
            id="sfid"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30%] m-auto text-center p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light form-fields-account"
            disabled
            required
            placeholder="SFXXXXXX"
            autoComplete="new-password"
            value={formik.values.sfid}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.sfid && formik.errors.sfid ? (
            <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500">
              <span class="font-medium">{formik.errors.sfid}</span>
            </p>
          ) : (
            <br />
          )}
        </div>
        <div className="account-info-form">
          <div class="account-info-form-added-css">
            <input type="hidden" value="something" />
            <div className="">
              {/* <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-300"
            >
              Email
            </label> */}
              <input
                type="email"
                key={"email"}
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light form-fields-account"
                disabled={!edit}
                placeholder="xyz@abc.klm"
                required
                autoComplete="new-password"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.email && formik.errors.email ? (
                <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500">
                  <span class="font-medium">{formik.errors.email}</span>
                </p>
              ) : (
                <br />
              )}
            </div>
            <div className="">
              {/* <label
              for="namepp"
              class="block mb-2 text-sm font-medium text-gray-300"
            >
              Name
            </label> */}
              <input
                type="text"
                id="namepp"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light form-fields-account"
                disabled={!edit}
                required
                placeholder="Name"
                autoComplete="off"
                value={formik.values.namepp}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.namepp && formik.errors.namepp ? (
                <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500">
                  <span class="font-medium">{formik.errors.namepp}</span>
                </p>
              ) : (
                <br />
              )}
            </div>
            <div className="">
              {/* <label
              for="a_email"
              class="block mb-2 text-sm font-medium text-gray-300"
            >
              Alternate Email
            </label> */}
              <input
                type="email"
                key={"a_email"}
                id="a_email"
                class="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light form-fields-account"
                placeholder="Alternate Email"
                required
                autoComplete="off"
                value={formik.values.a_email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={!edit}
              />
              {formik.touched.a_email && formik.errors.a_email ? (
                <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500">
                  <span class="font-medium">{formik.errors.a_email}</span>
                </p>
              ) : (
                <br />
              )}
            </div>
            <input type="hidden" value="something" />

            <div className="">
              {/* <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-300"
            >
              Password
            </label> */}
              <input
                type="password"
                key={"password"}
                id="password"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light form-fields-account"
                disabled={!edit}
                required
                autoComplete="new-password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500">
                  <span class="font-medium">{formik.errors.password}</span>
                </p>
              ) : (
                <br />
              )}
            </div>
            <div className="">
              {/* <label
              for="c_password"
              class="block mb-2 text-sm font-medium text-gray-300"
            >
              Confirm Password
            </label> */}
              <input
                type="password"
                id="c_password"
                key={"c_password"}
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light form-fields-account"
                disabled={!edit}
                required
                autoComplete="off"
                placeholder="Confirm Password"
                value={formik.values.c_password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.c_password && formik.errors.c_password ? (
                <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500">
                  <span class="font-medium">{formik.errors.c_password}</span>
                </p>
              ) : (
                <br />
              )}
            </div>
            <div className="">
              {/* <label
              for="college"
              class="block mb-2 text-sm font-medium text-gray-300"
            >
              College
            </label> */}
              <input
                type="text"
                id="college"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light form-fields-account"
                disabled={!edit}
                required
                autoComplete="off"
                placeholder="College"
                value={formik.values.college}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.college && formik.errors.college ? (
                <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500">
                  <span class="font-medium">{formik.errors.college}</span>
                </p>
              ) : (
                <br />
              )}
            </div>
            <div className="">
              {/* <label
              for="phonepp"
              class="block mb-2 text-sm font-medium text-gray-300"
            >
              Phone Number
            </label> */}
              <input
                type="text"
                id="phonepp"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light form-fields-account"
                disabled={!edit}
                required
                autoComplete="off"
                placeholder="Phone-No"
                value={formik.values.phonepp}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phonepp && formik.errors.phonepp ? (
                <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500">
                  <span class="font-medium">{formik.errors.phonepp}</span>
                </p>
              ) : (
                <br />
              )}
            </div>
          </div>
          <div class="account-info-form-added-css">
            <div className="">
              {/* <label
              for="gender"
              class="block mb-2 text-sm font-medium text-gray-300"
            >
              Gender
            </label> */}
              <select
                type="text"
                id="gender"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light form-fields-account"
                disabled={!edit}
                required
                autoComplete="off"
                placeholder="Gender"
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
              {formik.touched.gender && formik.errors.gender ? (
                <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500">
                  <span class="font-medium">{formik.errors.gender}</span>
                </p>
              ) : (
                <br />
              )}
            </div>
            <div className="">
              {/* <label
              for="dob"
              class="block mb-2 text-sm font-medium text-gray-300"
              onClick={() => {
                document.getElementById("dob").showPicker();
              }}
            >
              Date Of Birth
            </label> */}
              <div
                className="relative"
                onClick={() => {
                  document.getElementById("dob").showPicker();
                }}
              >
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 form-fields-account"
                  placeholder="Select date"
                  id="dob"
                  disabled={!edit}
                  autoComplete="off"
                  value={formik.values.dob}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.dob && formik.errors.dob ? (
                <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500">
                  <span class="font-medium">{formik.errors.dob}</span>
                </p>
              ) : (
                <br />
              )}
            </div>
            <div className="">
              {/* <label
              for="yog"
              class="block mb-2 text-sm font-medium text-gray-300"
            >
              Year Of Graduation
            </label> */}
              <select
                type="text"
                id="yog"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light form-fields-account"
                disabled={!edit}
                autoComplete="off"
                value={formik.values.yog}
                placeholder="Year Of Graduation"
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

              {formik.touched.yog && formik.errors.yog ? (
                <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500">
                  <span class="font-medium">{formik.errors.yog}</span>
                </p>
              ) : (
                <br />
              )}
            </div>
            <div className="">
              {/* <label
              for="por"
              class="block mb-2 text-sm font-medium text-gray-300"
            >
              Position Of Responsibility
            </label> */}
              <input
                type="text"
                id="por"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light form-fields-account"
                disabled={!edit}
                autoComplete="off"
                placeholder="POR"
                value={formik.values.por}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.por && formik.errors.por ? (
                <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500">
                  <span class="font-medium">{formik.errors.por}</span>
                </p>
              ) : (
                <br />
              )}
            </div>
            <div className="">
              {/* <label
              for="addresspppp"
              class="block mb-2 text-sm font-medium text-gray-300"
            >
              Addresspp
            </label> */}
              <input
                type="text"
                id="addresspp"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light form-fields-account"
                disabled={!edit}
                autoComplete="off"
                placeholder="Address"
                value={formik.values.addresspp}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.addresspp && formik.errors.addresspp ? (
                <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500">
                  <span class="font-medium">{formik.errors.addresspp}</span>
                </p>
              ) : (
                <br />
              )}
            </div>
            <div className="">
              {/* <label
              for="citypp"
              class="block mb-2 text-sm font-medium text-gray-300"
            >
              City
            </label> */}
              <select
                type="text"
                id="citypp"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light form-fields-account"
                disabled={!edit}
                required
                placeholder="City"
                autoComplete="off"
                value={formik.values.citypp}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" label="Select your City">
                  Select your City
                </option>
                {statecitypp.map((ele) => {
                  return (
                    <option value={ele} label={ele}>
                      {ele}
                    </option>
                  );
                })}{" "}
              </select>
              {formik.touched.citypp && formik.errors.citypp ? (
                <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500">
                  <span class="font-medium">{formik.errors.citypp}</span>
                </p>
              ) : (
                <br />
              )}
            </div>
            <div className="">
              {/* <label
              for="state"
              class="block mb-2 text-sm font-medium text-gray-300"
            >
              State
            </label> */}
              <select
                type="text"
                id="statepp"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light form-fields-account"
                disabled={!edit}
                required
                autoComplete="off"
                placeholder="State"
                value={formik.values.statepp}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" unselectable="true" label="Select your State">
                  Select your State
                </option>
                {data.states.map((e) => {
                  const districts = e.districts;
                  return (
                    <option value={e.state} key={e.state} label={e.state}>
                      {e.state}
                    </option>
                  );
                })}
              </select>
              {formik.touched.statepp && formik.errors.statepp ? (
                <p class="mt-2 text-sm text-right text-red-600 dark:text-red-500">
                  <span class="font-medium">{formik.errors.statepp}</span>
                </p>
              ) : (
                <br />
              )}
            </div>
          </div>
        </div>
        {edit ? (
          <div className="flex">
            <img src={cancelimg} alt="" className="cancel" 
            onClick={() => {
              setEdit(false);
            }}/>
            <button
              type="submit"
              class="text-white ml-auto mr-auto block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 update-account-button"
            >
              Update account
            </button>{" "}
          </div>
        ) : (
          <img
            src={editimg}
            alt=""
            className="edit"
            onClick={() => {
              setEdit(true);
            }}
          />
        )}
      </form>
      {/* <div className="my-8"></div> */}
    </div>
  );
};

export default ProfilePage;
