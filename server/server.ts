import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

const corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 204,
  methods: "GET, POST, PUT, DELETE",
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/test", (req: any, res: any) => {
  res.status(200).send("Hello from server");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost${port}`);
});
