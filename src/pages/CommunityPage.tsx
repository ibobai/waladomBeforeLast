import React from 'react';
import { useTranslation } from 'react-i18next';
import MainLayout from '../layouts/MainLayout';
import { Users, MessageCircle, Share2 } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Users className="w-12 h-12 text-waladom-green" />,
      title: 'Connect with Members',
      description: 'Find and connect with Sudanese community members worldwide.'
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-waladom-green" />,
      title: 'Discussion Forums',
      description: 'Engage in meaningful discussions about culture, events, and shared experiences.'
    },
    {
      icon: <Share2 className="w-12 h-12 text-waladom-green" />,
      title: 'Resource Sharing',
      description: 'Share and access community resources, job opportunities, and more.'
    }
  ];

  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Community</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our vibrant community of Sudanese individuals and organizations worldwide.
              Connect, share, and grow together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-4 bg-waladom-green text-white rounded-full text-lg font-medium hover:bg-waladom-green-dark transition-colors">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CommunityPage;