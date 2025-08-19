import express from "express";
import cookieParser from "cookie-parser";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import authRoute from "./routes/auth.route.js";
import path from "path";
import { User } from "./models/user.model.js";
const app = express();

const PORT = ENV_VARS.PORT;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoute);

if (ENV_VARS.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
  connectDB();
});
