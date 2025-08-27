import { useRef, useState } from 'react';

export const useMessage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [newMessage, setNewMessage] = useState(true);
  const [expanded, setExpanded] = useState(true);
  const [menuPos, setMenuPos] = useState({ left: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const onClick = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setMenuPos({ left: rect.left + window.scrollX });
    }
    setIsHovered(true);
  };
  return { isHovered, menuPos, onClick, ref, newMessage, expanded, setExpanded, setIsHovered };
};
