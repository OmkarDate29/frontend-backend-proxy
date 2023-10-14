import express from 'express';

const app = express();

app.get('/api/quotes', (req, res) => {
  const quotes = [
    {
      id: 1,
      quote: 'Be the change that you wish to see in the world.',
    },
    {
      id: 2,
      quote: "Don't cry because it's over, smile because it happened.",
    },
    {
      id: 3,
      quote: 'The journey of a thousand miles begins with a single step.',
    },
    {
      id: 4,
      quote: 'The only thing we have to fear is fear itself.',
    },
    {
      id: 5,
      quote:
        "The most important thing is to enjoy your life - to be happy - it's all that matters.",
    },
  ];

  res.send(quotes);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
