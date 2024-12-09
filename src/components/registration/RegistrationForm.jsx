import PropTypes from "prop-types";

export default function RegistrationForm({
  email,
  password,
  clubName,
  setEmail,
  setPassword,
  setClubName,
  register,
}) {
  return (
    <form onSubmit={register}>
      <div className="mt-4">
        <div className="group relative rounded-lg border border-gray-400 focus-within:border-purple-600 px-4 pb-2 pt-3 duration-200 focus-within:ring focus-within:ring-purple-600/30">
          <label
            className="text-sm font-medium text-gray-500 group-focus-within:text-gray-800"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full border-0 bg-transparent p-0 text-base placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:leading-7 text-gray-800"
            aria-label="Email"
          />
        </div>
      </div>

      <div className="mt-4">
        <div className="group relative rounded-lg border border-gray-400 focus-within:border-purple-600 px-4 pb-2 pt-3 duration-200 focus-within:ring focus-within:ring-purple-600/30">
          <label
            className="text-sm font-medium text-gray-500 group-focus-within:text-gray-800"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full border-0 bg-transparent p-0 text-base placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:leading-7 text-gray-800"
            aria-label="Password"
          />
        </div>
      </div>

      <div className="mt-4">
        <div className="group relative rounded-lg border border-gray-400 focus-within:border-purple-600 px-4 pb-2 pt-3 duration-200 focus-within:ring focus-within:ring-purple-600/30">
          <label
            className="text-sm font-medium text-gray-500 group-focus-within:text-gray-800"
            htmlFor="clubName"
          >
            Club Name
          </label>
          <input
            type="text"
            id="clubName"
            name="clubName"
            value={clubName}
            placeholder="Enter your club name"
            autoComplete="off"
            onChange={(e) => setClubName(e.target.value)}
            className="block w-full border-0 bg-transparent p-0 text-base placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:leading-7 text-gray-800"
            aria-label="Club Name"
          />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-end gap-x-2">
        <button
          className="block w-full border-0 font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300 inline-flex items-center justify-center rounded-md text-sm h-10 px-4 py-2"
          type="submit"
        >
          Register
        </button>
      </div>
    </form>
  );
}

RegistrationForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  clubName: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  setClubName: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};
