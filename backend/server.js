import app from "./app.js";
import messageRouter from './router/messageRouter.js';



app.listen(process .env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
});