# S3 File Upload Practice

This project is a simple web application built with React and Vite. It demonstrates how to upload files directly to Amazon S3 using pre-signed URLs.

## Features

- File upload: Users can select a file and upload it directly to an S3 bucket.
- Pre-signed URLs: The application uses pre-signed URLs for secure, temporary access to the S3 bucket.

## Getting Started

### Prerequisites

- Node.js
- An AWS account and an S3 bucket

### Installation

1. Clone the repository:
git clone https://github.com/yourusername/s3-practice.git

2. Install the dependencies:
3. Create a `.env` file in the root directory and fill in your AWS credentials and the name of your S3 bucket:

VITE_APP_ACCESS_KEY=youraccesskey VITE_APP_SECRET_KEY=yoursecretkey VITE_APP_BUCKET_NAME=yourbucketname ``` 4. Start the development server:

npm run dev

### Usage
Open the application in your web browser. Select a file and click the "Upload" button to upload the file to your S3 bucket.