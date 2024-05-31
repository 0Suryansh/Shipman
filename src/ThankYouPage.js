import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl } from "components/misc/Layouts";
import tw from "twin.macro";
// eslint-disable-next-line
import { css } from "styled-components/macro";
import GitHubButton from "react-github-btn";

import { LogoLink } from "components/headers/light.js";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";

import logo from "images/logo.svg";
import { UserAuth } from './context/AuthContext';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { v4 as uuid } from 'uuid'
import ClipboardCopy from "components/misc/CopyClipboard";
import toast from 'react-hot-toast';
import { toastStyle } from './utility/helper'

const steps = ['Enter Recipient address', 'Choose mode of Payment', 'Share with seller'];


/* Hero */
const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 border-b-2 lg:mr-12 last:mr-0 text-gray-700 border-gray-400 hocus:border-gray-700 `;
const PrimaryNavLink = tw(
  NavLink
)`text-gray-100 bg-primary-500 px-6 py-3 border-none rounded hocus:bg-primary-900 focus:shadow-outline`;
const HeroRow = tw(Row)`max-w-xl flex-col justify-between items-center py-20 lg:py-24 mx-auto`;

const Heading = tw(HeadingBase)`text-center text-primary-900 leading-snug`;
const Description = tw(DescriptionBase)`mt-4 text-center lg:text-base text-gray-700 max-w-lg mx-auto lg:mx-0`;

export default () => {
  /*
   * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
   * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
   */
  window.gtag("js", new Date());
  window.gtag("config", "UA-45799926-9");

  const downloadUrl = "/treact-ui.zip"
  React.useEffect(() => {
    var iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = downloadUrl
    document.body.appendChild(iframe);
  }, [])

  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };



  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };



  // Define state variables
  const [formData, setFormData] = React.useState({
    Email: "",
    B_First_Name: "",
    B_Last_Name: "",
    B_Address: "",
    B_Apartment: "",
    B_City: "",
    B_State: "",
    B_Pincode: "",
    B_mobile_number: "",
    Price: "",
    shortID: "",
    confirm_status: "",
    S_First_Name: "",
    S_Last_Name: "",
    S_Address: "",
    S_Apartment: "",
    S_City: "",
    S_State: "",
    S_Pincode: "",
    S_mobile_number: "",
    B_Payment: "false"
  });

  // State to store the ID received from the response
  const [id, setId] = React.useState(null);

  const [descriptionUrl, setDescriptionUrl] = React.useState("");



  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function checkEmptyFields(formData, fields) {
    for (const field of fields) {
      if (formData[field] === "") {
        return false; // If any field is empty, return false
      }
    }
    return true; // If all fields are filled, return true
  }

  // Define the fields you want to validate
  const requiredFields = [
    "B_First_Name",
    "B_Last_Name",
    "B_Address",
    "B_Apartment",
    "B_City",
    "B_State",
    "B_Pincode",
    "B_mobile_number"
  ];

  // Handle form submission
  const handleSubmitPost = () => {
    const updatedFormData = {
      ...formData,
      Email: user.email
    };
    setFormData(updatedFormData);

    if (!checkEmptyFields(formData, requiredFields)) {
      toast.error('Please fill all fields', { ...toastStyle.error })
      return;
    }


    fetch('https://x8ki-letl-twmt.n7.xano.io/api:3dtHg9uZ/transaction_table', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success('Address saved successfully', { ...toastStyle.success })
        if (data.id) {
          setId(data.id);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleSubmitPatch = async () => {
    if (id) {
      const newUuid = uuid();
      const updatedFormData = {
        ...formData,
        shortID: newUuid
      };
      setFormData(updatedFormData);

      if(formData.Price < 99){
        toast.error('Product price must be more than ₹100', { ...toastStyle.error })
        return;
      }

      try {
        const response = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:3dtHg9uZ/transaction_table/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedFormData),
        });
        const data = await response.json();
        toast.success('Product price saved', { ...toastStyle.success })
      } catch (error) {
        console.error('Error:', error);
      }

      const url = `https://shipman.vercel.app/seller?id=${id}&sid=${newUuid}`;
      setDescriptionUrl(url);

      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);

    } else {
      console.log('ID is not available yet.');
    }
  };



  const handleNext = () => {
    if (activeStep === 0) {
      handleSubmitPost();
    }
    if (activeStep === 1) {
      handleSubmitPatch();
    }
    if (activeStep === 2) {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
  };

  React.useEffect(() => {
    console.log(formData)
  })




  return (
    <AnimationRevealPage disabled>
      <Container tw="-mx-8 -mt-8 pt-8 px-8">
        <Content2Xl>
          <NavRow>
            <LogoLink href="/">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFnH4X9PAA0ZJMdarAeF3I-t70AsVjfIAj36gPcwHWbA&s" alt="" />
              ShipMAN
            </LogoLink>
            <div tw="flex flex-col lg:flex-row items-center">
              {/* <NavLink target="_blank" href="https://owaiskhan.me/post/free-tailwindcss-react-ui-kit">
                Past transactions
              </NavLink> */}
              <PrimaryNavLink target="_blank" href="https://wa.me/+916306732445">
                Whatsapp Us
              </PrimaryNavLink>
              <button onClick={handleSignOut}>Logout</button>

            </div>
          </NavRow>
          <HeroRow>
            <Heading>Welcome! {user?.displayName}</Heading>
          </HeroRow>
          <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};

                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <br />
            <hr />
            {activeStep === 0 ? (
              <Box sx={{ width: "50%" }}>
                <Description>Enter the Delivery address where order needs to be shipped.</Description>
                <TextField id="outlined-basic" label="Country" disabled variant="outlined" defaultValue="India" fullWidth sx={{ marginBottom: 2, marginTop: 2 }} />
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <TextField id="outlined-basic" label="First Name" name="B_First_Name"
                    value={formData.B_First_Name}
                    onChange={handleChange}
                    variant="outlined" sx={{ marginBottom: 2 }} />
                  <TextField id="outlined-basic" label="Last Name" name="B_Last_Name"
                    value={formData.B_Last_Name}
                    onChange={handleChange} variant="outlined" sx={{ marginBottom: 2 }} />
                </Box>
                <TextField id="outlined-basic" label="Address" name="B_Address"
                  value={formData.B_Address}
                  onChange={handleChange} variant="outlined" fullWidth sx={{ marginBottom: 2 }} />
                <TextField id="outlined-basic" label="Apartment, suite, etc. (optional)" name="B_Apartment"
                  value={formData.B_Apartment}
                  onChange={handleChange} variant="outlined" fullWidth sx={{ marginBottom: 2 }} />
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <TextField id="outlined-basic" label="City" name="B_City"
                    value={formData.B_City}
                    onChange={handleChange} variant="outlined" sx={{ marginBottom: 2 }} />
                  <TextField id="outlined-basic" label="State" name="B_State"
                    value={formData.B_State}
                    onChange={handleChange} variant="outlined" sx={{ marginBottom: 2 }} />
                  <TextField id="outlined-basic" label="PIN code" name="B_Pincode"
                    value={formData.B_Pincode}
                    onChange={handleChange} variant="outlined" sx={{ marginBottom: 2 }} />
                </Box>
                <TextField id="outlined-basic" label="Phone Number" name="B_mobile_number"
                  value={formData.B_mobile_number}
                  onChange={handleChange} variant="outlined" fullWidth sx={{ marginBottom: 2 }} />
              </Box>
            ) : null}

            {activeStep === 1 ? (
              <Box sx={{ width: "50%" }}>
                <ul>
                  <li>Any transaction you place, it will be in COD mode for now.</li>
                  <li>An advance Payment of ₹50 will be collected from buyers, that whole amount will refunded to them when order will be delivered. </li>
                  <li>(Above step is done to ensure only serious buyers will initiate a tranaction to avoid misuse of resources)</li>
                  <li></li>
                  <Description>Enter the Price(excluding shipping) of product that seller told you.</Description>
                  <TextField id="outlined-basic" label="Eg. 499" name="Price"
                    value={formData.Price}
                    onChange={handleChange} variant="outlined" sx={{ marginTop: 2, marginBottom: 2 }} />
                  <Description style={{ color: "red" }}>DO NOT WRITE ANYTHING ELSE THAN WHAT YOU TWO AGREED. SELLERS WILL SEE THIS AMOUNT BEFORE RELEASING ORDER.</Description>
                </ul>
              </Box>
            ) : null}
            {activeStep === 2 ? (
              <Box sx={{ width: "50%" }}>
                <Description>Click on Finish and you will be all set from your side.</Description>

              </Box>
            ) : null}
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  You are all done, just share this link with your seller. After they enter pickup address, Your order will be picked by ShipMAN and will be delivered to you.
                </Typography>
                {descriptionUrl && (
                  <Description>
                    <ClipboardCopy copyText={descriptionUrl} />
                  </Description>
                )}
                {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleReset}>Reset</Button>
                  </Box> */}
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  {/* <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button> */}
                  <Box sx={{ flex: '1 1 auto' }} />

                  <Button onClick={handleNext} variant="contained">
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </Content2Xl>
      </Container>
    </AnimationRevealPage>
  );
};
