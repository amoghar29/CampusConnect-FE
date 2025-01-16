import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../common/Header";
export function SuccessCard({ title, message, buttonValue, redirect,onclick }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90 backdrop-blur-sm">
      <Header />
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-16 max-w-lg w-full text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="h-16 w-16 text-green-500" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{message}</p>
        <Link
          to={redirect}
          // onClick={onclick}
          className="w-full bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-500 transition duration-300 transform hover:scale-105"
        >
          {buttonValue}
        </Link>
      </div>
    </div>
  );
}
