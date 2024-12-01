import { useState } from 'react';
import {  Send, Smile, Frown, Meh } from 'lucide-react';

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    'Event Organization',
    'Website Experience',
    'Club Management',
    'Technical Issues',
    'Other'
  ];

  const moods = [
    { icon: Frown, label: 'Unsatisfied', value: 1 },
    { icon: Meh, label: 'Neutral', value: 3 },
    { icon: Smile, label: 'Satisfied', value: 5 }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ rating, feedback, selectedCategory });
    // Handle submission logic here
  };

  return (
    <div className="bg-white min-h-screen">

      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Gradient Background */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48">
          <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-purple-600 to-transparent" />
          
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                We Value Your Feedback
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Help us improve your campus experience
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Mood Selection */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">How was your experience?</label>
                <div className="flex justify-center gap-8">
                  {moods.map(({ icon: Icon, label, value }) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => setRating(value)}
                      className={`flex flex-col items-center p-4 rounded-lg transition-all ${
                        rating === value
                          ? 'bg-indigo-50 text-indigo-600 ring-2 ring-indigo-600'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="h-8 w-8 mb-2" />
                      <span className="text-sm font-medium">{label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Selection */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  What would you like to give feedback about?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedCategory === category
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Feedback Text */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  Tell us more about your experience
                </label>
                <textarea
                  rows={4}
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full rounded-lg border border-gray-400 focus:border-purple-600 px-4 py-2.5 focus:ring focus:ring-purple-300/30"
                  placeholder="Share your thoughts with us..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition duration-300 transform hover:scale-105"
                >
                  Submit Feedback
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </div>
    </div>
  );
}