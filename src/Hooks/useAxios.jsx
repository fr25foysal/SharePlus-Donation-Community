import axios from "axios";

const instance = axios.create({
        baseURL: 'https://shareplus-backend.vercel.app',
      });
const useAxios = () => {
    
      return instance
};

export default useAxios;