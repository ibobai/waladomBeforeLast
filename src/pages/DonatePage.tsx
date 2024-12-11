import React from 'react';
import { useTranslation } from 'react-i18next';
import MainLayout from '../layouts/MainLayout';
import { Heart, Book, Home, Utensils } from 'lucide-react';

const DonatePage: React.FC = () => {
  const { t } = useTranslation();

  const causes = [
    {
      icon: <Book className="w-12 h-12 text-waladom-green" />,
      title: 'Education Support',
      description: 'Help provide educational resources and scholarships to Sudanese students.',
      goal: 50000,
      raised: 32000
    },
    {
      icon: <Home className="w-12 h-12 text-waladom-green" />,
      title: 'Community Centers',
      description: 'Support the establishment of Sudanese community centers worldwide.',
      goal: 100000,
      raised: 75000
    },
    {
      icon: <Utensils className="w-12 h-12 text-waladom-green" />,
      title: 'Food Aid',
      description: 'Provide food assistance to families in need within our community.',
      goal: 25000,
      raised: 18000
    }
  ];

  return (
    <MainLayout>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <Heart className="w-16 h-16 text-waladom-green mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Support Our Causes</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your donation helps us strengthen the Sudanese community and support those in need.
              Every contribution makes a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {causes.map((cause, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-center mb-4">{cause.icon}</div>
                <h3 className="text-xl font-semibold text-center mb-4">{cause.title}</h3>
                <p className="text-gray-600 mb-6">{cause.description}</p>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Raised: ${cause.raised.toLocaleString()}</span>
                    <span>Goal: ${cause.goal.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-waladom-green rounded-full h-2"
                      style={{ width: `${(cause.raised / cause.goal) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <button className="w-full px-4 py-2 bg-waladom-green text-white rounded-full hover:bg-waladom-green-dark transition-colors">
                  Donate Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DonatePage;