// LIBRARIES
import React from "react";
// import { getToken } from "next-auth/jwt";
import create from "zustand";

// Create Auth Context & Store Object

// Context Type
interface UserZustandType {
  loginUser: (idToken: string) => void;
  logoutUser: () => void;
  toggleColorState: () => void;
  children?: React.ReactNode;
  userColorState: string;
  userErrorMsg?: string;
  userIdToken: string;
  userName?: string;
}

/**
 * REQUIRED USER METHODS
 */
/** USER CALLS */
// createUser
// loginUser
// logoutUser
// deleteUser
// linkAccount
// unlinkAccount
/**
 * MAYBE USER METHODS
 */
/** SESSION UTILS */
// createSession
// getSession
// updateSession
// deleteSession
// createVerificationToken
// useVerificationToken

/**
 * Create Zustand store & default values
 */
export const UserZustand = create<UserZustandType>()((set) => ({
  /** USER CALLS */
  createUser: () => {console.log("hi")},
  loginUser: () => {console.log("hi")},
  logoutUser: () => {console.log("hi")},
  // createSession
  // getSession
  // updateSession
  // deleteSession
  toggleColorState: () =>
    set((state) => ({
      userColorState: state.userColorState !== "light" ? "light" : "dark",
    })),
  userColorState: "dark",
  userIdToken: "",
  userErrorMsg: "",
  userName: "",
}));
