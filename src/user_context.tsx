import React, { createContext, useState, useContext, useEffect } from "react";

type UserContextType = {
  userId: string | null;
  setUserId: React.Dispatch<React.SetStateAction<string | null>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userId, setUserId] = useState<string | null>(() => {
    return localStorage.getItem("UserId");
  });

  // Sync changes with localStorage
  useEffect(() => {
    if (userId) {
      localStorage.setItem("UserId", userId);
    } else {
      localStorage.removeItem("UserId");
    }
  }, [userId]);

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
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
