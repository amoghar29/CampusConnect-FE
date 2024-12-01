import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const BACKEND_URL = "http://localhost:4000";
export default function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  async function login(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BACKEND_URL}/login`,
        { email, password },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        navigate('/home');
      }
      console.log(response.data);
    } catch (error) {
      console.error('Login error:', error);
    }
  }
  return (
    <div className="bg-gray-100 text-gray-900 flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
      <div className="relative mt-12 w-full max-w-lg sm:mt-10">
        <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
        <div className="mx-5 border border-gray-300 shadow-lg rounded-lg bg-white p-6">
          <div className="flex flex-col text-center">
            <h1 className="text-2xl font-semibold leading-7 tracking-tight text-black">Club Login</h1>
            <p className="mt-2 text-lg font-medium text-gray-600">
              Welcome back, enter your credentials to continue.
            </p>
          </div>
          <div className="pt-4">
            <form onSubmit={login}>
              <div>
                <div className="group relative rounded-lg border border-gray-400 focus-within:border-purple-600 px-4 pb-2 pt-3 duration-200 focus-within:ring focus-within:ring-purple-300/30">
                  <div className="flex justify-between">
                    <label className="text-xs font-medium text-muted-foreground group-focus-within:text-gray-800 text-gray-500">
                      Username
                    </label>
                  </div>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                    className="block w-full border-0 bg-transparent p-0 text-base placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:leading-7 text-gray-800"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="group relative rounded-lg border border-gray-400 focus-within:border-purple-600 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-purple-300/30">
                  <div className="flex justify-between">
                    <label className="text-xs font-medium text-muted-foreground group-focus-within:text-gray-800 text-gray-500">
                      Password
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full border-0 bg-transparent p-0 text-base placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:leading-7 text-gray-800"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                {/* Uncomment if you want to add a forgot password link */}
                {/* <Link className="text-sm font-medium text-gray-600 underline" to="/forgot-password">Forgot password?</Link> */}
              </div>
              <div className="mt-4 flex flex-col items-center justify-end gap-y-2 sm:flex-row sm:gap-x-2">
                <button
                  className="font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition duration-300 inline-flex items-center justify-center rounded-md text-sm h-10 px-4 py-2"
                  type="submit"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
