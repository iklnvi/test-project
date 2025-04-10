import React, { createContext, ReactNode, useContext, useState } from "react";

const ActiveItemContext = createContext<any>(null);

export const useActiveItem = () => {
  return useContext(ActiveItemContext);
};

interface ActiveItemProviderProps {
  children: ReactNode;
}

export const ActiveItemProvider: React.FC<ActiveItemProviderProps> = ({
  children,
}) => {
  const [activeItemId, setActiveItemId] = useState<any>(null);

  return (
    <ActiveItemContext.Provider value={{ activeItemId, setActiveItemId }}>
      {children}
    </ActiveItemContext.Provider>
  );
};
