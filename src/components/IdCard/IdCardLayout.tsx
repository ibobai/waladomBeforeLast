import React from 'react';
import { useTranslation } from 'react-i18next';
import { User, Mail, CreditCard, Calendar, Shield } from 'lucide-react';
import { cn } from '../../utils/cn';
import QRCode from '../common/QRCode';
import UserAvatar from '../common/UserAvatar';
import { roleColors, type User as UserType } from '../../types/user';

interface IdCardLayoutProps {
  user: UserType;
  className?: string;
}

const IdCardLayout: React.FC<IdCardLayoutProps> = ({ user, className }) => {
  const { t } = useTranslation();
  const joinedDate = new Date().toLocaleDateString();

  // Create QR code data
  const qrData = JSON.stringify({
    name: user.name,
    email: user.email,
    cardId: user.cardId,
    role: user.role,
    joinedDate
  });

  return (
    <div 
      id="waladom-id-card"
      className={cn(
        "bg-white rounded-xl shadow-lg p-6",
        "border-2 border-waladom-green relative overflow-hidden",
        "w-[400px] h-[250px]", // Fixed dimensions
        className
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-waladom-green to-waladom-green-light" />
      </div>

      {/* Card Content */}
      <div className="relative z-10 flex h-full">
        {/* Left Column - Photo and Role */}
        <div className="flex flex-col items-center justify-between w-1/3 pr-4 border-r border-gray-200">
          <div className="text-center">
            <UserAvatar size="large" />
            <div className={cn(
              "mt-2 px-3 py-1 rounded-full text-sm font-medium text-white flex items-center justify-center space-x-1",
              roleColors[user.role]
            )}>
              <Shield className="w-4 h-4" />
              <span>Role {user.role}</span>
            </div>
          </div>
          <QRCode value={qrData} size={80} />
        </div>

        {/* Right Column - Info */}
        <div className="flex-1 pl-4 space-y-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xl font-bold text-waladom-green">Waladom</span>
            <span className="text-sm text-gray-500">{new Date().getFullYear()}</span>
          </div>

          <div className="space-y-2">
            <InfoRow icon={<User className="w-4 h-4" />} label={t('idCard.memberName')} value={user.name} />
            <InfoRow icon={<Mail className="w-4 h-4" />} label={t('idCard.memberEmail')} value={user.email} />
            <InfoRow icon={<CreditCard className="w-4 h-4" />} label={t('idCard.memberId')} value={user.cardId} />
            <InfoRow icon={<Calendar className="w-4 h-4" />} label={t('idCard.joinedDate')} value={joinedDate} />
          </div>

          <div className="text-xs text-gray-500 mt-auto">
            {t('idCard.validMember')} • {t('idCard.scanQr')}
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoRow: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex flex-col">
    <div className="flex items-center text-waladom-green space-x-1">
      {icon}
      <span className="text-xs text-gray-500">{label}</span>
    </div>
    <div className="text-sm font-medium ml-5">{value}</div>
  </div>
);

export default IdCardLayout;