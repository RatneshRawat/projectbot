import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import { Camera, X } from 'lucide-react';

interface ImageSearchProps {
  onImageSearch: (description: string) => void;
  onClose: () => void;
}

const ImageSearch: React.FC<ImageSearchProps> = ({ onImageSearch, onClose }) => {
  const webcamRef = useRef<Webcam>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [model, setModel] = useState<mobilenet.MobileNet | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Load MobileNet model
  React.useEffect(() => {
    const loadModel = async () => {
      try {
        const loadedModel = await mobilenet.load();
        setModel(loadedModel);
      } catch (error) {
        console.error('Failed to load MobileNet model:', error);
      }
    };
    loadModel();
  }, []);

  const captureImage = useCallback(async () => {
    if (!webcamRef.current || !model) return;

    setIsLoading(true);
    try {
      const imageSrc = webcamRef.current.getScreenshot();
      if (!imageSrc) return;

      // Create an HTML image element from the screenshot
      const img = new Image();
      img.src = imageSrc;
      await new Promise((resolve) => (img.onload = resolve));

      // Convert image to tensor and classify
      const tensor = tf.browser.fromPixels(img);
      const predictions = await model.classify(tensor);

      // Get the top prediction
      const topPrediction = predictions[0];
      
      // Clean up tensor
      tensor.dispose();

      // Format the search query
      const searchQuery = `Find places in India similar to or containing ${topPrediction.className}`;
      onImageSearch(searchQuery);
      onClose();
    } catch (error) {
      console.error('Error processing image:', error);
    } finally {
      setIsLoading(false);
    }
  }, [model, onImageSearch, onClose]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 max-w-lg w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Search by Image</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div className="relative aspect-video mb-4 bg-gray-100 rounded-lg overflow-hidden">
          {isCapturing ? (
            <Webcam
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <Camera size={48} className="text-gray-400" />
            </div>
          )}
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setIsCapturing(!isCapturing)}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          >
            {isCapturing ? 'Stop Camera' : 'Start Camera'}
          </button>
          {isCapturing && (
            <button
              onClick={captureImage}
              disabled={isLoading || !model}
              className="px-4 py-2 bg-[#000080] text-white rounded-md hover:bg-[#000080]/90 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Processing...' : 'Capture & Search'}
            </button>
          )}
        </div>

        <p className="mt-4 text-sm text-gray-600 text-center">
          Point your camera at a landmark, monument, or landscape to find similar places in India
        </p>
      </div>
    </div>
  );
};

export default ImageSearch;