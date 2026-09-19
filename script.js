// Mobile nav toggle
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', function(){
    var isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  navLinks.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ navLinks.classList.remove('open'); });
  });

  // One-time terminal typing sequence
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lines = [
    { prompt: '$ whoami', out: 'Adhiraj Pratap Singh' },
    { prompt: '$ role', out: 'Full-Stack Developer (MERN) · BCA Student' },
    { prompt: '$ based_in', out: 'Lucknow, Uttar Pradesh, India' },
    { prompt: '$ status', out: 'Open to entry-level opportunities' }
  ];
  var body = document.getElementById('terminalBody');

  function renderStatic(){
    body.innerHTML = lines.map(function(l){
      return '<div class="line"><span class="prompt">'+l.prompt+'</span><span class="out">'+l.out+'</span></div>';
    }).join('');
  }

  function typeSequence(){
    var lineIndex = 0;
    function nextLine(){
      if(lineIndex >= lines.length){ return; }
      var l = lines[lineIndex];
      var wrap = document.createElement('div');
      wrap.className = 'line';
      var promptEl = document.createElement('span');
      promptEl.className = 'prompt';
      wrap.appendChild(promptEl);
      var cursor = document.createElement('span');
      cursor.className = 'cursor';
      wrap.appendChild(cursor);
      body.appendChild(wrap);

      var i = 0;
      var typer = setInterval(function(){
        promptEl.textContent = l.prompt.slice(0, i+1);
        i++;
        if(i >= l.prompt.length){
          clearInterval(typer);
          cursor.remove();
          var outEl = document.createElement('span');
          outEl.className = 'out muted';
          outEl.textContent = l.out;
          wrap.appendChild(outEl);
          lineIndex++;
          setTimeout(nextLine, 260);
        }
      }, 28);
    }
    nextLine();
  }

  if(reduceMotion){ renderStatic(); } else { typeSequence(); }

  // Flip card: tap/click toggle for touch devices
  var flipCard = document.getElementById('flipCard');
  if (flipCard) {
    flipCard.addEventListener('click', function(){
      flipCard.classList.toggle('flipped');
    });
    flipCard.addEventListener('keydown', function(e){
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        flipCard.classList.toggle('flipped');
      }
    });
  }