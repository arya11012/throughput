import express from "express";
import cors from "cors";
const app=express();
const PORT=3002;

// Generating random throughput data
function generateRandomData(numPoints) {
    let data = [];
    for (let i = 0; i < numPoints; i++) {
        data.push({ x: i, y: Math.random() * 100 }); // Assuming throughput values range from 0 to 100
    }
    return data;
}
app.use(cors());
app.get('/api/data', (req, res) => {
    const numPoints = 250; // Number of data points (seconds)
    const data = generateRandomData(numPoints);
    res.json(data);
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));