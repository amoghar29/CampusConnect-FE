import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export function SuccessCard({ title, message, buttonValue, redirect }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="h-16 w-16 text-green-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{message}</p>
        <Link
          to={redirect}
          className="w-full bg-indigo-600 text-white py-2 px-32 rounded-lg hover:bg-indigo-500 transition duration-300 transform hover:scale-105"
        >
          {buttonValue}
        </Link>
      </div>
    </div>
  );
}
