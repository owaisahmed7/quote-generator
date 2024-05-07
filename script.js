document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
      "The only way to do great work is to love what you do. - Steve Jobs",
      "Innovation distinguishes between a leader and a follower. - Steve Jobs",
      "Your time is limited, don’t waste it living someone else’s life. - Steve Jobs",
      "The way to get started is to quit talking and begin doing. - Walt Disney",
      "It’s not whether you get knocked down, it’s whether you get up. - Vince Lombardi",
      "Life is what happens when you’re busy making other plans. - John Lennon",
      "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "Don't cry because it's over, smile because it happened. - Dr. Seuss",
      "Believe you can and you're halfway there. - Theodore Roosevelt",
      "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
      "The best way to predict the future is to create it. - Peter Drucker",
      "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
      "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
      "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
      "You are never too old to set another goal or to dream a new dream. - C.S. Lewis"
    ];
  
    function generateQuote() {
      const randomNumber = Math.floor(Math.random() * quotes.length);
      const quote = quotes[randomNumber];
      document.getElementById('quote').innerText = quote;
    }
  
    document.getElementById('new-quote-btn').addEventListener('click', function() {
      document.querySelector('.quote-container').classList.remove('fadeInDown');
      setTimeout(function() {
        generateQuote();
        document.querySelector('.quote-container').classList.add('fadeInDown');
      }, 400);
    });
  
    // Initial quote generation
    generateQuote();
  });
  