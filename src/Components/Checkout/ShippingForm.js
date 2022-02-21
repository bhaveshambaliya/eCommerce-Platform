import React, { useState, useContext } from 'react'
import { MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { regionList } from '../../Pages/ShoppingCart';
import {connect} from 'react-redux'

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/;
const phoneRegex = /^(?:[0-9]\s?){5,14}[0-9]$/;
const postcodeRegex = /^([0-9]{4,4})$/;

function ShippingForm({shippingMethod,cancelFunc,userDetails}) {

  const [addressDetails, setaddressDetails] = useState({
    email: "",
    pswrd: "",
    fname: "",
    lname: "",
    company: "",
    country: "Australia",
    street: "",
    city: "",
    province: "",
    postcode: "",
    phone: "",
    contactName: "",
    contactNumb: "",
  });

  const [valid, setvalid] = useState({
    emailValid: true,
    fnameValid: true,
    lnameValid: true,
    streetValid: true,
    cityValid: true,
    provinceValid: true,
    postcodeValid: true,
    phoneValid: true,
    contactNameValid: true,
    contactNumbValid: true,
  });

  const notValid = {
    emailValid: false,
    fnameValid: false,
    lnameValid: false,
    streetValid: false,
    cityValid: false,
    provinceValid: false,
    postcodeValid: false,
    phoneValid: false,
    contactNameValid: false,
    contactNumbValid: false,
  };
  const [loginOption, setloginOption] = useState(false);
  const [errMsg, seterrMsg] = useState({
    emailErr:'',
    postcodeErr:'',
    phoneErr:'',
    contactNumbErr:''
  });

  const changehandler = (e) => {
    let { name, value } = e.target;
    setaddressDetails({ ...addressDetails, [name]: value });
    if (name === "fname") {
      if (value === "") {
        setvalid({ ...valid, fnameValid: false });
      } else {
        setvalid({ ...valid, fnameValid: true });
      }
    } else if (name === "lname") {
      if (value === "") {
        setvalid({ ...valid, lnameValid: false });
      } else {
        setvalid({ ...valid, lnameValid: true });
      }
    } else if (name === "street") {
      if (value === "") {
        setvalid({ ...valid, streetValid: false });
      } else {
        setvalid({ ...valid, streetValid: true });
      }
    } else if (name === "city") {
      if (value === "") {
        setvalid({ ...valid, cityValid: false });
      } else {
        setvalid({ ...valid, cityValid: true });
      }
    } else if (name === "province") {
      if (value === "select") {
        setvalid({ ...valid, provinceValid: false });
      } else {
        setvalid({ ...valid, provinceValid: true });
      }
    } else if (name === "postcode") {
      if (value === "") {
        setvalid({ ...valid, postcodeValid: false });
        seterrMsg({...errMsg,postcodeErr:'This is a required field.'});
      }
      else if(!postcodeRegex.test(value)){
        setvalid({ ...valid, postcodeValid: false });
        seterrMsg({...errMsg,postcodeErr:'Provided Zip/Postal Code seems to be invalid. Example: 1234. If you believe it is the right one you can ignore this notice.'});
      }else {
        setvalid({ ...valid, postcodeValid: true });
      }
    } else if (name === "phone") {
      if (value === "") {
        setvalid({ ...valid, phoneValid: false });
        seterrMsg({...errMsg,phoneErr:'This is a required field.'});
      } else if (!phoneRegex.test(value)) {
        setvalid({ ...valid, phoneValid: false });
        seterrMsg({...errMsg,phoneErr:'Please enter a valid number'});
      } else {
        setvalid({ ...valid, phoneValid: true });
      }
    } else if (name === "contactName") {
      if (value === "") {
        setvalid({ ...valid, contactNameValid: false });
      } else {
        setvalid({ ...valid, contactNameValid: true });
      }
    } else if (name === "contactNumb") {
      if (value === "") {
        setvalid({ ...valid, contactNumbValid: false });
        seterrMsg({...errMsg,contactNumbErr:'This is a required field.'});
      } else if (!phoneRegex.test(value)) {
        setvalid({ ...valid, contactNumbValid: false });
        seterrMsg({...errMsg,contactNumbErr:'Please enter a valid number'});
      } else {
        setvalid({ ...valid, contactNumbValid: true });
      }
    }
  };

  const validatingFunction = (e) => {
    let { name, value } = e.target;
    if (name === "email") {
      if (!emailRegex.test(value)) {
        setvalid({ ...valid, emailValid: false });
        seterrMsg({...errMsg,emailErr:'Please enter a valid email address (Ex: johndoe@domain.com).'})
        setloginOption(false);
      } else {
        setvalid({ ...valid, emailValid: true });
        setloginOption(true);
      }
    }
  };

  const submitHandler = (e) => {

    if (
      !addressDetails.email ||
      !addressDetails.fname ||
      !addressDetails.lname ||
      !addressDetails.street ||
      !addressDetails.city ||
      !addressDetails.province ||
      !addressDetails.postcode ||
      !addressDetails.phone ||
      !addressDetails.contactName ||
      !addressDetails.contactNumb
    ){
      e.preventDefault();
    }

    if (
      !addressDetails.email &&
      !addressDetails.fname &&
      !addressDetails.lname &&
      !addressDetails.street &&
      !addressDetails.city &&
      !addressDetails.province &&
      !addressDetails.postcode &&
      !addressDetails.phone &&
      !addressDetails.contactName &&
      !addressDetails.contactNumb
    ) {
      setvalid(notValid);
      seterrMsg({emailErr:'This is a required field.',postcodeErr:"This is a required field.",phoneErr:'This is a required field.',contactNumbErr:'This is a required field.'})
    } else if (!addressDetails.email) {
      setvalid({ ...valid, emailValid: false });
      seterrMsg({...errMsg,emailErr:'This is a required field.'})
    } else if (!addressDetails.fname) {
      setvalid({ ...valid, fnameValid: false });
    } else if (!addressDetails.lname) {
      setvalid({ ...valid, lnameValid: false });
    } else if(!addressDetails.street){
      setvalid({...valid,streetValid:false})
    } else if(!addressDetails.city){
      setvalid({...valid,cityValid:false})
    } else if(!addressDetails.province){
      setvalid({...valid,provinceValid:false})
    } else if(!addressDetails.postcode){
      setvalid({...valid,postcodeValid:false})
      seterrMsg({...errMsg,postcodeErr:'This is a required field.'})
    } else if(!addressDetails.phone){
      setvalid({...valid,phoneValid:false})
      seterrMsg({...errMsg,phoneErr:'This is a required field.'})
    } else if(!addressDetails.contactName){
      setvalid({...valid,contactNameValid:false})
    } else if(!addressDetails.contactNumb){
      setvalid({...valid,contactNumbValid:false})
      seterrMsg({...errMsg,contactNumbErr:'This is a required field.'})
    } else if (
      addressDetails.email &&
      addressDetails.fname &&
      addressDetails.lname &&
      addressDetails.street &&
      addressDetails.city &&
      addressDetails.province &&
      addressDetails.postcode &&
      addressDetails.phone &&
      addressDetails.contactName &&
      addressDetails.contactNumb
    ){

      userDetails.push(addressDetails)
      setaddressDetails({
        email: "",
        pswrd: "",
        fname: "",
        lname: "",
        company: "",
        country: "Australia",
        street: "",
        city: "",
        province: "",
        postcode: "",
        phone: "",
        contactName: "",
        contactNumb: "",
      })
    }

    console.log(userDetails)
  };

  
    return (
      <>
        <form className="shipping-box pb-4">
          {
            shippingMethod ? 
          
              <div className="col-md-6">
                <label>Email Address *</label>
                <input
                  name="email"
                  value={addressDetails.email}
                  className="w-100"
                  onChange={changehandler}
                  type="text"
                  onBlur={validatingFunction}
                ></input>
                {valid.emailValid ? null : (
                  <p className="text-danger">
                    {errMsg.emailErr}
                  </p>
                )}
                {loginOption ? (
                  <div className="py-2">
                    <label>Password *</label>
                    <input
                      name="pswrd"
                      value={addressDetails.pswrd}
                      className="w-100"
                      onChange={changehandler}
                      type="text"
                      placeholder="optional"
                    ></input>
                    <p className="py-2">
                      You already have an account with us. Sign in or continue
                      as guest.
                    </p>
                    <button className="loginBtn">LOGIN</button>
                    <a className="float-end">Forgot Your Password?</a>
                  </div>
                ) : (
                  <p className="py-1">
                    You can create an account after checkout.
                  </p>
                )}
                <hr />
              </div> : null
              }
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>First Name *</label>
                  <input
                    name="fname"
                    value={addressDetails.fname}
                    className="w-100"
                    onChange={changehandler}
                    type="text"
                  ></input>
                  {valid.fnameValid ? null : (
                    <p className="text-danger">This is a required field.</p>
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <label>Last Name *</label>
                  <input
                    name="lname"
                    value={addressDetails.lname}
                    className="w-100"
                    onChange={changehandler}
                    type="text"
                  ></input>
                  {valid.lnameValid ? null : (
                    <p className="text-danger">This is a required field.</p>
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <label>Company</label>
                  <input
                    name="company"
                    value={addressDetails.company}
                    className="w-100"
                    onChange={changehandler}
                    type="text"
                  ></input>
                </div>
                <div className="col-md-6 mb-3">
                  <label>Country *</label>
                  <select
                    className="w-100"
                    name="country"
                    onChange={changehandler}
                  >
                    <option value="Australia">Australia</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label>Street Address *</label>
                  <input
                    name="street"
                    value={addressDetails.street}
                    className="w-100 mb-2"
                    onChange={changehandler}
                    type="text"
                  ></input>
                  {valid.streetValid ? null : (
                    <p className="text-danger">This is a required field.</p>
                  )}
                  <input
                    name="street"
                    // value={addressDetails.street}
                    className="w-100 mb-2"
                    // onChange={changehandler}
                    type="text"
                  ></input>
                  <input
                    name="street"
                    // value={addressDetails.street}
                    className="w-100"
                    // onChange={changehandler}
                    type="text"
                  ></input>
                </div>
                <div className="col-md-6 mb-3">
                  <label>City *</label>
                  <input
                    name="city"
                    value={addressDetails.city}
                    className="w-100"
                    onChange={changehandler}
                    type="text"
                  ></input>
                  {valid.cityValid ? null : (
                    <p className="text-danger">This is a required field.</p>
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <label>State/Province *</label>
                  <select
                    className="w-100"
                    name="province"
                    onChange={changehandler}
                  >
                    <option value="select">
                      Please select a region, state or province
                    </option>
                    {regionList.map((region) => {
                      return <option value={region}>{region}</option>;
                    })}
                  </select>
                  {valid.provinceValid ? null : (
                    <p className="text-danger">This is a required field.</p>
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <label>Postcode *</label>
                  <input
                    name="postcode"
                    value={addressDetails.postcode}
                    className="w-100"
                    onChange={changehandler}
                    type="text"
                  ></input>
                  {valid.postcodeValid ? null : (
                    <p className="text-danger">{errMsg.postcodeErr}</p>
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <label>Phone *</label>
                  <input
                    name="phone"
                    value={addressDetails.phone}
                    className="w-100"
                    onChange={changehandler}
                    type="text"
                  ></input>
                  {valid.phoneValid ? null : 
                    <p className="text-danger">
                      {errMsg.phoneErr}
                    </p>
                  }
                </div>
                <div className="col-md-6 mb-3"></div>
                <div className="col-md-6">
                  <label>Site Contact Name *</label>
                  <input
                    name="contactName"
                    value={addressDetails.contactName}
                    className="w-100"
                    onChange={changehandler}
                    type="text"
                  ></input>
                  {valid.contactNameValid ? null : (
                    <p className="text-danger">This is a required field.</p>
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <label>Site Contact Number *</label>
                  <input
                    name="contactNumb"
                    value={addressDetails.contactNumb}
                    className="w-100"
                    onChange={changehandler}
                    type="text"
                  ></input>
                  {valid.contactNumbValid ? null : 
                    <p className="text-danger">{errMsg.contactNumbErr}</p>
                  }
                </div>
              </div>
            </form>
            {
            shippingMethod ? 
            <>
            <h2>Shipping methods</h2>
            <hr />
            <form className="row align-items-center">
              <div className="col-md-6 radio-option">
                <input
                  type="radio"
                  id="collect"
                  checked
                  className="form-check me-2 p-2"
                ></input>
                <label for="collect">$0.00 - Collect in Store </label>
                <div className="my-3">
                  <label className="py-2">Delivery comments</label>
                  <textarea
                    rows={5}
                    className="w-100 border rounded-3"
                  ></textarea>
                </div>
                <Link to='/checkout/payment'>
                <button onClick={submitHandler} className="checkout-btn">
                  <MdShoppingCart className="fs-5 mb-1 me-3" />
                  Proceed to Payment
                </button></Link>
              </div>
              <div className="col-md-6 d-none d-md-block">
                <div className="p-4 border border-3 rounded-3 border-danger">
                  <p className="m-0">
                    <span className="text-danger">Note:</span> Please make sure
                    you have site access for the product, once the product is
                    delivered its your property!
                  </p>
                </div>
              </div>
            </form>
            </> : <div>
              <button className='loginBtn col-12 col-md-4 mb-3' onClick={submitHandler}>UPDATE</button>
              <button className='loginBtn col-12 float-md-end col-md-4 mb-4' onClick={cancelFunc}>CANCEL</button>
            </div>
            }
            </>
    )
}

const mapStatestoProps = (state)=>{
  return {userDetails : state.userDetails}
}

export default connect(mapStatestoProps)(ShippingForm)
