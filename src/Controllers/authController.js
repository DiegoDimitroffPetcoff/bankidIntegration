const axios = require("axios");
const fs = require("fs");
const path = require("path");
const https = require("https");

const bankidApiUrlV5 = "https://appapi2.test.bankid.com/rp/v5.1/auth";

const bankidApiUrlV6 = "https://appapi2.test.bankid.com/rp/v6.0/auth";

const certPath = fs.readFileSync(
  path.join(__dirname, "../certificates/FPTestcert5_20240610.p12")
);

const password = "qwerty123";

async function authController(userIP) {
  const data = JSON.stringify({
    endUserIp:userIP,
    /* V6 reques pinCode */
    requirement: { pinCode: true },
  });

  const httpsAgent = new https.Agent({
    pfx: certPath,
    passphrase: password,
    rejectUnauthorized: false,
  });

  try {
    const response = await axios.post(bankidApiUrlV6, data, {
      headers: {
        "Content-Type": "application/json",
        "Content-Length": data.length,
      },
      httpsAgent: httpsAgent,
      timeout: 5000,
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error description:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
}

module.exports = authController;
