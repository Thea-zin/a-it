import { createContext, useContext, useState } from "react";

export const Message_data = createContext(null);

export default function Context({ children }) {
  const [message, setMessage] = useState();

  return (
    <Message_data.Provider value={{ message, setMessage }}>
      {children}
    </Message_data.Provider>
  );
}
