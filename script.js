function wpp() {
    var click = window.document.getElementById('#wpp') 
        window.open("https://wa.me/+5531998113342", '_blank')
    
};
function insta() {
    var click = window.document.getElementById('#insta')
    window.open("https://instagram.com/fce_serralheria", '_blank')
};
function face() {
    var click = window.document.getElementById('#face')
        window.open("https://www.facebook.com/profile.php?id=61556399964491&mibextid=ZbWKwL", '_blank')
};
function email() {
    var email = "fceserralheria@gmail.com"
    var mailto_link = 'mailto:' + email
    window = window.open(mailto_link, 'emailWindow')
};
function call() {
    var call = "+5531998113342"
    var callto_number = 'callto:' + call
    window = window.open(callto_number, 'callWindow' )
}
function home() {
    var click = window.document.getElementById('#home')
    window.location.href = '#inicio'
};
function sobre() {
    var click = window.document.getElementById('#sobre')
    window.location.href = '#about'
};
function services() {
    var click = window.document.getElementById('#serviços')
    window.location.href = '#job'
};
function fotos() {
    var click = window.document.getElementById('#fotos')
    window.location.href = '#photo'
};
function localiza() {
    var click = window.document.getElementById('#localiza')
    window.location.href = '#local'
};
function ctt() {
    var click = window.document.getElementById('#ctt')
    window.location.href = '#tell'
}

document.addEventListener("DOMContentLoaded", function() {
    var menu = document.querySelector('.menu');
    var lastScrollTop = 0;
    function checkInitialScroll() {
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll <= 0) {
            // Se a página estiver no topo, exiba o menu
            menu.classList.add('active');
        }
    }

    // Verificar a posição inicial da página ao carregar
    checkInitialScroll();
  
    window.addEventListener("scroll", function() {
      var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop) {
        // Rolar para baixo
        menu.classList.remove('active');
      } else {
        // Rolar para cima
        menu.classList.add('active');
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
    
   
  });
  
  

 /* var counter = 1;
  setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 54){
          counter = 1;
      }
  }, 5000);*/


const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const totalSlides = 58; // Total de slides
    let currentSlide = 1; // Slide atual

    // Evento de clique para o botão anterior
    prevBtn.addEventListener("click", function() {
        currentSlide = (currentSlide === 1) ? totalSlides : currentSlide - 1;
        updateSlider();
    });

    // Evento de clique para o botão próximo
    nextBtn.addEventListener("click", function() {
        currentSlide = (currentSlide === totalSlides) ? 1 : currentSlide + 1;
        updateSlider();
    });

    function updateSlider() {
        // Desmarca todos os botões de navegação automática
        for (let i = 1; i <= totalSlides; i++) {
            document.getElementById("radio" + i).checked = false;
        }
        // Marca o botão correspondente ao slide atual
        document.getElementById("radio" + currentSlide).checked = true;
    }

    function toggleMenu() {
        var menu = document.getElementById('menu');
        menu.classList.toggle('active');
    }
    

// Função para rolar para o topo da página
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Adiciona um efeito de rolagem suave
    });
  }
  
  // Mostra ou esconde o botão de "scroll to top" dependendo da posição da página
  window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("btnScrollToTop").style.display = "block";
    } else {
      document.getElementById("btnScrollToTop").style.display = "none";
    }
  }

  // Função para fechar o menu quando clicar fora dele
function closeMenuOnClickOutside(event) {
    var menu = document.getElementById('menu');
    var menuToggle = document.querySelector('.menu-toggle');

    // Verifica se o clique não está dentro do menu ou do botão de alternância do menu
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        // Se o clique estiver fora do menu, fecha o menu
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    }
}

// Adiciona um event listener para escutar por cliques em todo o documento
document.addEventListener('click', closeMenuOnClickOutside);


// Função para fechar o menu quando a página é rolada
function closeMenuOnScroll() {
    var menu = document.getElementById('menu');

    // Verifica se o menu está aberto
    if (menu.classList.contains('active')) {
        // Fecha o menu
        menu.classList.remove('active');
    }
}

// Adiciona um event listener para escutar por rolagens na página
window.addEventListener('scroll', closeMenuOnScroll);
