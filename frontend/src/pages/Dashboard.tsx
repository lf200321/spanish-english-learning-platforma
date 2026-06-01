import React, { useState } from 'react';
import { FiUpload } from 'react-icons/fi';

const Dashboard: React.FC = () => {
  const [videos, setVideos] = useState<any[]>([]);
  return (
    <div className="grid grid-cols-1 gap-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-4">Upload & Manage Videos</h1>
        <div className="border-2 border-dashed border-blue-300 rounded-lg p-12 text-center hover:border-blue-500 cursor-pointer transition">
          <FiUpload className="mx-auto text-4xl text-blue-500 mb-4" />
          <p className="text-xl text-gray-700 mb-2">Drag and drop your video here</p>
          <p className="text-gray-500">Supported: MP4, MOV, MKV (Max 5GB)</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6">Your Videos</h2>
        {videos.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p>No videos uploaded yet. Upload your first video to get started!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;