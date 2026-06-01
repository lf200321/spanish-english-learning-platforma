import { Storage } from '@google-cloud/storage';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();
let storage: Storage;
let bucket: any;

export const initializeGCS = () => {
  const projectId = process.env.GCS_PROJECT_ID;
  const bucketName = process.env.GCS_BUCKET_NAME;
  const useADC = process.env.USE_APPLICATION_DEFAULT_CREDENTIALS === 'true';
  if (!projectId || !bucketName) { console.warn('⚠️ GCS credentials incomplete'); return; }
  try {
    storage = useADC ? new Storage({ projectId }) : new Storage({ projectId, keyFilename: path.resolve(process.env.GCS_KEY_FILE || '') });
    bucket = storage.bucket(bucketName);
    console.log('✅ Google Cloud Storage connected');
  } catch (error) { console.error('❌ GCS initialization failed:', error); }
};

export const getStorage = () => storage;
export const getBucket = () => bucket;