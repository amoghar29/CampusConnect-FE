import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function RegistrationFailure({ onTryAgain }) {
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-red-600 text-white rounded-lg shadow-2xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Registration Failed!</h2>
        <p className="mb-6 text-lg">Oops! There was an issue with your registration. Please try again.</p>
        <Link
          onClick={onTryAgain}
          to="/Register"
          className="inline-block bg-white text-red-600 font-semibold rounded-md px-6 py-3 hover:bg-red-500 hover:text-white transition duration-300 shadow-md"
        >
          Try Again
        </Link>
      </div>
    </div>
  );
}

RegistrationFailure.propTypes = {
  onTryAgain: PropTypes.func.isRequired,
};
