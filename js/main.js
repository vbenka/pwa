window.onload = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      //.then((reg) => console.log('sw registered', reg))
      .catch((err) => console.log('sw not registered', err));
  }
}