import React from 'react';
import { useAllTexts } from '../api/textapi/useTextapi';
import { useQuery } from 'react-query';
import { fetchImages } from '../api/imageApi/imageApi';
import HeaderNav from '../Navbar/HeaderNav';

const About = () => {
  const { data: texts, isLoading: textsLoading, error: textsError } = useAllTexts();
  const { data: images, isLoading: imagesLoading, error: imagesError } = useQuery('images', fetchImages);

  if (textsLoading || imagesLoading) {
    return <div className="text-center text-blue-600">Loading...</div>;
  }

  if (textsError) {
    return <div className="text-red-500">Error loading texts: {textsError.message}</div>;
  }

  if (imagesError) {
    return <div className="text-red-500">Error loading images: {imagesError.message}</div>;
  }

  const combinedContent = [];
  const maxLength = Math.max(texts.length, images.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < texts.length) {
      combinedContent.push({ type: 'text', data: texts[i] });
    }
    if (i < images.length) {
      combinedContent.push({ type: 'image', data: images[i] });
    }
  }

  return (
    <div>
      <HeaderNav />
      <div className="max-w-4xl mx-auto px-4 py-8 bg-gray-50">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">News</h1>
        <div className="grid gap-6">
          {combinedContent.map((item, index) => (
            <div
              key={index}
              className={`p-6 mb-6 shadow-md rounded-lg transition-transform transform 
                          ${item.type === 'text' ? 'bg-white' : 'bg-gray-200'}`}
            >
              {item.type === 'text' ? (
                <p className="text-lg text-gray-700 leading-relaxed">{item.data.content}</p>
              ) : (
                <div className="flex justify-center">
                  <div className="w-64 h-64 bg-gray-300 flex items-center justify-center">
                    <img
                      src={`http://localhost:5000${item.data.url}`}
                      alt={item.data.title}
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;


