import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', password: '', company: '', agency: "yes" })
    const [error, setError] = useState({});

    const navigate = useNavigate();

    const validate = (name, value) => {
        let ErrorMsg = '';

        switch (name) {
            case "name":
                if (value.length > 0 && value.length < 3) {
                    ErrorMsg = 'The name should be greater than three characters'
                }
                break;
            case "email": 
                const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (!EmailRegex.test(value)) {
                    ErrorMsg = "Please enter a valid email"
                }
                break;
            case "password":
                if (value.length > 0 && value.length < 8) {
                    ErrorMsg = 'The password should have at least 8 characters'
                }
                break;
            case "phone":
                if (value.length > 0 && value.length < 10) {
                    ErrorMsg = 'Phone number should have 10 digits'
                }
                break;
        }

        setError((p) => ({ ...p, [name]: ErrorMsg }))
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
        validate(name, value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(error).every((x) => x === "") && formData.name && formData.phone && formData.email && formData.password && formData.company) {
            localStorage.setItem('data', JSON.stringify(formData))
            alert('Registered Successfully')
            navigate('/login')
            console.log('Stored data: ', formData);
        }
    }
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
            <div className="w-full bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Create your PopX Account</h1>
                <p>Lorem ipsum, dolor sit amet <br></br> consectetur adipisicing elit.</p>
                <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                        <label className="text-purple-600 text-sm font-semibold">
                            Full Name*
                        </label>
                        <input type="text" name="name" onChange={handleChange} className="w-full border rounded-md p-2 mt-1 focus:outline-purple-500 text-black"
                        />
                        {error.name && (
                            <p className="text-red-500 text-sm">{error.name}</p>
                        )}
                    </div>

                    <div>
                        <label className="text-purple-600 text-sm font-semibold">
                            Phone Number*
                        </label>
                        <input type="text" name="phone" onChange={handleChange}
                            className="w-full border rounded-md p-2 mt-1 focus:outline-purple-500 text-black"
                        />
                        {error.phone && (
                            <p className="text-red-500 text-sm">{error.phone}</p>
                        )}
                    </div>

                    <div>
                        <label className="text-purple-600 text-sm font-semibold">
                            Email Address*
                        </label>
                        <input type="email" name="email" onChange={handleChange}
                            className="w-full border rounded-md p-2 mt-1 focus:outline-purple-500 text-black"
                        />
                        {error.email && (
                            <p className="text-red-500 text-sm">{error.email}</p>
                        )}
                    </div>

                    <div>
                        <label className="text-purple-600 text-sm font-semibold">
                            Password*
                        </label>
                        <input type="password" name="password" onChange={handleChange}
                            className="w-full border rounded-md p-2 mt-1 focus:outline-purple-500 text-black"
                        />
                        {error.password && (
                            <p className="text-red-500 text-sm">{error.password}</p>
                        )}
                    </div>

                    <div>
                        <label className="text-purple-600 text-sm font-semibold">
                            Company Name
                        </label>
                        <input type="text" name="company" onChange={handleChange}
                            className="w-full border rounded-md p-2 mt-1 focus:outline-purple-500 text-black"
                        />
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2 text-black">
                            Are you an Agency?*
                        </p>

                        <label className="mr-4 text-black text-sm">
                            <input type="radio" name="agency" value="yes" defaultChecked className="mr-1 text-black text-sm" />
                            Yes
                        </label>

                        <label className="mr-4 text-black text-sm">
                            <input type="radio" name="agency" value="no" className="mr-1 text-black text-sm"
                            />
                            No
                        </label>
                    </div>

                    <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold hover:bg-purple-700"
                    >Create Account</button>

                </form>
            </div>
        </div>
    )
}

export default RegisterForm;