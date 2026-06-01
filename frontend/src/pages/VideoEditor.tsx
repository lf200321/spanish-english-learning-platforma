import React from 'react';
import { useParams } from 'react-router-dom';
import { FiScissors, FiType, FiFilter } from 'react-icons/fi';

const VideoEditor: React.FC = () => {
  const { videoId } = useParams();
  return (
    <div className="grid grid-cols-4 gap-6 h-[600px]">
      <div className="col-span-2 bg-black rounded-lg overflow-hidden">
        <video className="w-full h-full" controls><source src="" type="video/mp4" /></video>
      </div>
      <div className="col-span-2 bg-white rounded-lg shadow-md p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Video Editor</h2>
        <div className="mb-6 pb-6 border-b">
          <div className="flex items-center gap-3 mb-4"><FiScissors className="text-blue-600 text-xl" /><h3 className="font-semibold">Trim Video</h3></div>
          <input type="range" className="w-full" />
        </div>
        <div className="mb-6 pb-6 border-b">
          <div className="flex items-center gap-3 mb-4"><FiType className="text-green-600 text-xl" /><h3 className="font-semibold">Add Subtitles</h3></div>
          <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Auto-Generate Captions</button>
        </div>
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4"><FiFilter className="text-purple-600 text-xl" /><h3 className="font-semibold">Effects</h3></div>
          <select className="w-full border rounded px-3 py-2"><option>None</option><option>Grayscale</option></select>
        </div>
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 mt-8">Export</button>
      </div>
    </div>
  );
};

export default VideoEditor;