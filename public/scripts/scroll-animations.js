// Garantir que o DOM está carregado antes de executar
document.addEventListener('DOMContentLoaded', function() {
  
  // Configurar o IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Opcional: parar de observar após animar
          observer.unobserve(entry.target);
        }
      });
    },
    { 
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px' // Anima um pouco antes de entrar na tela
    }
  );

  // Observar todos os elementos com classe .reveal
  const revealElements = document.querySelectorAll(".reveal");
  
  if (revealElements.length > 0) {
    revealElements.forEach((element) => {
      observer.observe(element);
    });
    console.log(`✅ Observando ${revealElements.length} elementos com animação`);
  } else {
    console.warn('⚠️ Nenhum elemento .reveal encontrado');
  }

});