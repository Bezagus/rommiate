import { useRef, useState } from 'react';

export const useNotifications = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [newNotification, setNewNotification] = useState(true);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setMenuPos({ top: rect.bottom + window.scrollY + 6, left: rect.left + window.scrollX - 70 });
    }
    setIsHovered(true);

    window.addEventListener('scroll', handleScroll, { passive: true });
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setIsHovered(false);
      window.removeEventListener('scroll', handleScroll);
    }, 100);
  };

  const handleScroll = () => {
    setIsHovered(false);
    window.removeEventListener('scroll', handleScroll);
  };

  return { isHovered, menuPos, handleMouseEnter, handleMouseLeave, ref, newNotification };
};
