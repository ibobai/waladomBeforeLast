import React from 'react';
import { useTranslation } from 'react-i18next';
import MainLayout from '../layouts/MainLayout';
import { Calendar, MapPin, Clock } from 'lucide-react';

const EventsPage: React.FC = () => {
  const { t } = useTranslation();

  const events = [
    {
      title: 'Sudanese Cultural Festival',
      date: '2024-04-15',
      time: '14:00',
      location: 'Central Park, New York',
      description: 'Annual celebration of Sudanese culture featuring traditional music, dance, and cuisine.',
      image: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?auto=format&fit=crop&q=80'
    },
    {
      title: 'Community Workshop',
      date: '2024-04-22',
      time: '10:00',
      location: 'Community Center, London',
      description: 'Educational workshop focusing on preserving Sudanese traditions in the diaspora.',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <MainLayout>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Upcoming Events</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-waladom-green" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-waladom-green" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-waladom-green" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">{event.description}</p>
                  <button className="mt-6 px-4 py-2 bg-waladom-green text-white rounded-full hover:bg-waladom-green-dark transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default EventsPage;