import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const createOrGetUser = async (response: any) => {
    const decoded: {name: string, picture: string, sub:string} = jwt_decode(response.credential);
    
  
};