'use client'

import { useEffect, useCallback } from 'react';

export default function useDebounce(func, delay) {
  const callback = useCallback(func);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}