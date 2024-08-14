# BankID API Integration with Express.js
This project demonstrates an integration with the BankID API using Express.js. The application supports initiating authentication and collecting the result of an authentication order using the BankID API.

## Prerequisites
Before you start, ensure you have the following:

### Node.js installed on your machine.
### npm (Node Package Manager) for managing dependencies.
### A BankID test certificate (FPTestcert5_20240610.p12), which is required for secure communication with the BankID API.
BankID test environment access (for testing purposes).

## Project Structure

.
├── src
│   └── Services
│       ├── auth.js           # Handles the authentication request
│       └── collect.js        # Handles the collect request
├── FPTestcert5_20240610.p12   # Test certificate for BankID API
└── app.js                    # Main Express application
## Code Explanation
# app.js
Express Setup: Initializes an Express.js server with JSON body parsing.
GET / Route: Calls createAuth() to initiate an authentication request and stores the returned bId.
GET /collect Route: Calls collect(bId) to collect the result of the authentication request using the stored bId.
#auth.js
createAuth(): Sends a POST request to the BankID API to initiate authentication. Uses a test certificate for secure communication. Returns the authentication order reference and other details.
collect.js
collect(bId): Sends a POST request to the BankID API to collect the result of an ongoing authentication order. It uses the orderRef returned from createAuth().
Error Handling
Errors are caught and logged to the console. If an error occurs during a request, the server will respond with a 500 status code and the error message.