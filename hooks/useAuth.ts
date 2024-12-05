import { AuthContext } from "@/store/AuthContext";
import { useContext } from "react";

export default function useAuth() {
  return useContext(AuthContext);
}
