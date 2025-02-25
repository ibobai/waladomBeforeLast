import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NewsCardProps {
  title: string;
  description: string;
  date: string;
  image: string;
  link: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, description, date, image, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <Calendar className="w-4 h-4 mr-2" />
          {new Date(date).toLocaleDateString()}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <Link
          to={link}
          className="inline-flex items-center text-waladom-green hover:text-waladom-green-dark"
        >
          Read more
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;