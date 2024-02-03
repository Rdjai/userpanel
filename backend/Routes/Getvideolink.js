const express = require('express');
const router = express.Router();
const Video = require('../Models/Videolink'); // Adjust the path based on your project structure

// API endpoint to fetch a video link
router.get('/getVideoLink', async (req, res) => {
  try {
    // Fetch a random video link from the database
    const randomVideo = await Video.findOne({}, 'title link').lean(); // Adjust the query based on your data model

    if (!randomVideo) {
      return res.status(404).json({ message: 'No videos found' });
    }

    // You can do additional processing if needed

    // Return the video link
    res.json({ video: randomVideo });
  } catch (error) {
    console.error('Error fetching video link:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});






router.post('/addVideoLink', async (req, res) => {
    try {
      // Extract video details from the request body
      const { title, link } = req.body;
  
      // Check if both title and link are provided
      if (!title || !link) {
        return res.status(400).json({ message: 'Title and link are required' });
      }
  
      // Create a new Video document
      const newVideo = new Video({
        title,
        link,
      });
  
      // Save the new video to the database
      await newVideo.save();
  
      res.status(201).json({ message: 'Video link added successfully' });
    } catch (error) {
      console.error('Error adding video link:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

  module.exports = router;