const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

// Middleware to handle CORS and JSON responses
app.use(cors());
app.use(express.json());

// Helper functions
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function isPerfect(num) {
    if (num <= 1) return false;
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i;
        }
    }
    return sum === num;
}

function isArmstrong(num) {
    const digits = String(num).split('');
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);
    return sum === num;
}

function getDigitSum(num) {
    return String(num).split('').reduce((acc, digit) => acc + Number(digit), 0);
}

// Fetch fun fact from Numbers API
async function getFunFact(num) {
    try {
        const response = await axios.get(`http://numbersapi.com/${num}/math?json`);
        return response.data.text;
    } catch (error) {
        return `No fun fact available for ${num}.`;
    }
}

// API endpoint
app.get('/api/classify-number', async (req, res) => {
    const number = Number(req.query.number);

    if (isNaN(number)) {
        return res.status(400).json({
            number: req.query.number,
            error: true
        });
    }

    const properties = [];
    if (isPrime(number)) properties.push('prime');
    if (isPerfect(number)) properties.push('perfect');
    if (isArmstrong(number)) properties.push('armstrong');
    if (number % 2 !== 0) properties.push('odd');
    if (number % 2 === 0) properties.push('even');

    const funFact = await getFunFact(number);

    res.status(200).json({
        number: number,
        is_prime: isPrime(number),
        is_perfect: isPerfect(number),
        properties: properties,
        digit_sum: getDigitSum(number),
        fun_fact: funFact
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
