import {  useMutation } from "react-query";
import axios from "axios";
import { useQueryClient } from "react-query";


const updatebooks = async({bookId,title,author,file})=>{
    try{
          const response = await axios.put(`http://localhost:5000/api/v2/books/${bookId}`,{title,author,file});
          console.log("response",response);
             return response.data
    }catch(error){
        console.error("error",error);
        throw new Error(error?.response?.data || 'Something is wrong ')

    }
}
 
 
      export const Bookupdate=()=>{
        const querclient = useQueryClient();
        return useMutation(updatebooks,{
            onSuccess:(data)=>{
                console.log(`${data.message}`);
                querclient.invalidateQueries('allbooks')
            },
            onError:(error)=>{
                console.error("Somthing went wrong",error)
            }
        })
      }