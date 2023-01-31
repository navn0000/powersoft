import * as Yup from 'yup'

export const mainValidation = Yup.object({
    name: Yup.string("Please enter your Name").required('name is required'),
    email: Yup.string('Enter your business email')
    .email('Enter a valid email')
    .required('Email is required'),
    mobile: Yup.string('Enter your phone no').matches(/^\d+$/, "Should be digits only")
    .min(10, 'Enter a valid phone no').required("mobile number is required"),
    pan: Yup.string('Enter the pan number').matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Please enter valid pan number").required('Pan number is required'),
})