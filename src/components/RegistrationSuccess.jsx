import { Link } from 'react-router-dom';

export default function RegisterSuccess() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-green-600 text-white rounded-lg shadow-xl p-8 text-center">
        <h2 className="text-3xl font-bold">Registration Successful!</h2>
        <p className="mb-6 text-lg">Click below to login.</p>
        <Link
          to="/login"
          className="inline-block bg-white text-green-600 font-semibold rounded-md px-6 py-3 hover:bg-green-500 hover:text-white transition duration-300 shadow-md"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
