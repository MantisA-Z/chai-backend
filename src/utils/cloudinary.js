import {v2 as cloudinary} from 'cloudinary';
const fs = require('fs');
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KET, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async function(localFilePath){
    try{
        if(!localFilePath) return 'No file path provided!';
            const response = await cloudinary.uploader.upload(
                localFilePath, {
                resource_type: 'auto' 
            }
        );
        console.log('File succesfullly uploaded on cloudinary: ', response.url);
        return response;
    }
    catch(error){
        fs.unlinkSync(localFilePath);
        console.log('File unlinked because something went wrong while uploading local file to cloudinary');
    }
};

module.exports = uploadOnCloudinary;