const app = require('./src/app');
const port = process.env.PORT || 5001; // <--- CHANGE THIS TO 5001

app.listen(port, () => {
  console.log(`Local Backend running on http://localhost:${port}`);
});