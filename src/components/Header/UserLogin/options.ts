import { BellIcon, LogoutIcon, MessageIcon, MoonIcon, SettingIcon, UserIcon } from '@/styles';
import SwitchTheme from '@/components/Header/UserLogin/SwitchTheme';

export const OptionsUser = [
  { label: 'Mi Cuenta', href: '/profile', icon: UserIcon, exclusive: 'desktop' },
  { label: 'Configuraciones', href: '/settings', icon: SettingIcon },
  { label: 'Notificaciones', href: '/profile', icon: BellIcon, exclusive: 'mobile' },
  { label: 'Mensajes', href: '/profile', icon: MessageIcon, exclusive: 'mobile' },
  { label: 'Modo Obscuro:', icon: MoonIcon, custom: SwitchTheme, linkDisabled: true },
  { label: 'Cerrar Sesion', href: '/logout', icon: LogoutIcon },
];
