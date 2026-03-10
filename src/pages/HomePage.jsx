import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="min-h-screen w-full flex items-end sm:items-center justify-center bg-gray-100">
             
            <div className="w-full lg:max-w-md min-h-screen sm:min-h-fit bg-white p-8 sm:rounded-lg shadow-md flex flex-col justify-center sm:block">
                
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome to PopX</h1>
                
                <p className="text-gray-500 mb-6">
                    Lorem ipsum, dolor sit amet <br className="hidden sm:block" /> consectetur adipisicing elit.
                </p>

                <div className="space-y-3">
                    <Link 
                        to='/register' 
                        className="block w-full text-center bg-purple-600 !text-white py-3 rounded-md font-medium hover:bg-purple-700 transition"
                    >
                        Create Account
                    </Link>
                    
                    <Link 
                        to='/login' 
                        className="block w-full text-center bg-purple-200 !text-purple-800 py-3 rounded-md font-medium hover:bg-purple-300 transition"
                    >
                        Already Registered? Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;