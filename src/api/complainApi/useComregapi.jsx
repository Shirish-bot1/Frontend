import { useMutation } from "react-query";
import axios from "axios";

const Compreg = async({name,phone,address,age,sex,details})=>{
    console.log("All data",{name,address,age,sex,details,phone});
    try{
        const response = await axios.post("http://localhost:5000/api/v4/complain",{name,phone,address,sex,age,details});

        console.log("Complain registered successfully",response)
        return response;



    }catch(error){
        console.error("resgitration failed",error);
        throw error.response?.error||"resgitreatin failed";

    }
};

 export const useComregapi = () =>{
    return useMutation(Compreg,{
        onSuccess:(data)=>{
            console.log("Succesfully registered:",data);
        },
        onError:(error)=>{
            console.error("Registration error",error);
        }
    })
 }