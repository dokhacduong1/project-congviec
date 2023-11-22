import { Post, Get, Del, Patch } from "../Utils/request"
const API_PATCH = "/users"
export const registerAccount = async (data)=>{
    const result = await Post(API_PATCH+"/register",data);
    return result;
}
export const loginAccount = async (data)=>{
    const result = await Post(API_PATCH+"/login",data);
    return result;
}

export const checkAuthenAccount = async (data)=>{
    const result = await Post(API_PATCH+"/authen",data);
    return result;
}