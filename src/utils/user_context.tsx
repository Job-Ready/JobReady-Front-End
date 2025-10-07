import React, { createContext, useState, useContext } from "react";

type UserContextType = {
  userId: string | null;
  setUserId: React.Dispatch<React.SetStateAction<string | null>>;
  email: string | null;
  setEmail: React.Dispatch<React.SetStateAction<string | null>>;
  fullname: string | null;
  setFullname: React.Dispatch<React.SetStateAction<string | null>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userId, setUserId] = useState<string | null>("UserId");
  const [email, setEmail] = useState<string | null>("email");
  const [fullname, setFullname] = useState<string | null>("fullname");

  return (
    <UserContext.Provider
      value={{ userId, setUserId, email, setEmail, fullname, setFullname }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
