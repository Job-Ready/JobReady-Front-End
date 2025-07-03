import React, { createContext, useState, useContext, useEffect } from 'react';
import type { User } from './types/user'; // ✅ import the type

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

// ✅ Create context with the correct type
const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("UserData");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Optional: sync any change to user with localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("UserData", JSON.stringify(user));
    } else {
      localStorage.removeItem("UserData");
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
