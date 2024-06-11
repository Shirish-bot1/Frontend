import {  useMutation } from "react-query";
import axios from "axios";
import { useQueryClient } from "react-query";


const updateblog = async({blogId,title,content,file})=>{
    try{
          const response = await axios.put(`http://localhost:5000/api/v5/blog/${blogId}`,{title,content,file});
          console.log("response",response);
             return response.data
    }catch(error){
        console.error("error",error);
        throw new Error(error?.response?.data || 'Something is wrong ')

    }
}
 
 
      export const useUpdateBlog=()=>{
        const querclient = useQueryClient();
        return useMutation(updateblog,{
            onSuccess:(data)=>{
                console.log(`${data.message}`);
                querclient.invalidateQueries('allblogs')
            },
            onError:(error)=>{
                console.error("Somthing went wrong",error)
            }
        })
      }