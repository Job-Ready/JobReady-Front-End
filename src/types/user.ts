// UserContext.tsx
import React, { createContext, useContext, useState } from 'react';

export type User = {
  userid: string;
  email: string;
  fullname?: string;
};


type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);
