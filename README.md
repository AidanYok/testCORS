# CORS Test Script

This Node.js script tests if CORS (Cross-Origin Resource Sharing) is enabled and configured properly on a given URL. It uses the `node-fetch` package to make requests.

## Prerequisites

Before running the script, you need to have Node.js installed on your system. If you don't have Node.js installed, you can download it from [the official Node.js website](https://nodejs.org/).

You also need to install the `node-fetch` package, which can be done using the following command:

```bash
npm install node-fetch
```

## Usage

Save the script as `testCORS.js` and run it using the following command, replacing `<your-url>` with the actual URL you want to test:

```bash
node testCORS.js <your-url>
```

The script will output whether CORS is working properly based on the response's `access-control-allow-origin` header. If the header is set to `*` (allowing all origins) or matches the provided origin (`https://example.com` in this case), the script will report that CORS is working properly. Otherwise, it will report that CORS is not working properly.
