function bandeira(e) {
  var welcome = document.getElementById("welcome-text");
  var profissao = document.getElementById("profissao");
  var metodologia = document.getElementById("metodologia");
  var desc1 = document.getElementById("desc1");
  var desc2 = document.getElementById("desc2");
  var btn1 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");
  var titleSkill = document.getElementById("skill-section-title");
  var ferramentas = document.getElementById("ferramentas");
  var mobile = document.getElementById("moveis");

  if (e === "brasil") {
    welcome.innerHTML = "Seja bem-vindo!";
    profissao.innerHTML = "Desenvolvedor FullStack";
    metodologia.innerHTML = "Metodologias ágeis";
    desc1.innerHTML = `Meu nome é Gustavo Sperandio, sou programador há quase dois anos, tenho um amplo conhecimento com <span class="cor">React</span>. Utilizo as tecnologias com <span class="cor">Redux</span> e <span class="cor">React Hooks</span>. <br /> Desenvolvo também back-end, utilizando <span class="cor">NodeJS</span> criando API's RestFUL com middleware <span class="cor">Restify</span> e banco de dados <span class="cor">MongoDB</span>. Tenho conhecimentos básico em metodologias Ágeis, principalmente SCRUM, e mais algumas outras qualificações como <span class="under">FIGMA e AdobeXD</span>`;

    desc2.innerHTML =
      "Adoro trabalhar com a minha criatividade quando estou programando, o front-end para mim se torna uma tela para pintar onde nem o céu é o limite. Mesmo sabendo que uma pincelada a mais ou a menos pode estragar o quadro, ainda sei os meus limites para tornar algo magnífico.";
    btn1.innerHTML = "Habilidades";
    btn2.innerHTML = "Projetos";
    titleSkill.innerHTML = "Minhas habilidades";
    ferramentas.innerHTML = "Ferramentas";
  } else {
    welcome.innerHTML = "Hello, welcome!";
    profissao.innerHTML = "Fullstack Developer";
    metodologia.innerHTML = "Agile Methodologies";
    desc1.innerHTML = `My name is Gustavo Sperandio, I've been a programmer for almost two
       years, I have extensive knowledge with
       <span class="cor">React</span>. Using technologies with
       <span class="cor">Redux</span> and
       <span class="cor">React Hooks</span>.
       <br />
       I also develop back-end using
       <span class="cor">NodeJS</span> creating RestFUL API's with
       <span class="cor">Restify</span> middleware and
       <span class="cor">MongoDB</span> database. I have basic knowledge in
       Agile methodologies, mainly SCRUM, and some other qualifications
       like
       <span class="under">FIGMA and AdobeXD</span>`;
    desc2.innerHTML =
      "I love working with my creativity when I'm programming, the front-end for me becomes a canvas to paint where not even the sky is the limit. Even knowing that one more or less brushstroke can spoil the painting, I still know my limits to make something magnificent.";
    btn1.innerHTML = "Skills";
    btn2.innerHTML = "Projects";
    titleSkill.innerHTML = "My skills";
    ferramentas.innerHTML = "Tools";
  }
}
