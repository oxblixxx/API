# Number API

A simple Node.js API that takes a number and returns interesting mathematical properties about it, along with a fun fact. The API is deployed using Nginx as a reverse proxy and is accessible via a custom domain with HTTPS support.

---

## Features

- **Mathematical Properties**:
  - Check if a number is prime.
  - Check if a number is a perfect number.
  - Check if a number is an Armstrong number.
  - Calculate the sum of the digits of a number.
- **Fun Fact**:
  - Fetch a fun fact about the number using the [Numbers API](http://numbersapi.com/).
- **Deployment**:
  - Deployed using Nginx as a reverse proxy.
  - Accessible via a custom domain with HTTPS support.

---

## API Endpoint

### Request

- **Method**: `GET`
- **URL**: `https://yourdomain.com/api/classify-number?number=<number>`
- **Example**: `https://yourdomain.com/api/classify-number?number=371`

### Response (200 OK)

```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

Prerequisites
Node.js (v18 or higher)

npm (v7 or higher)

Nginx (for deployment)

A domain name (for custom domain setup)

A VPS (e.g., DigitalOcean, Linode, AWS EC2)

Setup Instructions
1. Clone the Repository
bash
Copy
git clone https://github.com/your-username/number-api.git
cd number-api
2. Install Dependencies
bash
Copy
npm install
3. Run the API Locally
bash
Copy
node index.js
