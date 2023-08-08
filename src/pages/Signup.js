import React from 'react'
import signupImg from '../assets/signup.png'
import Template from '../components/Template'
const Signup = ({setIsLoggedIn}) => {
   return (
    <Template
    title ='Join the millions learning to code with studynotion for free'
    desc1 ='Build skills for today, tommorrow, and beyond.'
    desc2 ='Eduction to future-proof your career.'
    image={signupImg}
    formtype='signup'
    setIsLoggedIn={setIsLoggedIn}

/>
   )
}

export default Signup