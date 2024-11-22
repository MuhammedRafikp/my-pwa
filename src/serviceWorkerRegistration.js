// Register the service worker
export function register() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        // Get the service worker file from the public directory
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        // Register the service worker
        navigator.serviceWorker
          .register(swUrl)
          .then((registration) => {
            console.log('Service Worker registered with scope: ', registration.scope);
          })
          .catch((error) => {
            console.error('Service Worker registration failed: ', error);
          });
      });
    }
  }
  
  // Unregister the service worker (for development mode)
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready
        .then((registration) => {
          registration.unregister();
        })
        .catch((error) => {
          console.error('Service Worker unregister failed: ', error);
        });
    }
  }
  