import axios from "axios";
import { useQuery } from "react-query";

const getByIdCom = async (complainId) => {
    console.log("complainId", complainId); 
    try {
        const response = await axios.get(`http://localhost:5000/api/v4/user/complain/${complainId}`);
        console.log("response", response); 
        return response.data;
    } catch (error) {
        console.error("Error fetching complaint", error); 
        throw new Error("Failed to fetch complaint");
    }
};

const useGetcomId = (complainId) => {
    return useQuery(["complainId", complainId], () => getByIdCom(complainId));
};

export { useGetcomId };
