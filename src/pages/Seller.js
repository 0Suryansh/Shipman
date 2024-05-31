import React, { useState, useEffect } from "react";
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
import { UserAuth } from '../context/AuthContext';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { toastStyle } from '../utility/helper'

const steps = ['Confirm Details', 'Enter Pickup address', 'We are coming  🚀'];


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

    const location = useLocation();
    const [id, setId] = useState(null);
    const [sid, setSid] = useState(null);
    const [transactionData, setTransactionData] = useState(null);
    const [confirmStatus, setConfirmStatus] = useState(true);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const idParam = searchParams.get('id');
        const sidParam = searchParams.get('sid');
        setId(idParam);
        setSid(sidParam);

        if (idParam) {
            fetch(`https://x8ki-letl-twmt.n7.xano.io/api:3dtHg9uZ/transaction_table/${idParam}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch seller data');
                    }
                    return response.json();
                })
                .then(data => {
                    setTransactionData(data);
                })
                .catch(error => {
                    console.log("Check the url, Maybe it is broken")
                });
        }

    }, [location]);

    useEffect(() => {
        console.log(transactionData)
    })

    const handleSubmitPatch1 = async () => {
        const m_conformity = "true"
        const updatedTransactionData = {
            ...transactionData,
            confirm_status: m_conformity
        };
        setTransactionData(updatedTransactionData);

        try {
            const response = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:3dtHg9uZ/transaction_table/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedTransactionData),
            });
            const data = await response.json();
            console.log('Success:', data);
        } catch (error) {
            console.error('Error:', error);
        }

        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);

    };

    function checkEmptyFields(data, fields) {
        for (const field of fields) {
            if (data[field] === "") {
                return false; // If any field is empty, return false
            }
        }
        return true; // If all fields are filled, return true
    }

    // Define the fields you want to validate
    const requiredFields = [
        "S_First_Name",
        "S_Last_Name",
        "S_Address",
        "S_Apartment",
        "S_City",
        "S_State",
        "S_Pincode",
        "S_mobile_number"
    ];

    const handleSubmitPatch2 = async () => {

        try {
            if (!checkEmptyFields(transactionData, requiredFields)) {
                toast.error('Please fill all fields', { ...toastStyle.error })
                return;
            }
            const response = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:3dtHg9uZ/transaction_table/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(transactionData),
            });
            const data = await response.json();
            toast.success('Address saved successfully', { ...toastStyle.success })
        } catch (error) {
            console.error('Error:', error);
        }

        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);

    };

    const handleCancelBtn = async () => {
        setConfirmStatus(false)


        const m_conformity = "false"
        const updatedTransactionData = {
            ...transactionData,
            confirm_status: m_conformity,
            is_expired : "expired"
        };
        setTransactionData(updatedTransactionData);

        try {
            const response = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:3dtHg9uZ/transaction_table/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedTransactionData),
            });
            const data = await response.json();
            toast.success('Transaction cancelled successfully', { ...toastStyle.success })
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTransactionData({
            ...transactionData,
            [name]: value,
        });
    };

    const handleNext = async () => {
        if (activeStep === 0) {
            handleSubmitPatch1()
        }
        if (activeStep === 1) {
            handleSubmitPatch2()
        }
        if (activeStep === 2) {
            const updatedTransactionData = {
                ...transactionData,
                is_expired: "expired"
            };
            setTransactionData(updatedTransactionData);

            try {
                const response = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:3dtHg9uZ/transaction_table/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedTransactionData),
                });
                const data = await response.json();
                toast.success('Transaction cancelled successfully', { ...toastStyle.success })
            } catch (error) {
                console.error('Error:', error);
            }
            let newSkipped = skipped;
            if (isStepSkipped(activeStep)) {
                newSkipped = new Set(newSkipped.values());
                newSkipped.delete(activeStep);
            }

            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            setSkipped(newSkipped);
        }
    };



    useEffect(() => {
        console.log(transactionData?.B_Payment)
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

                        </div>
                    </NavRow>
                    <HeroRow>
                        <Heading>Welcome SELLER!</Heading>
                        {transactionData?.is_expired === "expired" ? (
                            <>
                            <Description>This link has been expired now.</Description>
                                <ul>
                                    <li>Maybe seller has cancelled it.</li>
                                    <li>Order is in progress(wait for a day or two, you will be contacted) or completed. Don't worry ShipMAN will provide trackID to buyers.</li>
                                </ul>
                                <Description>If you still have queries then whatsapp me for more more detail</Description>
                            </>
                        ) : transactionData?.B_Payment === "false" ? (
                            <>
                                <Description>We are checking buyer's seriousness in this purchase, and we will ask them to submit ₹70 as security as a sign of seriousness. We will refund this amount to your buyer once order is delivered. </Description>
                                <Description>Open this link again once we approve buyer's request. (Check after 2pm next day.)</Description>
                            </>
                        ) : <Description>
                            Buyer as deposited the ₹70, hence you can proceed now to enter your details.
                        </Description>}
                    </HeroRow>

                    {transactionData?.is_expired === "expired" ? (
                        <Description></Description>
                    ) : transactionData?.B_Payment === "true" && (transactionData?.confirm_status === "" || transactionData?.confirm_status === "true") ? (
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
                            {activeStep === 1 ? (
                                <Box sx={{ width: "50%" }}>
                                    <Description>Enter the pickup address where ShipMAN will pick order up from.</Description>
                                    <TextField id="outlined-basic" label="Country" disabled variant="outlined" defaultValue="India" fullWidth sx={{ marginTop: 2, marginBottom: 2 }} />
                                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <TextField id="outlined-basic" label="First Name" name="S_First_Name"
                                            value={transactionData.S_First_Name}
                                            onChange={handleChange}
                                            variant="outlined" sx={{ marginBottom: 2 }} />
                                        <TextField id="outlined-basic" label="Last Name" name="S_Last_Name"
                                            value={transactionData.S_Last_Name}
                                            onChange={handleChange} variant="outlined" sx={{ marginBottom: 2 }} />
                                    </Box>
                                    <TextField id="outlined-basic" label="Address" name="S_Address"
                                        value={transactionData.S_Address}
                                        onChange={handleChange} variant="outlined" fullWidth sx={{ marginBottom: 2 }} />
                                    <TextField id="outlined-basic" label="Apartment, suite, etc. (optional)" name="S_Apartment"
                                        value={transactionData.S_Apartment}
                                        onChange={handleChange} variant="outlined" fullWidth sx={{ marginBottom: 2 }} />
                                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <TextField id="outlined-basic" label="City" name="S_City"
                                            value={transactionData.S_City}
                                            onChange={handleChange} variant="outlined" sx={{ marginBottom: 2 }} />
                                        <TextField id="outlined-basic" label="State" name="S_State"
                                            value={transactionData.S_State}
                                            onChange={handleChange} variant="outlined" sx={{ marginBottom: 2 }} />
                                        <TextField id="outlined-basic" label="PIN code" name="S_Pincode"
                                            value={transactionData.S_Pincode}
                                            onChange={handleChange} variant="outlined" sx={{ marginBottom: 2 }} />
                                    </Box>
                                    <TextField id="outlined-basic" label="Phone Number" name="S_mobile_number"
                                        value={transactionData.S_mobile_number}
                                        onChange={handleChange} variant="outlined" fullWidth sx={{ marginBottom: 2 }} />
                                </Box>
                            ) : null}

                            {activeStep === 0 ? (
                                <Box sx={{ width: "50%" }}>
                                    <ul>
                                        <li>Your buyer {transactionData?.B_First_Name} {transactionData?.B_Last_Name} has deposited advance amount of ₹70 with us, showing their seriousness in purchase, Hence VERY VERY low chance of order refusal.</li>

                                        <Description>Confirm the amount of product you both agreed upon(in rupees).</Description>

                                        <Description>Buyer have agreed to pay <spna style={{ fontSize: 24 }}>₹{transactionData?.Price}</spna></Description>
                                        <Description style={{ color: "red" }}>IF THIS AMOUNT IS NOT WHAT YOU TWO MUTUALLY AGREED TO, THEN "CANCEL" THIS TRANSACTION ELSE CLICK "NEXT" AND MOVE FORWARD.</Description>
                                    </ul>
                                </Box>
                            ) : null}
                            {activeStep === 2 ? (
                                <Box sx={{ width: "50%" }}>
                                    <Description>Clcik on Finish, and you will all set, we will come and pick up the product from your Doorstep.</Description>

                                </Box>
                            ) : null}
                            {activeStep === steps.length ? (
                                <React.Fragment>
                                    <Typography sx={{ mt: 2, mb: 1 }}>
                                        You have successfully completed all steps and Congratulations! 🎉🎉 for your sales. We are coming to your doorstep to pick order from you. We will contact you before it regarding shipping label that need to be attatched onto the order box.
                                    </Typography>
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
                                        {activeStep === 0 ? <Button variant="outlined" style={{ marginRight: 20 }} onClick={handleCancelBtn}>Cancel</Button> : null}
                                        <Button onClick={handleNext} variant="contained">
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                    </Box>
                                </React.Fragment>
                            )}
                        </Box>
                    ) : <Description>
                        
                    </Description>}

                </Content2Xl>
            </Container>
        </AnimationRevealPage>
    );
};
