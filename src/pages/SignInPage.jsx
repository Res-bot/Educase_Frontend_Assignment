import { useNavigate } from "react-router-dom";
import { useState } from "react";
function SignInPage() {
    const [formData, setFormData] = useState({ email: '', password: '' })
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const store_data = localStorage.getItem('data')

        if (store_data) {
            const savedUser = JSON.parse(store_data);

            if (formData.email === savedUser.email && formData.password === savedUser.password) {
                alert('Login Successful!')
                navigate('/my-account')
            } else {
                alert('Invalid credentials...')
            }
        } else {
            alert('No user account found. Please register at first')
        }
    }
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
            <div className="w-full bg-white p-12 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-2 text-black">SignIn to your PopX Account</h1>
                <p className="text-gray-500 mb-6">Lorem ipsum, dolor sit amet <br></br> consectetur adipisicing elit.</p>
                <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                        <label className="text-purple-600 text-sm font-semibold">Email Address</label>
                        <input type="email" name="email" onChange={handleChange} className="w-full border rounded-md p-2 mt-1 text-black"/>
                    </div>

                    <div>
                        <label className="text-purple-600 text-sm font-semibold">
                            Password
                        </label>

                        <input type="password" name="password" onChange={handleChange} className="w-full border rounded-md p-2 mt-1 text-black"/>
                    </div>

                    <button type="submit" className="w-full bg-purple-600 text-white-300 py-3 rounded-md font-semibold">
                        Login
                    </button>

                </form>
            </div>
        </div>
    )
}

export default SignInPage;