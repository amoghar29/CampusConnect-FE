import { useState } from 'react';
import axios from 'axios';
import RegistrationSuccess from '../components/registrationComponents/RegistrationSuccess';
import RegistrationFailure from '../components/registrationComponents/RegistrationFailure';
import RegistrationForm from '../components/registrationComponents/RegistrationForm';
const BACKEND_URL = "http://localhost:4000";
export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clubName, setClubName] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  console.log('Backend URL:', BACKEND_URL);

  async function register(e) {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      const response = await axios.post(
        `${BACKEND_URL}/register`,
        { email, password, clubName },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      if (response.status === 201) {
        setRegistrationSuccess(true);
        setRegistrationError(false);
      }
    } catch (error) {
      console.error(
        'Registration error:',
        error.response?.data || error.message
      );
      setRegistrationError(true);
      setRegistrationSuccess(false);
    }
  }

  const handleTryAgain = () => {
    setEmail('');
    setPassword('');
    setClubName('');
    setRegistrationSuccess(false);
    setRegistrationError(false);
    setIsSubmitted(false);
  };

  return (
    <>
      {isSubmitted ? (
        <>
          {registrationSuccess && <RegistrationSuccess />}
          {registrationError && (
            <RegistrationFailure onTryAgain={handleTryAgain} />
          )}
        </>
      ) : (
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
      )}
    </>
  );
}
