const quotes = [
    { quote: "The best way to predict the future is to create it.",
       author: "Peter Drucker" },
    { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { quote: "Don’t be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    { quote: "Believe you can and you're halfway there.", 
      author: "Theodore Roosevelt" },
    { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "Quality is not an act, it is a habit.",
       author: "Aristotle" },
    { quote: "Well done is better than well said.",
       author: "Benjamin Franklin" },
    { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { quote: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { quote: "Dream big and dare to fail.", 
      author: "Norman Vaughan" },
    { quote: "Keep your eyes on the stars, and your feet on the ground."
      , author: "Theodore Roosevelt" },
    { quote: "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears.", author: "Chantal Sutherland" },
    { quote: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
    { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { quote: "You don’t have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
    { quote: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Change your thoughts and you change your world.", author: "Norman Vincent Peale" },
    { quote: "Don’t limit your challenges. Challenge your limits.", author: "Unknown" },
    { quote: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
    { quote: "Dream it. Wish it. Do it.", author: "Unknown" },
    { quote: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.", author: "Unknown" }
  ];

  function quotes_M() {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const index = ((month - 1) + (day - 1)) % quotes.length;
    const selectedQuote = quotes[index];
    document.getElementById('quote').innerText = selectedQuote.quote;
    document.getElementById('author').innerText = selectedQuote.author;
  }
  quotes_M();

 