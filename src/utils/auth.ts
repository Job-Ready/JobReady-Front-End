import { Navigate} from "react-router-dom";
import React, { useState, useEffect } from "react";

const TOKEN_KEY = "accessToken";

export const getAccessToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

export const setAccessToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeAccessToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};

export const checkIsAuthenticated = (): boolean => {
  return !!getAccessToken();
};

export const checkExpiredToken = (error: any): boolean => {
  if (
    error.response &&
    error.response.status === 403 &&
    error.response.data?.message === 'Invalid or expired token'
  ) {
    removeAccessToken();
    return true;
  }
  return false;
};

