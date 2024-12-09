import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

export function FailureCard({
  title,
  message,
  buttonValue,
  redirect,
  handleTryAgain,
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <AlertTriangle className="h-16 w-16 text-red-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{message}</p>
        <Link
          to={redirect}
          className="w-full bg-red-600 text-white py-3 px-36 rounded-lg hover:bg-red-500 transition duration-300 transform hover:scale-105"
          onClick={handleTryAgain}
        >
          {buttonValue}
        </Link>
      </div>
    </div>
  );
}
