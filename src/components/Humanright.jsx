import React from 'react';
  import { useGetImages } from '../api/fetchPhotos';

const Humanright = () => {
    const { data, error, isLoading, isError } = useGetImages();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Image Gallery</h1>
            <div className="image-gallery" style={{ display: 'flex', flexWrap: 'wrap' }}>
                {data.map((image, index) => (
                    <div key={index} style={{ margin: '10px' }}>
                        <img 
                            src={`http://localhost:5000${image.url}`} 
                            alt={image.title} 
                            style={{ width: '150px', height: '150px' }} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Humanright;
