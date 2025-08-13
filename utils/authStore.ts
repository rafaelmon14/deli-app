import {create} from "zustand";
import axios from "axios";
import { persist, createJSONStorage } from "zustand/middleware";    
import { getItem, setItem, deleteItemAsync } from "expo-secure-store";


const API_URL = "http://10.7.19.133:8000";
type User = {
  id: string;
  name: string;
  email: string;
};

type UserState = {
    isLoggedIn: boolean;
    shouldCreateAccount: boolean;
    access_token: string | null;
    user: User | null;
    logIn: (email: string, password: string) => Promise<void>;
    logOut: () => void;
};

export const useAuthStore = create(
    persist<UserState>(
        (set) => ({
            isLoggedIn: false,
            shouldCreateAccount: false,
            access_token: null,
            user: null,

            logIn: async (email: string, password: string) => {
                try {
                    const response = await axios.post(`${API_URL}/login`, {
                        email,
                        password
                    });

                    const {access_token, user} = response.data;

                    set({
                        isLoggedIn: true,
                        access_token, 
                        user,                    
                    });
                    
                    await setItem("token", access_token);
                    await setItem("user", JSON.stringify(user));
                    console.log("User establecido:", JSON.stringify(user));
                } catch (error) {
                    console.error("Login error:", error);
                    throw error;
                }
            },
            logOut: () => {
                set({
                    isLoggedIn: false,
                    access_token: null,
                    user: null,                    
                });
                deleteItemAsync("token");
            },
        }),
        {
            name: "auth-store",
            storage: createJSONStorage(() => ({
                setItem: async (name, value) => {

                    await setItem(name, value);
                },
                getItem: async (name) => {
                    return await getItem(name);
                },
                removeItem: async (name) => {
                    await deleteItemAsync(name);
  },
            })),
        },
    ),
);