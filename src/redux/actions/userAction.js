import axios from "axios";
import { FAIL, GET_CURRENT, LOG_IN, LOG_OUT, REGISTER } from "../action-type/userAction-type";
import { alert_error } from "./Actionerror";

export const login =(data,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/user/login',data)
        dispatch({
            type:LOG_IN,
            payload:res.data
        })
        navigate("/")
    } catch (error) {
        error.response.data.errors.forEach((el) => {
            dispatch(alert_error(el.msg));
          });
          dispatch({ type: FAIL, payload: error.response.data });
        }
    }


export const register =(data,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/user/register',data)
        dispatch({
            type:REGISTER,
            payload:res.data
        })
        navigate('/')
    } catch (error) {
        error.response.data.errors.forEach((el) => {
            dispatch(alert_error(el.msg));
          });
          dispatch({ type: FAIL, payload: error.response.data });
        }
}

export const getCurrent= ()=>async(dispatch)=>{
   const config = {
    headers: {
        token: localStorage.getItem("token"),
      },
   }
    try {
        const res = await axios.get("/user/getuser",config)
        dispatch({
            type:GET_CURRENT,
            payload:res.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const logout=()=>{
    
    return ({type:LOG_OUT})
    
}