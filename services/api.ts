import axios from "axios";

const API_URL = "http://10.7.19.133:8000"; // Cambia por la IP o URL real en dispositivo físico

// Tipos de datos de usuario
export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
}

export interface UserResponse {
  id: number;
  username: string;
  email: string;
}

// Función para registrar usuario
export const registerUser = async (data: RegisterData): Promise<UserResponse> => {
  try {
    const response = await axios.post<UserResponse>(`${API_URL}/register`, data);
    return response.data;
  } catch (error) {
    console.error("Error en registerUser:", error);
    throw error;  // relanza para que el catch del caller funcione
  }
};

// Función para login
export const loginUser = async (data: LoginData): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(`${API_URL}/login`, data);
  return response.data;
};
