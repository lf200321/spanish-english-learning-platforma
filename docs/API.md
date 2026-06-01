# API Documentation

## Base URL
`http://localhost:5000/api`

## Video Endpoints

### GET /videos
Fetch all videos

### GET /videos/:id
Fetch single video

### PUT /videos/:id
Update video metadata

## Upload Endpoints

### POST /upload
Upload video to Google Cloud Storage
- Form: multipart/form-data with 'video' file
- Returns: { success, url, size }

## Health Check

### GET /health
Returns: { status, timestamp }

## Error Codes
- 200: Success
- 400: Bad request
- 404: Not found
- 500: Server error
