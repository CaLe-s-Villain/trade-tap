const dotenv = require("dotenv");
const app = require("./app");
const cors = require("cors");

dotenv.config();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
