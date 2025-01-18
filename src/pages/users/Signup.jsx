import { useState } from "react";
import axios from "axios";
import GradientBackground from "../../components/common/GradientBackground";
import Loading from "../../components/common/Loading";
import { SuccessCard } from "../../components/common/SuccessCard";
import { FailureCard } from "../../components/common/FailureCard";
import FormInput from "../../components/form/FormInput";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function signup(e) {
    e.preventDefault();
    setLoading(true);
    setRegistrationSuccess(false);
    setRegistrationError(false);

    try {
      const response = await axios.post(
        `${BACKEND_URL}/auth/signup`,
        { email, password, confirmPassword },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response.status === 201) {
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
    setConfirmPassword("");
    setRegistrationSuccess(false);
    setRegistrationError(false);
  };

  if (loading) {
    return (
      <Loading message={"Processing your registration..."} loading={loading} />
    );
  }

  if (registrationSuccess) {
    return (
      <SuccessCard
        title="Registration Successful!"
        message="Click below to signin."
        buttonValue={"signin"}
        redirect={"/signin"}
      />
    );
  }

  if (registrationError) {
    return (
      <FailureCard
        title={"Registration Failed!"}
        message={
          "Oops! There was an issue with your registration. Please try again."
        }
        buttonValue={"Try Again"}
        redirect={"/signup"}
        handleTryAgain={handleTryAgain}
      />
    );
  }

  return (
    <div className=" text-gray-900 flex min-h-screen flex-col items-center pt-16  sm:pt-6">
      <GradientBackground position="top" />
      <div className="relative mt-12 w-full max-w-lg sm:mt-10">
        <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
        <div className="mx-5 border border-gray-300 shadow-lg rounded-lg bg-white p-8">
          <h3 className="text-2xl font-semibold leading-7 tracking-tight text-center text-black">
            Club Registration
          </h3>
          <p className="mt-2 text-lg font-medium text-gray-600 text-center">
            Create an account to get started.
          </p>
          <form onSubmit={signup}>
            <FormInput
              label="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <FormInput
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FormInput
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="mt-4 w-full bg-indigo-600 text-white rounded-lg py-2"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
