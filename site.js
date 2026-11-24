(function(){
  var top=document.querySelector('.top');
  var hero=document.querySelector('.hero,.a-hero');
  function onScroll(){ if(!top) return; var h=hero?hero.offsetHeight-80:40; top.classList.toggle('solid', window.scrollY>h); }
  onScroll(); window.addEventListener('scroll',onScroll,{passive:true});
  var els=document.querySelectorAll('.rv');
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return;}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}})},{rootMargin:'0px 0px -8% 0px',threshold:0.08});
  els.forEach(function(e){io.observe(e)});
})();
