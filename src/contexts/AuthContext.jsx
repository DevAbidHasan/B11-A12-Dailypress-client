import { getAuth } from "firebase/auth";
import { createContext } from "react";
import { app } from "../firebase/firebase.init";

export const AuthContext = createContext();
export const auth = getAuth(app);