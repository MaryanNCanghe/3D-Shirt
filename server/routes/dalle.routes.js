import express from 'express';
import * as dotenv from 'dotenv';

// import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();

// not using it right now
// const config = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(config);

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    // Temporarily disable the OpenAI request by using a placeholder response
    // const response = await openai.createImage({
    //   prompt,
    //   n: 1,
    //   size: '1024x1024',
    //   response_format: 'b64_json'
    // });

    // Temporary placeholder image or message
    const image = "Base64EncodedPlaceholderImage"; // Replace this with any image data

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
