import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, AlertCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isResetMode, setIsResetMode] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/my-role');
    } catch (err) {
      setError(t('auth.invalidCredentials'));
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement password reset logic here
    console.log('Reset password for:', email);
  };

  if (isResetMode) {
    return (
      <form onSubmit={handleResetPassword} className="space-y-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold">{t('auth.resetPassword')}</h3>
          <p className="text-gray-600 mt-2">{t('auth.resetInstructions')}</p>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            {t('auth.email')}
          </label>
          <div className="mt-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-waladom-green focus:border-waladom-green"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-waladom-green hover:bg-waladom-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-waladom-green"
          >
            {t('auth.resetPassword')}
          </button>
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={() => setIsResetMode(false)}
            className="text-sm text-waladom-green hover:text-waladom-green-dark"
          >
            Back to login
          </button>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          <span>{error}</span>
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          {t('auth.email')}
        </label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-waladom-green focus:border-waladom-green"
            placeholder="ibo@ibo.ibo"
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          {t('auth.password')}
        </label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-waladom-green focus:border-waladom-green"
          />
        </div>
      </div>

      <div className="flex items-center justify-end">
        <button
          type="button"
          onClick={() => setIsResetMode(true)}
          className="text-sm text-waladom-green hover:text-waladom-green-dark"
        >
          {t('auth.forgotPassword')}
        </button>
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-waladom-green hover:bg-waladom-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-waladom-green"
        >
          {t('auth.login')}
        </button>
      </div>

      <div className="text-sm text-center">
        <span className="text-gray-600">{t('auth.noAccount')} </span>
        <Link to="/register" className="text-waladom-green hover:text-waladom-green-dark font-medium">
          {t('auth.registerNow')}
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;