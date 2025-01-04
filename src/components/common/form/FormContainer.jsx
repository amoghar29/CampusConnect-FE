import GradientBackground from "../common/GradientBackground";

export default function FormContainer({ title, subtitle, children }) {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative isolate px-6 pt-8 lg:px-8">
        <GradientBackground position="top" />

        <div className="mx-auto max-w-3xl py-8 sm:py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h1>
            <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
