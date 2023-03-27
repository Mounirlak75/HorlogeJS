// appeler l'heure locale

clock();

// fonction affichr l'heure
function clock() {
  
  //date
  const date = new Date();
  const hours = ((date.getHours()+11)% 12 + 1);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
  // degres
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;
  
  //afiicher
  document.querySelector('.heure').style.transform = `rotate(${hour}deg)`;
  
  document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;
  
  document.querySelector('.seconde').style.transform = `rotate(${second}deg)`;
}

//interval

setInterval(clock, 1000);