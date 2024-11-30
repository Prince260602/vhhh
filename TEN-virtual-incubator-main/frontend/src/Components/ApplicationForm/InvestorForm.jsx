// import React from 'react';
// import { useForm } from 'react-hook-form';
// import './InvestorForm.css';
// import Activements from '../Home_page/Activements';

// function InvestorForm() {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = (data) => {
//     console.log("Form Data Submitted:", data);
//     // Here you can handle form data, such as   sending it to a backend API
//   };

//   return (
//     <>
//     <Activements/>
//     <div className= "form-container">
//     <h2 className= "partner-container">Investor Application Form</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
      
//         <label>First Name:</label>
//         <input
//           type="text"
//           {...register('firstName', { required: "First name is required" })}
//         />
//         {errors.firstName && <p>{errors.firstName.message}</p>}

//         <label>Last Name:</label>
//         <input
//           type="text"
//           {...register('lastName', { required: "Last name is required" })}
//         />
//         {errors.lastName && <p>{errors.lastName.message}</p>}

//         <label>Email:</label>
//         <input
//           type="email"
//           {...register('email', { 
//             required: "Email is required",
//             pattern: { 
//               value: /^\S+@\S+$/i,
//               message: "Enter a valid email address"
//             }
//           })}
//         />
//         {errors.email && <p>{errors.email.message}</p>}

//         <label>Mobile Number:</label>
//         <input
//           type="tel"
//           {...register('phone', { 
//             required: "Mobile number is required",
//             minLength: { value: 10, message: "Must be at least 10 digits" }
//           })}
//         />
//         {errors.phone && <p>{errors.phone.message}</p>}

//         <label>Company Name:</label>
//         <input
//           type="text"
//           {...register('companyName', { required: "Company name is required" })}
//         />
//         {errors.companyName && <p>{errors.companyName.message}</p>}

//         <label>Company Website:</label>
//         <input
//           type="text"
//           {...register('companyWebsite', { required: "Company website is required" })}
//         />
//         {errors.companyWebsite && <p>{errors.companyWebsite.message}</p>}

//         <label>How are you looking to work with The Entrepreneurship Network?</label>
//         <div className="radio-group">
//           <label>
//             <input
//               type="radio"
//               value="investor"
//               {...register('collaborationType', { required: "Please select an option" })}
//             />
//             I am an investor interested in investing in startups
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="corporate"
//               {...register('collaborationType', { required: "Please select an option" })}
//             />
//             I am a corporate interested in collaborating with startups
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="government"
//               {...register('collaborationType', { required: "Please select an option" })}
//             />
//             I am a government entity interested in funding pilots with startups
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="university"
//               {...register('collaborationType', { required: "Please select an option" })}
//             />
//             I am a university interested in job opportunities with startups
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="serviceProvider"
//               {...register('collaborationType', { required: "Please select an option" })}
//             />
//             I am a service provider interested in providing services to startups
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="techStartup"
//               {...register('collaborationType', { required: "Please select an option" })}
//             />
//             I am a tech startup interested in applying to your programs
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="academicInstitute"
//               {...register('collaborationType', { required: "Please select an option" })}
//             />
//             I am an academic institute interested in working with startups
//           </label>
//         </div>
//         {errors.collaborationType && <p>{errors.collaborationType.message}</p>}

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//     </>
//   );
// }

// export default InvestorForm;













import { useState } from "react";
import Activements from "../Home_page/Activements";
import toast from "react-hot-toast";
const Investor_Form = () => {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        company_name: '',
        company_website: '',
        partnership_type: {
            investor: 'investor',
            corporate: 'corporate',
            government: 'government',
            university: 'university',
            service_provider: 'service provider',
            tech_startup: 'tech startup',
            academic_institute: 'academic institute',
        },
    });
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => (
            {
                ...prev,
                [name]: value
            }
        ))
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const res = new FormData(e.target);
        res.append("access_key", "7bec698f-2a32-4864-8391-8b7985e04256");

        try {
            const response = await fetch("https://api.web3forms.com/submit",{
                method: "POST",
                body: res,
            });
    
            const data = await response.json();
            if (data.success) {
                console.log(data)
                toast.success("Form Submitted Successfully");
                window.location.reload();
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
        
        <div className="my-8 bg-slate-100 border border-gray-400 rounded-md shadow-sm w-full sm:w-[75%] md:w-[50%] lg:w-[50%] mx-auto pt-4 pb-6 px-4 sm:px-6">
            <h1 className="text-center text-3xl font-light mb-7">Investor Application Form</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-2">
                    <label htmlFor="firstname" className="block mb-2 text-md font-medium text-gray-900">First name</label>
                    <input type="text" name="firstname" onChange={handleChange} value={formData.firstname} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-2">
                    <label htmlFor="lastname" className="block mb-2 text-md font-medium text-gray-900">Last name</label>
                    <input type="text" name="lastname" onChange={handleChange} value={formData.lastname} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-2">
                    <label htmlFor="email" className="block mb-2 text-md font-medium text-gray-900">Email Id</label>
                    <input type="email" name="email" onChange={handleChange} value={formData.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-2">
                    <label htmlFor="phone" className="block mb-2 text-md font-medium text-gray-900">Contact No.</label>
                    <input type="tel" name="phone" onChange={handleChange} value={formData.phone} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-2">
                    <label htmlFor="company_name" className="block mb-2 text-md font-medium text-gray-900">Company name</label>
                    <input type="text" name="company_name" onChange={handleChange} value={formData.company_name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-2">
                    <label htmlFor="company_website" className="block mb-2 text-md font-medium text-gray-900">Company website</label>
                    <input type="text" name="company_website" onChange={handleChange} value={formData.company_website} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-2">
                    <label htmlFor="partnership_type" className="block mb-2 text-[.85rem] font-medium text-gray-900">How are you looking to work with The Entrepreneurship Network?
                    </label>
                    <div className="mb-3">
                        <label htmlFor="investor" className="mb-2 text-[.85rem] font-medium text-gray-900 flex gap-2">
                            <input type="radio" name="partnership_type" onChange={handleChange} value={formData.partnership_type.investor} required />
                            <div>I am an investor interested in investing in startup</div>
                        </label>
                        <label htmlFor="corporate" className="mb-2 text-[.85rem] font-medium text-gray-900 flex gap-2">
                            <input type="radio" name="partnership_type" onChange={handleChange} value={formData.partnership_type.corporate} required />
                            <div>I am a corporate interested in collaborating with startups</div>
                        </label>
                        <label htmlFor="government" className="mb-2 text-[.8rem] font-medium text-gray-900 flex gap-2">
                            <input type="radio" name="partnership_type" onChange={handleChange} value={formData.partnership_type.government} required />
                            <div>I am a government entity interested in funding pilots with startups</div>
                        </label>
                        <label htmlFor="university" className="mb-2 text-[.85rem] font-medium text-gray-900 flex gap-2">
                            <input type="radio" name="partnership_type" onChange={handleChange} value={formData.partnership_type.university} required />
                            <div>I am a university interested in job opportunities with startups</div>
                        </label>
                        <label htmlFor="service_provider" className="mb-2 text-[.8rem] font-medium text-gray-900 flex gap-2">
                            <input type="radio" name="partnership_type" onChange={handleChange} value={formData.partnership_type.service_provider} required />
                            <div>I am a service provider interested in providing services to startups</div>
                        </label>
                        <label htmlFor="tech_startup" className="mb-2 text-[.85rem] font-medium text-gray-900 flex gap-2">
                            <input type="radio" name="partnership_type" onChange={handleChange} value={formData.partnership_type.tech_startup} required />
                            <div>I am a tech startup interested in applying to your programs</div>
                        </label>
                        <label htmlFor="academic_institute" className="mb-2 text-[.85rem] font-medium text-gray-900 flex gap-2">
                            <input type="radio" name="partnership_type" onChange={handleChange} value={formData.partnership_type.academic_institute} required />
                            <div>I am an academic institute interested in working with startups</div>
                        </label>
                    </div>
                </div>
                
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg min-w sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
        </>
    );
}

export default Investor_Form;
