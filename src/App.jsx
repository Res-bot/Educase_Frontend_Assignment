import { BrowserRouter as Br, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import RegisterForm from "./pages/RegisterForm";
import AccountSettings from "./pages/AccountSettings";
import ProtectedRoute from "./pages/ProtectedRoute";
function App() {

  return (
    <>
    <Br>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<SignInPage />} />
      <Route path="/my-account" element={<ProtectedRoute><AccountSettings /></ProtectedRoute>} />
    </Routes>
    </Br>
     
    </>
  )
}

export default App
