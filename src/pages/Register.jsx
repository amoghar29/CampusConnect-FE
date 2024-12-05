import { useState } from "react";
import axios from "axios";
import RegistrationSuccess from "../components/registration/RegistrationSuccess";
import RegistrationFailure from "../components/registration/RegistrationFailure";
import RegistrationForm from "../components/registration/RegistrationForm";
import GradientBackground from "../components/common/GradientBackground";

const BACKEND_URL = "https://campusconnect-be.onrender.com";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [clubName, setClubName] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function register(e) {
    e.preventDefault();
    setLoading(true);
    setRegistrationSuccess(false);
    setRegistrationError(false);

    try {
      const response = await axios.post(
        `${BACKEND_URL}/admin/signup`,
        { email, password, clubName },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        setRegistrationSuccess(true);
      }
    } catch (error) {
      setRegistrationError(true);
    } finally {
      setLoading(false);
    }
  }

  const handleTryAgain = () => {
    setEmail("");
    setPassword("");
    setClubName("");
    setRegistrationSuccess(false);
    setRegistrationError(false);
  };

  // Loading Screen
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-700">
            Processing your registration...
          </p>
        </div>
      </div>
    );
  }

  // Success Screen
  if (registrationSuccess) {
    return <RegistrationSuccess />;
  }

  // Failure Screen
  if (registrationError) {
    return (
        <RegistrationFailure onTryAgain={handleTryAgain} />
    );
  }

  // Default Registration Form
  return (
    <div className="bg-gray-100 text-gray-900 flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
      <div className="relative mt-12 w-full max-w-lg sm:mt-10">
        <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
        <div className="mx-5 border border-gray-300 shadow-lg rounded-lg bg-white p-8">
          <h3 className="text-2xl font-semibold leading-7 tracking-tight text-center text-black">
            Club Registration
          </h3>
          <p className="mt-2 text-lg font-medium text-gray-600 text-center">
            Create an account to get started.
          </p>
          <RegistrationForm
            email={email}
            password={password}
            clubName={clubName}
            setEmail={setEmail}
            setPassword={setPassword}
            setClubName={setClubName}
            register={register}
          />
        </div>
      </div>
    </div>
  );
}
