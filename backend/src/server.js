import express from "express"
import cors from "cors"
import chatRoutes from "./routes/chat.routes.js"
import 'dotenv/config'; 

const port = 5000
const app = express()



app.use(
  cors({
    origin: `http://localhost:5173`,   // or '*' in quick-and-dirty dev mode 5173
    credentials: true                  // if you need cookies/authorization headers
  })
);
app.use(express.json());
app.use("/api/chat", chatRoutes)


app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})