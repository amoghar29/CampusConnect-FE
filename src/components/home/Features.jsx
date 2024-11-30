import { Calendar,Users,Trophy } from "lucide-react";
function FeaturesCard({ feature, index }) {
  return (
    <div key={index} className="flex flex-col items-center text-center max-w-sm">
      <div className="rounded-lg bg-gray-50 p-2 ring-1 ring-gray-200/50">
        {feature.icon}
      </div>
      <dt className="mt-4 font-semibold text-gray-900">
        {feature.title}
      </dt>
      <dd className="mt-2 leading-7 text-gray-600">
        {feature.description}
      </dd>
    </div>
  );
}

export default function Features() {
  const features = [
    {
      icon: <Calendar className="h-6 w-6 text-indigo-600" />,
      title: 'Event Discovery',
      description:
        'Stay updated with all campus events, workshops, and activities happening across different clubs.',
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      title: 'Club Community',
      description:
        'Connect with various college clubs, join communities that match your interests, and engage with like-minded peers.',
    },
    {
      icon: <Trophy className="h-6 w-6 text-indigo-600" />,
      title: 'Achievement Showcase',
      description:
        'Showcase your participation, achievements, and contributions to different club activities.',
    },
    
  ];

  return (
    <div className="py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">
          Everything You Need
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          All Your Campus Activities in One Place
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3 lg:gap-x-12 justify-items-center">
          {features.map((feature, index) => (
            <FeaturesCard key={index} feature={feature} index={index} />
          ))}
        </dl>
      </div>
    </div>
  </div>
  );
} 