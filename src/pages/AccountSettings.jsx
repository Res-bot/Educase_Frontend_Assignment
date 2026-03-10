import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import myimg from '../assets/dp2a.jpg'

function AccountSettings() {

  const [user, setUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {

    const data = localStorage.getItem("data");

    if (data) {

      setUser(JSON.parse(data));

    }

  }, []);

  const handleLogout = ()=>{
    localStorage.removeItem('data');
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center px-4 py-8">

      <div className="w-full bg-white shadow-md rounded-lg p-6 text-black">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">
            Account Settings
          </h2>
          <button 
            onClick={handleLogout}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-200"
          >
            Logout
          </button>
        </div>

        

        <div className="flex items-center gap-4 mb-4">

          <img
            src= {myimg}
            alt="profile"
            className="w-14 h-14 rounded-full"
          />

          <div>
            <h3 className="font-semibold">
              {user.name}
            </h3>

            <p className="text-gray-500 text-sm">
              {user.email}
            </p>
          </div>

        </div>

        <p className="text-gray-600 text-sm border-t pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
        </p>

      </div>
    </div>
  );
}

export default AccountSettings;