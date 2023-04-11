function bandeira(e) {
  var welcome = document.getElementById("welcome-text");
  var profissao = document.getElementById("profissao");
  var metodologia = document.getElementById("metodologia");
  var desc1 = document.getElementById("desc1");
  var desc2 = document.getElementById("desc2");
  var btn1 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");
  var btn3 = document.getElementById("btn3");
  var titleSkill = document.getElementById("skill-section-title");
  var ferramentas = document.getElementById("ferramentas");
  var mobile = document.getElementById("moveis");
  document.getElementById("projects").style.display = "none";
  document.getElementById("skills-container").style.display = "flex";
  document.getElementById("certifications").style.display = "none";
  if (e === "brasil") {
    welcome.innerHTML = "Seja bem-vindo!";
    profissao.innerHTML = "Desenvolvedor FullStack";
    metodologia.innerHTML = "Metodologias ágeis";
    desc1.innerHTML = `Sou desenvolvedor e docente em cursos técnicos ensinando programação, tenho habilidades com ambas tecnologias voltadas para front-end e back-end, ofereço meu tempo para desenvolver e alavancar os projetos e resultados da empresa, aplicando metodologias ágeis e código limpo na conversação entre máquina e ser humano. Autodidata em momentos que desconheço uma situação e resiliente em situações difíceis.

    Meu objetivo é me tornar um programador cada vez melhor, sabendo que posso oferecer para ótimos desempenhos de forma constante, evoluindo tanto no pessoal como profissional.
    `;

    desc2.innerHTML =
      "Adoro trabalhar com a minha criatividade quando estou programando, o front-end para mim se torna uma tela para pintar onde nem o céu é o limite. Mesmo sabendo que uma pincelada a mais ou a menos pode estragar o quadro, ainda sei os meus limites para tornar algo magnífico.";
    btn1.innerHTML = "Habilidades";
    btn2.innerHTML = "Projetos";
    btn3.innerHTML = "Certificações";
    titleSkill.innerHTML = "Habilidades";
    ferramentas.innerHTML = "Ferramentas";
    localStorage.setItem("brasil", "ok");
    localStorage.removeItem("eua");
  } else {
    welcome.innerHTML = "Hello, welcome!";
    profissao.innerHTML = "Fullstack Developer";
    metodologia.innerHTML = "Agile Methodologies";
    desc1.innerHTML = `I am a developer and teacher in technical courses teaching programming, I have skills with both front-end and back-end technologies, I offer my time to develop and leverage the company's projects and results, applying agile methodologies and clean code in the conversation between machine and human being. Self-taught in times when I don't know a situation and resilient in difficult situations.

    My goal is to become an even better programmer, knowing that I can constantly offer great performances, evolving both personally and professionally.`;
    desc2.innerHTML =
      "I love working with my creativity when I'm programming, the front-end for me becomes a canvas to paint where not even the sky is the limit. Even knowing that one more or less brushstroke can spoil the painting, I still know my limits to make something magnificent.";
    btn1.innerHTML = "Skills";
    btn2.innerHTML = "Projects";
    btn3.innerHTML = "Certifications";
    titleSkill.innerHTML = "Skills";
    ferramentas.innerHTML = "Tools";
    localStorage.setItem("eua", "ok");
    localStorage.removeItem("brasil");
  }
}

function sections(e) {
  let project = document.getElementById("projects");
  let skills = document.getElementById("skills-container");
  let certify = document.getElementById("certifications");
  let titleSkill = document.getElementById("skill-section-title");

  switch (e) {
    case "C":
      credentials();
      certify.style.display = "flex";
      project.style.display = "none";
      skills.style.display = "none";
      if (
        localStorage.getItem("eua") === "ok" ||
        !localStorage.getItem("brasil")
      ) {
        titleSkill.innerHTML = "Certifications";
      } else {
        titleSkill.innerHTML = "Certificações";
      }

      break;
    case "P":
      projects();
      certify.style.display = "none";
      project.style.display = "flex";
      skills.style.display = "none";

      if (
        localStorage.getItem("eua") === "ok" ||
        !localStorage.getItem("brasil")
      ) {
        titleSkill.innerHTML = "Projects";
      } else {
        titleSkill.innerHTML = "Projetos";
      }
      break;
    case "S":
      certify.style.display = "none";
      project.style.display = "none";
      skills.style.display = "flex";

      if (
        localStorage.getItem("eua") === "ok" ||
        !localStorage.getItem("brasil")
      ) {
        titleSkill.innerHTML = "Skills";
      } else {
        titleSkill.innerHTML = "Habilidades";
      }
      break;
  }
}

function credentials() {
  let [i1, i2] = [
    localStorage.getItem("eua") === "ok",
    !localStorage.getItem("brasil"),
  ];

  console.log(i1, i2)
  const cursos = [
    {
      name: "React + Redux",
      link: "https://www.udemy.com/certificate/UC-00e0db79-f472-46bd-ba7d-112456a16ca6/",
      desc:
        i1 || i2
          ? "Developing front-end with JS framework and state management."
          : "Desenvolvendo front-end com framework JS e gerenciamento de estado.",
      data: "Dezembro 28, 2022",
    },
    {
      name: "Api RestFUL",
      link: "https://www.udemy.com/certificate/UC-fe6aba63-08de-4764-98f9-e9dbc375dba3/",
      desc:
        i1 || i2
          ? "Development of APIs with NodeJS, Restify and Mongoose technologies."
          : "Desenvolvimento de APIs com tecnologias NodeJS, Restify e Mongoose.",
      data: "Agosto 13, 2022",
    },
    {
      name: "Git/Github",
      link: "https://www.udemy.com/certificate/UC-fcf98d7d-bc5a-440f-acea-255157e57ca7/",
      desc:
        i1 || i2
          ? "Project versioning using Git and Github + Github pages."
          : "Versionamento de projetos utilizando Git e Github + Github pages.",
      data: "Janeiro 16, 2023",
    },
    {
      name: "IONIC 6",
      link: "https://www.udemy.com/certificate/UC-e7be056c-42c6-48b1-ae9e-6009836ae775/",
      desc:
        i1 || i2
          ? "Mobile development with Angular + IONIC framework version."
          : "Desenvolvimento mobile com Angular + versão framework IONIC.",
      data: "Julho 12, 2022",
    },
    {
      name: "SCRUM na prática",
      link: "https://www.udemy.com/certificate/UC-2e22b451-af2c-44fe-940e-f3db8888b397/",
      desc:
        i1 || i2
          ? "Applying agile Scrum methodology in real and routine environments."
          : "Aplicando metodologia ágil Scrum em hambientes reais e rotineiros.",
      data: "Fevereiro 17, 2023",
    },
    
    {
      name: "Dev NodeJS",
      link: "https://www.udemy.com/certificate/UC-c11eda16-cca6-4f1a-977f-bd1dec41f1ea/",
      desc:
        i1 || i2
          ? "Development APIs with NodeJS and MongoDB database or PostgreSQL."
          : "Desenvolvimento de APIs com NodeJS e banco de dados MongoDB ou PostgreSQL",
      data: "Setembro 23, 2020",
    },
    {
      name: "AWS Practitioner",
      link: "",
      desc:
        i1 || i2
          ? "DEVOPS - Initial practices with AWS framework"
          : "DEVOPS - Práticas iniciais com estrutura AWS",
      data: "Janeiro 6, 2023",
    },
  ];

  let text = "";
  for (let i = 0; i < cursos.length; i++) {
    text +=
      `<a href="` +
      cursos[i].link +
      `" target="_blank">
      <div class="cardCertify">
      <div style="display: flex; justify-content: flex-end">
        <img src="img/certificado.png" class="imgCertify" />
      </div>
      <br />
      <h3 class="cardCertify__title">` +
      cursos[i].name +
      `</h3>
      <p class="cardCertify__content">` +
      cursos[i].desc +
      `
      </p>
      <div class="cardCertify__date">` +
      cursos[i].data +
      `</div>
      <div class="cardCertify__arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height="15"
            width="15"
          >
            <path
              fill="#fff"
              d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
            ></path>
          </svg></div
      >
</div></a>`;
  }

  document.getElementById("certifications").innerHTML = text;
}

function projects() {
  const projetos = [
    {
      name: "Emprega+",
      link: "https://github.com/RodrigoWebDev-BR/App_Emprega_Birigui_SENAC_2022",
      license: "MIT License",
      image: "img/empregaB.png",
      desc: "",
    },
    {
      name: "ACME INC.",
      link: "https://github.com/gustavofusco/acme-inc",
      license: "MIT License",
      image: "img/acme-inc.png",
      desc: "",
    },
    {
      name: "Little Teti",
      link: "https://github.com/gustavofusco/Litte-Teti",
      license: "MIT License",
      image: "img/little.png",
      desc: "",
    },
  ];
  let labelP = "";
  if (localStorage.getItem("eua") === "ok" || !localStorage.getItem("brasil")) {
    projetos[0].desc = "Curriculum management project";
    projetos[1].desc = "Project of a store as training with react";
    projetos[2].desc = "Children's clothing store";
    labelP = "Project";
  } else {
    projetos[0].desc = "Projeto de gestão curricular";
    projetos[1].desc = "Projeto de uma loja virtual com ReactJS";
    projetos[2].desc = "Loja de roupas infantis";
    labelP = "Projeto";
  }

  let text = "";
  for (let i = 0; i < projetos.length; i++) {
    text +=
      `<div class="card">
    <div class="card-top-part">
      <div class="left-part">
        <div class="user-name">
          <p class="name">` +
      projetos[i].name +
      `</p>
          <p class="role">Public</p>
        </div>
        <div class="user-position">
          <p class="position">` +
      projetos[i].desc +
      `</p>
        </div>
      </div>
      
    </div>
    <div class="card-bottom-part">
      <div class="bottom-part">
        <a href="` +
      projetos[i].link +
      `" class="link" target="_blank">
          <span class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </span>
          ` +
      labelP +
      `
        </a>
      </div>
      <div class="bottom-part">
          <span class="icon">
            <img style="width: 24px; height: 24px;" src="img/justice.svg"/>
          </span>
          &nbsp;` +
      projetos[i].license +
      `
      </div>
    </div>
  </div>`;
  }

  document.getElementById("projects").innerHTML = text;
}
