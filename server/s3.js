import aws from 'aws-sdk';
import crypto from 'crypto';
import { promisify } from 'util';
const randomBytes = promisify(crypto.randomBytes);
import dotenv from 'dotenv';
dotenv.config();


const region = 'us-east-1';
const bucketName = 's3-direct-upload';
const accessKeyId = process.env.S3_ACCESS_KEY;
const secretAccessKey = process.env.S3_SECRET_KEY;


const s3 = new aws.S3({
    region,
    bucketName,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4',
})

export async function generateUploadURL() {
    const rawBytes = await randomBytes(16);
    const imageName = rawBytes.toString('hex');

    const params = {
        Bucket: bucketName,
        Key: imageName,
        Expires: 60,
    }
    const uploadURL = await s3.getSignedUrlPromise('putObject', params)
    return uploadURL
}

