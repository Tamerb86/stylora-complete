import { createContext, useContext, ReactNode } from 'react';

interface ThermalPrinterContextType {
  print: (content: string) => void;
}

const ThermalPrinterContext = createContext<ThermalPrinterContextType | undefined>(undefined);

export function ThermalPrinterProvider({ children }: { children: ReactNode }) {
  const print = (content: string) => {
    console.log('Printing:', content);
    // Thermal printer logic here
  };

  return (
    <ThermalPrinterContext.Provider value={{ print }}>
      {children}
    </ThermalPrinterContext.Provider>
  );
}

export function useThermalPrinter() {
  const context = useContext(ThermalPrinterContext);
  if (!context) {
    throw new Error('useThermalPrinter must be used within ThermalPrinterProvider');
  }
  return context;
}
