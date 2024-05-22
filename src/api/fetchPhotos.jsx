import axios from 'axios';
import { useQuery } from 'react-query';

// Define the data fetching function
const fetchPhotos = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/v3/images');
        console.log("response", response.data);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch images');
    }
}

// Create a custom hook using useQuery
const useGetImages = () => {
    return useQuery('allphotos', fetchPhotos);
}

export { useGetImages };
