import express from 'express';
import cors from 'cors';
import router from "./routes/route.js";

const app = express();
app.use(cors());
const port = 3000;

// app.get('/files', (req, res) => { //Return all data
// 	res.json(sourceFiles);
// }); //done via routes/controller instead

app.use("/data", router);

app.use('/', express.static('public')) //this lets you serve public files like html, scripts, styles, from your express server

// Run server
app.listen(port, () => {
	console.log(`CSV data server listening on port ${port}`);
});
