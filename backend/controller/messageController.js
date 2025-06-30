import { Message } from "../models/messageSchema.js"; 

export const sendMessage = async (req, res, next) => {

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields (name, email, subject, message) are required.",
    });
  }

  try {
    
    await Message.create({ name, email, subject, message });

   
    res.status(200).json({
      success: true,
      message: "Message Sent Successfully!",
    });
  } catch (error) {
   
    if (error.name === 'ValidationError') {
        const validationErrors = Object.values(error.errors).map(err => err.message);
        return res.status(400).json({
            success: false,
            message: validationErrors.join(', ')
        });
    }

    res.status(500).json({
      success: false,
      message: "An internal server error occurred.",
      error: error.message, 
    });
  }
};