import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import { NewsCard } from '../Home';
import { QuickAction } from '../Home';

const UserHome: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  const news = [
    {
      title: 'Community Center Opening in London',
      description: 'We are excited to announce the opening of our new community center in London, providing a space for cultural events, education, and community gatherings.',
      date: '2024-03-15',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80',
      link: '/news/community-center-london'
    },
    {
      title: 'Educational Support Program Launch',
      description: 'Introducing our new educational support program aimed at helping Sudanese students access quality education and resources.',
      date: '2024-03-10',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80',
      link: '/news/education-program'
    },
    {
      title: 'Cultural Festival Success',
      description: 'Thank you to everyone who participated in our annual cultural festival, celebrating Sudanese heritage and traditions.',
      date: '2024-03-05',
      image: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?auto=format&fit=crop&q=80',
      link: '/news/cultural-festival'
    }
  ];

  const quickActions = [
    {
      title: "View ID Card",
      description: "Access your digital membership card",
      link: "/id-card"
    },
    {
      title: "Upcoming Events",
      description: "Check out our community events",
      link: "/events"
    },
    {
      title: "Community Support",
      description: "Connect with other members",
      link: "/community"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-waladom-green to-waladom-green-dark rounded-lg p-8 mb-12 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
        <p className="text-lg opacity-90">Stay updated with the latest news and events from our community.</p>
      </div>

      {/* News Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickActions.map((action, index) => (
          <QuickAction key={index} {...action} />
        ))}
      </div>
    </div>
  );
};

export default UserHome;