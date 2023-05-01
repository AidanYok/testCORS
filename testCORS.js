const fetch = require('node-fetch');

async function testCORS(url) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Origin': 'https://example.com', // Use any domain as the origin to simulate a cross-origin request
      },
    });

    const corsHeader = response.headers.get('access-control-allow-origin');
    if (corsHeader === '*' || corsHeader === 'https://example.com') {
      console.log('CORS is working properly.');
    } else {
      console.log('CORS is not working properly.');
    }
  } catch (error) {
    console.error('Error:', error);
    console.log('CORS is not working properly.');
  }
}

const url = process.argv[2];
if (!url) {
  console.log('Usage: node testCORS.js <url>');
  process.exit(1);
}

testCORS(url);

