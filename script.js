document.addEventListener('DOMContentLoaded', function() {
    var countdownElement = document.getElementById('countdown');
    var independenceDayMessage = document.getElementById('independenceDayMessage');
    var count = 10;
  
    var countdownInterval = setInterval(function() {
      count--;
      countdownElement.textContent = count;
      if (count === 0) {
        clearInterval(countdownInterval);
        independenceDayMessage.classList.remove('hidden');
      }
    }, 1000);
  });