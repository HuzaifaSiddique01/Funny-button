document.getElementById('noBtn').addEventListener('click', (e) => {
    let vertical = Math.floor(Math.random() * (85 - -56) + -56)
    let hirozontal = Math.floor(Math.random() * (74 - -24) + -24)
    e.target.style.transform = `translate(${hirozontal}px, ${vertical}px)`
  
  })
  
  document.getElementById('yesBtn').addEventListener('click', (e) => {
    e.target.parentNode.style.display = 'none';
    document.querySelector('img').style.display = 'block';
    document.querySelector('h3').innerText = 'MUjHe Pata THa !';
  
  })