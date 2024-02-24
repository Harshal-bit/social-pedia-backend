import ImageKit from "imagekit";

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
  });


async function uploadImage(req, res) {
    try {
      const uploadedFile = req.file;
  
      if (!uploadedFile) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
  
      // Upload image to ImageKit
      const response = await imagekit.upload({
        file: uploadedFile.buffer,
        fileName: uploadedFile.originalname,
      });
      
      
      // Handle post creation logic here, including storing the ImageKit URL
      // You can use response.url which contains the URL of the uploaded image
  
      res.json({ message: 'Post created successfully' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  }