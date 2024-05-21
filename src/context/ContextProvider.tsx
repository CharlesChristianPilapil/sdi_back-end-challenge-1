import React, { createContext, ReactNode, useState } from "react";

interface Solution {
  size: string;
  numCars: number;
}

interface ContextType {
  solution: Solution | null;
  setSolution: React.Dispatch<React.SetStateAction<Solution | null>>;
}

export const AppContext = createContext<ContextType>({
  solution: null,
  setSolution: () => {},
});

interface Props {
  children: ReactNode;
}

const ContextProvider = ({ children }: Props) => {
  const [solution, setSolution] = useState<Solution | null>(null);

  return (
    <AppContext.Provider value={{ solution, setSolution }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;