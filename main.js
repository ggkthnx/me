if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js');
}

document.getElementById('saveBtn').addEventListener('click', async () => {
  alert('Would save files & note to IndexedDB here.');
});
