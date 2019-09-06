window.onload = () => {
  
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      console.log(registrations);
    });
  
    navigator.serviceWorker.register('/sw.js')
      .then((reg) => console.log('sw registered'/*, reg*/))
      .catch((err) => console.log('sw not registered'/*, err*/));
  }
}