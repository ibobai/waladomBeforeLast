import React from 'react';
import { useTranslation } from 'react-i18next';
import MainLayout from '../layouts/MainLayout';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">Contact Us</h1>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <Mail className="w-8 h-8 text-waladom-green mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">contact@waladom.org</p>
                </div>
                <div className="text-center">
                  <Phone className="w-8 h-8 text-waladom-green mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-waladom-green mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gray-600">123 Community St, NY 10001</p>
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-waladom-green focus:border-waladom-green"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-waladom-green focus:border-waladom-green"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-waladom-green focus:border-waladom-green"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-waladom-green focus:border-waladom-green"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-waladom-green text-white rounded-md hover:bg-waladom-green-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactPage;