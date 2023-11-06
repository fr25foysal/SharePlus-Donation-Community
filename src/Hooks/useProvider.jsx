import { useContext } from "react";
import { authProvider } from "../AuthContext/authContex";

const useProvider = () => {
    return useContext(authProvider)
};

export default useProvider;