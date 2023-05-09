const API_KEY = "YOUR API KEY HERE";

const requests = [
    {
      method: 'POST',
      url: 'https://api.openai.com/v1/engines/gpt-3.5-turbo/completions',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        prompt: "Hello, world!",
        max_tokens: 5
      })
    },
    {
      method: 'POST',
      url: 'https://api.openai.com/v1/engines/gpt-3.5-turbo/completions',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        prompt: "How are you doing today?",
        max_tokens: 5
      })
    }
  ];

  let responseList = [];
  
  Promise.all(requests.map(request => {
    return fetch(request.url, {
      method: request.method,
      body: request.body,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      }
    });
  }))
  .then(responses => {
    responses.forEach(response => {
      response.text().then(data => {
        responseList.push(JSON.parse(data));
        if(responseList.length === requests.length) {
            console.log(responseList)
        }
      });
    });
  })
  .catch(error => console.error(error));