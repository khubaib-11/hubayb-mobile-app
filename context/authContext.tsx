import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { Session, User } from '@supabase/supabase-js';
import supabase from '@/services/supabase/supabase';

export const AuthContext = createContext<{
  isLoadingSession: boolean;
  user: User | null;
  userSession: Session | null;
}>({
  isLoadingSession: true,
  user: null,
  userSession: null,
});

export function AuthContextProvider(props: any) {
  const [isLoadingSession, setIsLoadingSession] = useState(true);
  const [userSession, setUserSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);

  console.log(isLoadingSession);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log(`Supabase auth event: ${event}`);
      setUserSession(session);
      setUser(session?.user ?? null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const value = {
    isLoadingSession,
    userSession,
    user,
  };
  return (
    <AuthContext.Provider
      value={value}
      {...props}
    />
  );
}

export const useUser = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a AuthContextProvider.');
  }
  return context;
};
