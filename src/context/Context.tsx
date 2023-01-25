import { createContext, ReactNode, useState } from "react";

interface ContextProviderProps {
  children: ReactNode;
}

const Context = createContext({} as any);

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <Context.Provider value={{ menu, setMenu }}>{children}</Context.Provider>
  );
};

export default Context;
