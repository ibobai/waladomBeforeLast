import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { User, UserRole } from '../types/user';
import { useToast } from '../hooks/useToast';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (registerData: RegisterData) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
  updateProfile: (data: Partial<User>) => Promise<void>;
}

interface RegisterData {
  email: string;
  password: string;
  name: string;
  country: string;
  job: string;
  dateOfBirth: string;
  placeOfBirth: string;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const { t } = useTranslation();
  const toast = useToast();

  const generateCardId = () => {
    return 'WLD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  const getRandomRole = (): UserRole => {
    const roles: UserRole[] = ['F', 'X', 'Y', 'Z'];
    return roles[Math.floor(Math.random() * roles.length)];
  };

  const login = async (email: string, password: string) => {
    try {
      if (email === 'admin@admin.admin' && password === 'admin111995') {
        const adminData: User = {
          email,
          name: 'Admin',
          cardId: 'WLD-ADMIN',
          role: 'A',
          country: 'Global',
          job: 'System Administrator',
          dateOfBirth: '1990-01-01',
          placeOfBirth: 'Admin City',
          joinedDate: new Date().toISOString(),
          isAdmin: true
        };
        setUser(adminData);
        localStorage.setItem('user', JSON.stringify(adminData));
        toast.success(t('auth.loginSuccess'));
      } else if ((email === 'demo@waladom.org' && password === 'demo123') || 
          (email === 'ibo@ibo.ibo' && password === 'ibo111995')) {
        const userData: User = {
          email,
          name: email === 'ibo@ibo.ibo' ? 'Ibrahim' : 'Demo User',
          cardId: generateCardId(),
          role: getRandomRole(),
          country: 'Sudan',
          job: 'Software Developer',
          dateOfBirth: '1995-01-01',
          placeOfBirth: 'Khartoum',
          joinedDate: new Date().toISOString(),
          isAdmin: false
        };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        toast.success(t('auth.loginSuccess'));
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      toast.error(t('auth.loginError'));
      throw error;
    }
  };

  const register = async (registerData: RegisterData) => {
    try {
      const userData: User = {
        ...registerData,
        cardId: generateCardId(),
        role: getRandomRole(),
        joinedDate: new Date().toISOString(),
        isAdmin: false
      };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      toast.success(t('auth.registerSuccess'));
    } catch (error) {
      toast.error(t('auth.registerError'));
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast.success(t('auth.logoutSuccess'));
  };

  const updateProfile = async (data: Partial<User>) => {
    try {
      if (!user) throw new Error('No user logged in');
      const updatedUser = { ...user, ...data };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      toast.success(t('profile.updateSuccess'));
    } catch (error) {
      toast.error(t('profile.updateError'));
      throw error;
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      register, 
      logout, 
      isAuthenticated: !!user,
      isAdmin: user?.isAdmin || false,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};