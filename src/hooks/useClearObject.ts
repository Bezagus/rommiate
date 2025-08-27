import { useCallback } from 'react';

export const useClearObject = () => {
  const keysUndefined = useCallback((data: object) => {
    return Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value && value.trim() !== '')
    );
  }, []);

  return { keysUndefined };
};
