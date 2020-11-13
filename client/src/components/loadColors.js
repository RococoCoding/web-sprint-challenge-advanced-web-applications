import { axiosWithAuth } from "../utils/axiosWithAuth";

export const loadColors = () => {
  return axiosWithAuth().get("http://localhost:5000/api/colors")
      .then(res => {return res})
      .catch(err=>console.log(err))
  }