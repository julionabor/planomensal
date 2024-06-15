function showNotification(message) {
    const notification = document.getElementById("notification");
    const notificationText = document.getElementById("notificationText");
  
    notificationText.textContent = message;
    notification.classList.add("active");
  
    setTimeout(function() {
      notification.classList.remove("active");
    }, 4000); // 7 seconds
  }
  
  function simulateSubscription() {
    setInterval(function() {
        const planos = ['Essentials', 'Deluxe', 'Premium']
        const random = planos[Math.floor(Math.random()*planos.length)]
      showNotification(`Foi feita uma nova subscrição ao Plano ${random}!`);
    }, 12000); // Every 7 seconds
  }
  
  // Start simulating subscriptions
  simulateSubscription();