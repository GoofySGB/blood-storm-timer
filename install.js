// Retire the previous offline app cache; this timer now runs as a website.
if('serviceWorker' in navigator)navigator.serviceWorker.getRegistrations().then(registrations=>Promise.all(registrations.filter(r=>r.scope===new URL('./',location.href).href).map(r=>r.unregister()))).catch(()=>{});
if('caches' in window)caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('blood-storm-app-')).map(k=>caches.delete(k)))).catch(()=>{});
window.addEventListener('pageshow',()=>render());
document.addEventListener('visibilitychange',()=>{if(!document.hidden)render()});
