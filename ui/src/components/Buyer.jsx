import React, { useState } from "react";
import './/BuyerStyle.css';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { styled } from '@mui/material/styles';
import {
    Box,
    Card,
    Stepper,
    Step,
    StepLabel,
    Button,
    FormControl,
    TextField,
    Grid,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Buyer = ()=>{

    const steps = ["User Details", "Product Details"];
    const [activeStep,setActiveStep] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const [prodErrorMessage, setProdErrorMessage] = useState('');
    const [emailError,setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [phone, setPhone] = useState('');
    const [dialog, setDialog] = useState(false);
    const [formErrors,setFormErrors] = useState({});
    const [formData,setFormData] = useState(
        {
            name: '',
            email: '',
            mobile_code: '91',
            mobile_digits: '',
            mobile: {
                code: '',
                digits: ''
              },
        }
    )

    const [prodFormData,setProdFormData] = useState(
        {   img :[],
            title: '',
            alt: '',
            place: '',
        }
    )

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    const handleErrors = (fieldName) => {
        setFormErrors((prevFormErrors) => ({
          ...prevFormErrors,
          [fieldName]: true,
        }));
      };

    const handleChange = (e) =>{
        const { name, value, type, checked } = e.target;
        if (name === "mobile_digits" && !/^\d+$/.test(value)) {
            setPhoneError("Only digits");
          } else {
            setPhoneError("");
          }
        if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
          setEmailError("Invalid email");
        }
        else {
          setEmailError("");
        }
        setFormData((prevFormData) => ({...prevFormData,[name]:value }));

    }
    
    const ProdHandleChange = (e) =>{
        const {name,value} = e.target;
        setProdFormData((prevFormData) => ({...prevFormData,[name]:value }));
    }
    
    const handleContinue = (e) =>{
        const emptyFields = Object.entries(formData).filter(([name, value]) => value === '')
        .map(([name]) => name);
        if (emptyFields.length > 0) {
            const fieldNames = emptyFields.join(', ');
            setErrorMessage(`Please fill in the required fields: ${fieldNames}`);
            return;
        } else
            setErrorMessage('');
        setActiveStep((prevStep) => prevStep+1);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const emptyFields = Object.entries(formData).filter(([name, value]) => value === '').map(([name]) => name);
        if (emptyFields.length > 0) {
            const fieldNames = emptyFields.join(', ');
            setProdErrorMessage(`Please fill in the required fields: ${fieldNames}`);
            return;
        } else
            setProdErrorMessage('');
        alert(`data is recorded successfully, Name: ${formData.name}, Contact : ${formData.contact}, Email: ${formData.email}`);
    }

    const handleBack=(e)=>{
        setActiveStep((prevStep) => prevStep-1);
    }
    return(
        <>
            <div className="my-3">
                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={1} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            </div>

           {activeStep === 0 && (
                <div className="form-container my-4">
                    <Card className="form-card">
                        <div className="d-flex justify-content-center align-items-center place-items-center mx-5 my-5">
                            <div className="row col-lg-12">

                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pa-md my-2">
                                    <FormControl fullWidth>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            name="name"
                                            label="User Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onBlur={() => handleErrors('name')}
                                            error={formData.name === '' && formErrors.name}
                                            helperText={formData.name === '' && formErrors.name ? 'Field is required' : ''}
                                        />
                                    </FormControl>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pa-md my-2 " >
                                    <FormControl fullWidth>
                                        <TextField
                                            variant="outlined" 
                                            label="Email"
                                            fullWidth name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onBlur={() => handleErrors('email')}
                                            error={(formData.email === '' && formErrors.email) || !!emailError}
                                            helperText={(formData.email === '' && formErrors.email) ? 'Field is required' : emailError || ''}
                                        />
                                    </FormControl>
                                
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 my-2 phone-input">
                                    <Grid item className="phone-code">
                                        <PhoneInput
                                            fullWidth
                                            className="tellphone-pos"
                                            country={"india"}
                                            enableSearch={true}
                                            value={phone?phone:formData.mobile_code}
                                            onChange={(country)=>setPhone(country)}
                                        />
                                    </Grid>
                                    <TextField
                      variant="outlined"
                      label="Phone"
                      fullWidth name="mobile_digits"
                      value={formData.mobile_digits}
                      onChange={handleChange}
                      onBlur={() => handleErrors('mobile_digits')}
                      error={(formData.mobile_digits === '' && formErrors.mobile_digits) || !!phoneError}
                      helperText={(formData.mobile_digits === '' && formErrors.mobile_digits) ? 'Field is required' : phoneError || ''}
                    />
                                </div>

                               <div className="col-12 my-3 btn-cont">
                                      <Button variant="contained" onClick={(e) => handleContinue(e)}>Continue</Button>
                                </div>
                                
                            </div> 
                        </div>
                    </Card>
                </div>
           )}

           {activeStep ===1 && (
                <div>
                     
                     
                      <div className="form-container my-4">
                        <Card className="form-card">
                     <Button variant="secondary" className='back-btn' onClick={handleBack}>Back</Button>

                            <div className="d-flex justify-content-center align-items-center place-items-center">

                                <form onSubmit={handleSubmit}>

                                    <div className="my-4">

                                        <div className="col-12 my-2 ">
                                            <input type="file" />
                                                <Button
                                                    component="label"
                                                    role={undefined}
                                                    variant="contained"
                                                    tabIndex={-1}
                                                    startIcon={<CloudUploadIcon />}
                                                >
                                                    Upload file
                                                    <VisuallyHiddenInput type="file" />
                                                </Button>
                                        </div>
                                        <div className="col-12 my-2">
                                            <input type="text" name = 'title' placeholder="Product Title" pattern="[A-Za-z]+" value={prodFormData.title} onChange={ProdHandleChange}/>
                                        </div>
                                        <div className="col-12 my-2">
                                        <input type="text" name = 'alt' placeholder="Product image name" pattern="[A-Za-z]+" value={prodFormData.alt} onChange={ProdHandleChange}/>
                                        </div>
                                        <div className="col-12 my-2">
                                            <label>
                                                Description:
                                                <textarea name="description" rows={4} cols={40} />
                                            </label>
                                        </div>
                                        <div className="col-12 my-3 ">
                                            <Button variant="contained" onClick={handleContinue}>Submit</Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Card> 
                    </div>
                </div>
            )}
          
        </>
        
    )
}
export default Buyer;