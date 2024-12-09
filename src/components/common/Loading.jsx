import GradientBackground from "./GradientBackground";

export default function Loading({ message, loading }) {
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
      <GradientBackground position="top"/>
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-700">{message}</p>
        </div>
      </div>
    );
  }
  return null; // Return null if not loading
}
