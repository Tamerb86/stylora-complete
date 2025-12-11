import { createContext, useContext, useState, ReactNode } from 'react';

type UIMode = 'default' | 'pos' | 'kiosk';

interface UIModeContextType {
  mode: UIMode;
  setMode: (mode: UIMode) => void;
}

const UIModeContext = createContext<UIModeContextType | undefined>(undefined);

export function UIModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<UIMode>('default');

  return (
    <UIModeContext.Provider value={{ mode, setMode }}>
      {children}
    </UIModeContext.Provider>
  );
}

export function useUIMode() {
  const context = useContext(UIModeContext);
  if (!context) {
    throw new Error('useUIMode must be used within UIModeProvider');
  }
  return context;
}
