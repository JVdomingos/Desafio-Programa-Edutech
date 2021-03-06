var cursosLista = document.getElementById("cursos__lista-serie");

var sextoESetimo = document.getElementById("6e7");
var oitavoENono = document.getElementById("8e9");
var primeiraSerie = document.getElementById("1S");
var segundSerie = document.getElementById("2S");
var terceiraSerie = document.getElementById("3S");

var divConteudoAlternativo2e3 = document.getElementById("conteudo-alternativo-2e3");

var scratchImg1 = document.getElementById("scratch-img1");
var scratchImg2 = document.getElementById("scratch-img2");
var appInventorImg = document.getElementById("app-inventor-img");
var constructImg = document.getElementById("construct-img");
var html5Img = document.getElementById("html5-img");
var css3Img = document.getElementById("css3-img");
var javascriptImg = document.getElementById("javascript-img");
var bootstrapImg = document.getElementById("bootstrap-img");
var reactNativeImg = document.getElementById("react-native-img");
var javaImg = document.getElementById("java-img");
var jdbcImg = document.getElementById("jdbc-img");
var backendImg = document.getElementById("backend-img");
var dataScienceImg = document.getElementById("data-science-img");

function mudaConteudo6e7() {

    var titulo = document.getElementById("cursos-detalhes__titulo");
    var textoExplicativo = document.getElementById("texto-explicativo");
    var trilhaConteudo01 = document.getElementById("trilha-conteudo01");
    var trilhaConteudo02 = document.getElementById("trilha-conteudo02");
    var trilhaConteudo03 = document.getElementById("trilha-conteudo03");
    var trilhaConteudo04 = document.getElementById("trilha-conteudo04");
    var trilhaConteudo05 = document.getElementById("trilha-conteudo05");
    var trilhaConteudo06 = document.getElementById("trilha-conteudo06");
    var trilhaConteudo07 = document.getElementById("trilha-conteudo07");
    var trilhaConteudo08 = document.getElementById("trilha-conteudo08");
    var trilhaConteudo09 = document.getElementById("trilha-conteudo09");
    var trilhaConteudo10 = document.getElementById("trilha-conteudo10");
    var trilhaConteudo11 = document.getElementById("trilha-conteudo11");
    var trilhaConteudo12 = document.getElementById("trilha-conteudo12");
    var trilhaConteudo13 = document.getElementById("trilha-conteudo13");
    var trilhaConteudo14 = document.getElementById("trilha-conteudo14");
    var trilhaConteudo15 = document.getElementById("trilha-conteudo15");
    var trilhaConteudo16 = document.getElementById("trilha-conteudo16");
    var trilhaConteudo17 = document.getElementById("trilha-conteudo17");
    var trilhaConteudo18 = document.getElementById("trilha-conteudo18");
    var trilhaConteudo19 = document.getElementById("trilha-conteudo19");
    var trilhaConteudo20 = document.getElementById("trilha-conteudo20");
    var trilhaConteudo21 = document.getElementById("trilha-conteudo21");
    var trilhaConteudo22 = document.getElementById("trilha-conteudo22");
    var trilhaConteudo23 = document.getElementById("trilha-conteudo23");
    var trilhaConteudo24 = document.getElementById("trilha-conteudo24");
    var trilhaConteudo25 = document.getElementById("trilha-conteudo25");
    var trilhaConteudo26 = document.getElementById("trilha-conteudo26");
    var trilhaConteudo27 = document.getElementById("trilha-conteudo27");
    var trilhaConteudo28 = document.getElementById("trilha-conteudo28");
    var trilhaConteudo29 = document.getElementById("trilha-conteudo29");

    titulo.textContent = "Games e Anima????es";
    textoExplicativo.textContent = "N??s aprenderemos a desenvolver jogos 2D, aprendendo desde a concep????o do tema do jogo, passando pelo seu funcionamento, analisando as regras do jogo e desenvolvendo toda a parte visual de anima????o, cria????o dos personagens e a programa????o para o funcionamento do jogo. Poder??o desenvolver efeitos especiais nas anima????es, aprender??o a f??sica de funcionamento dos personagens, integra????o com multim??dias, tudo com uma aplica????o que funcione atrav??s da internet, como o Scratch e depois passaremos para o AppInventor.";
    trilhaConteudo01.textContent = "Scratch: Programando seu jogo 2D Parte 1";
    trilhaConteudo02.textContent = "Scratch 3: Recursos avan??ados de um jogo 2D Parte 2";
    trilhaConteudo03.textContent = "??ngulos 1: Criando um jogo com matem??tica";
    trilhaConteudo04.textContent = "??ngulos 2: Desenvolvendo um jogo mais complexo";
    trilhaConteudo05.textContent = "Scratch Anima????o 1: Anima????es para um jogo 2D";
    trilhaConteudo06.textContent = "Scratch Anima????o 2: Dando vida a um cen??rio e retrabalhando sprites";
    trilhaConteudo07.textContent = "Scratch Efeitos Visuais: Programando e mixando efeitos especiais";
    trilhaConteudo08.textContent = "Futebol Manager 1: Lidere a sele????o";
    trilhaConteudo09.textContent = "Futebol Manager 2: Evoluindo a estrat??gia";
    trilhaConteudo10.textContent = "Futebol Manager 3: Criando um jogo mais complexo";
    trilhaConteudo11.textContent = "Scratch: Criando um rob?? g??nio";
    trilhaConteudo12.textContent = "Troco 1: O jogo da venda";
    trilhaConteudo13.textContent = "Troco 2: Desafios com decimais na computa????o";
    trilhaConteudo14.textContent = "Scratch: Seu jogo com f??sica e gravidade";
    trilhaConteudo15.textContent = "Scratch: F??sica e efeitos especiais";
    trilhaConteudo16.textContent = "Storytelling: Contando hist??rias com Scratch";
    trilhaConteudo17.textContent = "Scratch: Desenvolvendo um jogo de cobran??a de P??nalti";
    trilhaConteudo18.textContent = "Cifra de C??sar: Criptografando e descriptografando textos";
    trilhaConteudo19.textContent = "App Inventor: Sabre Jedi";
    trilhaConteudo20.textContent = "App Inventor 2: Compartilhamento e trabalhando com m??dias";
    trilhaConteudo21.textContent = "App Inventor 3: Conectando seu aplicativo a web e outros apps";

    trilhaConteudo22.classList.add("invisivel");
    trilhaConteudo23.classList.add("invisivel");
    trilhaConteudo24.classList.add("invisivel");
    trilhaConteudo25.classList.add("invisivel");
    trilhaConteudo26.classList.add("invisivel");
    trilhaConteudo27.classList.add("invisivel");
    trilhaConteudo28.classList.add("invisivel");
    trilhaConteudo29.classList.add("invisivel");

    scratchImg1.classList.remove("invisivel");
    scratchImg2.classList.remove("invisivel");
    appInventorImg.classList.remove("invisivel");
    constructImg.classList.add("invisivel");
    html5Img.classList.add("invisivel");
    css3Img.classList.add("invisivel");
    javascriptImg.classList.add("invisivel");
    bootstrapImg.classList.add("invisivel");
    reactNativeImg.classList.add("invisivel");
    javaImg.classList.add("invisivel");
    jdbcImg.classList.add("invisivel");
    backendImg.classList.add("invisivel");

    divConteudoAlternativo2e3.classList.add("invisivel");
}

function mudaConteudo8e9() {
    var titulo = document.getElementById("cursos-detalhes__titulo");

    var textoExplicativo = document.getElementById("texto-explicativo");

    var trilhaConteudo01 = document.getElementById("trilha-conteudo01");
    var trilhaConteudo02 = document.getElementById("trilha-conteudo02");
    var trilhaConteudo03 = document.getElementById("trilha-conteudo03");
    var trilhaConteudo04 = document.getElementById("trilha-conteudo04");
    var trilhaConteudo05 = document.getElementById("trilha-conteudo05");
    var trilhaConteudo06 = document.getElementById("trilha-conteudo06");
    var trilhaConteudo07 = document.getElementById("trilha-conteudo07");
    var trilhaConteudo08 = document.getElementById("trilha-conteudo08");
    var trilhaConteudo09 = document.getElementById("trilha-conteudo09");
    var trilhaConteudo10 = document.getElementById("trilha-conteudo10");
    var trilhaConteudo11 = document.getElementById("trilha-conteudo11");
    var trilhaConteudo12 = document.getElementById("trilha-conteudo12");
    var trilhaConteudo13 = document.getElementById("trilha-conteudo13");
    var trilhaConteudo14 = document.getElementById("trilha-conteudo14");
    var trilhaConteudo15 = document.getElementById("trilha-conteudo15");
    var trilhaConteudo16 = document.getElementById("trilha-conteudo16");
    var trilhaConteudo17 = document.getElementById("trilha-conteudo17");
    var trilhaConteudo18 = document.getElementById("trilha-conteudo18");
    var trilhaConteudo19 = document.getElementById("trilha-conteudo19");
    var trilhaConteudo20 = document.getElementById("trilha-conteudo20");
    var trilhaConteudo21 = document.getElementById("trilha-conteudo21");
    var trilhaConteudo22 = document.getElementById("trilha-conteudo22");
    var trilhaConteudo23 = document.getElementById("trilha-conteudo23");
    var trilhaConteudo24 = document.getElementById("trilha-conteudo24");
    var trilhaConteudo25 = document.getElementById("trilha-conteudo25");
    var trilhaConteudo26 = document.getElementById("trilha-conteudo26");
    var trilhaConteudo27 = document.getElementById("trilha-conteudo27");
    var trilhaConteudo28 = document.getElementById("trilha-conteudo28");
    var trilhaConteudo29 = document.getElementById("trilha-conteudo29");

    titulo.textContent = "Games e Anima????es";

    textoExplicativo.textContent = "N??s aprenderemos a desenvolver jogos 2D, aprendendo desde a concep????o do tema do jogo, passando pelo seu funcionamento, analisando as regras do jogo e desenvolvendo toda a parte visual de anima????o, cria????o dos personagens e a programa????o para o funcionamento do jogo. Poder??o desenvolver efeitos especiais nas anima????es, aprender??o a f??sica de funcionamento dos personagens, integra????o com multim??dias, tudo com uma aplica????o que funcione atrav??s da internet, como o Scratch e depois passaremos para o AppInventor e tamb??m ser?? utilizado Construct e JavaScript para fazer o nosso jogo rodar em ambiente de plataforma.";
    
    trilhaConteudo01.textContent = "Scratch: Programando seu jogo 2D Parte 1";
    trilhaConteudo02.textContent = "Scratch 3: Recursos avan??ados de um jogo 2D Parte 2";
    trilhaConteudo03.textContent = "??ngulos 1: Criando um jogo com matem??tica";
    trilhaConteudo04.textContent = "??ngulos 2: Desenvolvendo um jogo mais complexo";
    trilhaConteudo05.textContent = "Scratch Anima????o 1: Anima????es para um jogo 2D";
    trilhaConteudo06.textContent = "Scratch Anima????o 2: Dando vida a um cen??rio e retrabalhando sprites";
    trilhaConteudo07.textContent = "Scratch Efeitos Visuais: Programando e mixando efeitos especiais";
    trilhaConteudo08.textContent = "Futebol Manager 1: Lidere a sele????o";
    trilhaConteudo09.textContent = "Futebol Manager 2: Evoluindo a estrat??gia";
    trilhaConteudo10.textContent = "Futebol Manager 3: Criando um jogo mais complexo";
    trilhaConteudo11.textContent = "Scratch: Criando um rob?? g??nio";
    trilhaConteudo12.textContent = "Troco 1: O jogo da venda";
    trilhaConteudo13.textContent = "Troco 2: Desafios com decimais na computa????o";
    trilhaConteudo14.textContent = "Scratch: Seu jogo com f??sica e gravidade";
    trilhaConteudo15.textContent = "Scratch: F??sica e efeitos especiais";
    trilhaConteudo16.textContent = "Storytelling: Contando hist??rias com Scratch";
    trilhaConteudo17.textContent = "Scratch: Desenvolvendo um jogo de cobran??a de P??nalti";
    trilhaConteudo18.textContent = "Cifra de C??sar: Criptografando e descriptografando textos";
    trilhaConteudo19.textContent = "App Inventor: Sabre Jedi";
    trilhaConteudo20.textContent = "App Inventor 2: Compartilhamento e trabalhando com m??dias";
    trilhaConteudo21.textContent = "App Inventor 3: Conectando seu aplicativo a web e outros apps";

    trilhaConteudo22.classList.remove("invisivel");
    trilhaConteudo23.classList.remove("invisivel");
    trilhaConteudo24.classList.remove("invisivel");
    trilhaConteudo25.classList.remove("invisivel");
    trilhaConteudo26.classList.remove("invisivel");
    trilhaConteudo27.classList.remove("invisivel");
    trilhaConteudo28.classList.remove("invisivel");
    trilhaConteudo29.classList.remove("invisivel");

    scratchImg1.classList.remove("invisivel");
    scratchImg2.classList.remove("invisivel");
    appInventorImg.classList.remove("invisivel");
    constructImg.classList.remove("invisivel");
    html5Img.classList.add("invisivel");
    css3Img.classList.add("invisivel");
    javascriptImg.classList.remove("invisivel");
    bootstrapImg.classList.add("invisivel");
    reactNativeImg.classList.add("invisivel");
    javaImg.classList.add("invisivel");
    jdbcImg.classList.add("invisivel");
    backendImg.classList.add("invisivel");  

    divConteudoAlternativo2e3.classList.add("invisivel");
}

function mudaConteudoPrimeiraSerie() {
    var titulo = document.getElementById("cursos-detalhes__titulo");

    var textoExplicativo = document.getElementById("texto-explicativo");

    var trilhaConteudo01 = document.getElementById("trilha-conteudo01");
    var trilhaConteudo02 = document.getElementById("trilha-conteudo02");
    var trilhaConteudo03 = document.getElementById("trilha-conteudo03");
    var trilhaConteudo04 = document.getElementById("trilha-conteudo04");
    var trilhaConteudo05 = document.getElementById("trilha-conteudo05");
    var trilhaConteudo06 = document.getElementById("trilha-conteudo06");
    var trilhaConteudo07 = document.getElementById("trilha-conteudo07");
    var trilhaConteudo08 = document.getElementById("trilha-conteudo08");
    var trilhaConteudo09 = document.getElementById("trilha-conteudo09");
    var trilhaConteudo10 = document.getElementById("trilha-conteudo10");
    var trilhaConteudo11 = document.getElementById("trilha-conteudo11");
    var trilhaConteudo12 = document.getElementById("trilha-conteudo12");
    var trilhaConteudo13 = document.getElementById("trilha-conteudo13");
    var trilhaConteudo14 = document.getElementById("trilha-conteudo14");
    var trilhaConteudo15 = document.getElementById("trilha-conteudo15");
    var trilhaConteudo16 = document.getElementById("trilha-conteudo16");
    var trilhaConteudo17 = document.getElementById("trilha-conteudo17");
    var trilhaConteudo18 = document.getElementById("trilha-conteudo18");
    var trilhaConteudo19 = document.getElementById("trilha-conteudo19");
    var trilhaConteudo20 = document.getElementById("trilha-conteudo20");
    var trilhaConteudo21 = document.getElementById("trilha-conteudo21");
    var trilhaConteudo22 = document.getElementById("trilha-conteudo22");
    var trilhaConteudo23 = document.getElementById("trilha-conteudo23");
    var trilhaConteudo24 = document.getElementById("trilha-conteudo24");
    var trilhaConteudo25 = document.getElementById("trilha-conteudo25");
    var trilhaConteudo26 = document.getElementById("trilha-conteudo26");
    var trilhaConteudo27 = document.getElementById("trilha-conteudo27");
    var trilhaConteudo28 = document.getElementById("trilha-conteudo28");
    var trilhaConteudo29 = document.getElementById("trilha-conteudo29");

    titulo.textContent = "FRONT-END com HTML e CSS";

    textoExplicativo.textContent = "Neste curso vamos aprender como a l??gica de programa????o funciona e vamos aplic??-la na constru????o de p??ginas e site utilizando a tecnologia HMTL5 e CSS3, que s??o as tecnologias de base utilizadas hoje no mercado de trabalho. Depois que tivermos conhecimento sobre as bases vamos avan??ar para algumas ferramentas que nos auxiliam no desenvolvimento mais r??pido de p??ginas, sites e at?? mesmo ambientes completos, como portais, e para isso vamos utilizar ferramentas como Flexbox e Bootstrap e para concluir o nosso curso faremos um projeto completo desde a base ??s p??ginas, passando para um estudo de layout para que nosso site rode em v??rios tipos de dispositivos desde computadores at?? smartphones. contemplando as diversas t??cnicas e tecnologias para desenvolvimento de FRONT-END, que temos no mercado.";
    
    trilhaConteudo01.textContent = "L??gica de programa????o I: Os primeiros programas com JavaScript e HTML";
    trilhaConteudo02.textContent = "L??gica de programa????o II: Pratique com desenhos, anima????es e um jogo";
    trilhaConteudo03.textContent = "HTML5 e CSS3 parte 1: A primeira p??gina da Web";
    trilhaConteudo04.textContent = "HTML5 e CSS3 parte 2: Posicionamento, listas e navega????o";
    trilhaConteudo05.textContent = "HTML5 e CSS3 parte 3: Trabalhando com formul??rios e tabelas";
    trilhaConteudo06.textContent = "HTML5 e CSS3 parte 4: Avan??ando no CSS";
    trilhaConteudo07.textContent = "CSS Grid: Simplificando layouts";
    trilhaConteudo08.textContent = "Flexbox: Posicione elementos na tela";
    trilhaConteudo09.textContent = "Bootstrap: Cria????o de uma single-page responsiva";
    trilhaConteudo10.textContent = "Bootstrap 4: Criando uma landing page responsiva";
    trilhaConteudo11.textContent = "Arquitetura CSS: Descomplicando os problemas";
    trilhaConteudo12.textContent = "Acessibilidade web parte 1: Tornando seu front-end inclusivo";
    trilhaConteudo13.textContent = "Acessibilidade web parte 2: Componentes acess??veis com um pouco de JavaScript";
    trilhaConteudo14.textContent = "HTTP: Entendendo a web por baixo dos panos";
    trilhaConteudo15.textContent = "Vetores e Anima????o com SVG: Trabalhando com CSS e JavaScript";
    trilhaConteudo16.textContent = "Layouts Responsivos: Trabalhando com layouts mobile";
    trilhaConteudo17.textContent = "Front-end: Projeto de conclus??o";

    trilhaConteudo18.classList.add("invisivel");
    trilhaConteudo19.classList.add("invisivel");
    trilhaConteudo20.classList.add("invisivel");
    trilhaConteudo21.classList.add("invisivel");
    trilhaConteudo22.classList.add("invisivel");
    trilhaConteudo23.classList.add("invisivel");
    trilhaConteudo24.classList.add("invisivel");
    trilhaConteudo25.classList.add("invisivel");
    trilhaConteudo26.classList.add("invisivel");
    trilhaConteudo27.classList.add("invisivel");
    trilhaConteudo28.classList.add("invisivel");
    trilhaConteudo29.classList.add("invisivel");

    scratchImg1.classList.add("invisivel");
    scratchImg2.classList.add("invisivel");
    appInventorImg.classList.add("invisivel");
    constructImg.classList.add("invisivel");
    html5Img.classList.remove("invisivel");
    css3Img.classList.remove("invisivel");
    javascriptImg.classList.remove("invisivel");
    bootstrapImg.classList.remove("invisivel");
    reactNativeImg.classList.add("invisivel");
    javaImg.classList.add("invisivel");
    jdbcImg.classList.add("invisivel");
    backendImg.classList.add("invisivel");

    divConteudoAlternativo2e3.classList.add("invisivel");
}

function mudaConteudoSegundaSerie() {
    var titulo = document.getElementById("cursos-detalhes__titulo");

    var textoExplicativo = document.getElementById("texto-explicativo");

    var trilhaConteudo01 = document.getElementById("trilha-conteudo01");
    var trilhaConteudo02 = document.getElementById("trilha-conteudo02");
    var trilhaConteudo03 = document.getElementById("trilha-conteudo03");
    var trilhaConteudo04 = document.getElementById("trilha-conteudo04");
    var trilhaConteudo05 = document.getElementById("trilha-conteudo05");
    var trilhaConteudo06 = document.getElementById("trilha-conteudo06");
    var trilhaConteudo07 = document.getElementById("trilha-conteudo07");
    var trilhaConteudo08 = document.getElementById("trilha-conteudo08");
    var trilhaConteudo09 = document.getElementById("trilha-conteudo09");
    var trilhaConteudo10 = document.getElementById("trilha-conteudo10");
    var trilhaConteudo11 = document.getElementById("trilha-conteudo11");
    var trilhaConteudo12 = document.getElementById("trilha-conteudo12");
    var trilhaConteudo13 = document.getElementById("trilha-conteudo13");
    var trilhaConteudo14 = document.getElementById("trilha-conteudo14");
    var trilhaConteudo15 = document.getElementById("trilha-conteudo15");
    var trilhaConteudo16 = document.getElementById("trilha-conteudo16");
    var trilhaConteudo17 = document.getElementById("trilha-conteudo17");
    var trilhaConteudo18 = document.getElementById("trilha-conteudo18");
    var trilhaConteudo19 = document.getElementById("trilha-conteudo19");
    var trilhaConteudo20 = document.getElementById("trilha-conteudo20");
    var trilhaConteudo21 = document.getElementById("trilha-conteudo21");
    var trilhaConteudo22 = document.getElementById("trilha-conteudo22");
    var trilhaConteudo23 = document.getElementById("trilha-conteudo23");
    var trilhaConteudo24 = document.getElementById("trilha-conteudo24");
    var trilhaConteudo25 = document.getElementById("trilha-conteudo25");
    var trilhaConteudo26 = document.getElementById("trilha-conteudo26");
    var trilhaConteudo27 = document.getElementById("trilha-conteudo27");
    var trilhaConteudo28 = document.getElementById("trilha-conteudo28");
    var trilhaConteudo29 = document.getElementById("trilha-conteudo29");

    titulo.textContent = "Desenvolvimento de MOBILE baseado em JavaScript";

    textoExplicativo.textContent = "Neste curso vamos aprender como a l??gica de programa????o funciona e vamos aplic??-la na constru????o de aplicativos MOBILE, iniciando pelos conceitos do que s??o WEB APPs, planejando como as aplica????es podem rodar em diversos tipos de equipamentos, como computadores, tablets ou smartphones garantindo que os aplicativos sejam utilizados pelo maior n??mero de pessoas poss??vel. Vamos trabalhar com a linguagem mais utilizada pelos gigantes da internet, como Google, Amazon e Facebook, estudando a linguagem JavaScript, que hoje ?? a linguagem mais amplamente difundida e utilizada na internet. E, ao final, evoluindo para a linguagem React Native que hoje ?? utilizada para desenvolver diversos aplicativos como Facebook, Instagram e Nubank, mostrando a potencialidade que um aplicativo pode alcan??ar.";
    
    trilhaConteudo01.textContent = "L??gica de programa????o I: Os primeiros programas com JavaScript e HTML";
    trilhaConteudo02.textContent = "L??gica de programa????o II: Pratique com desenhos, anima????es e um jogo";
    trilhaConteudo03.textContent = "HTML5 e CSS3 parte 1: A primeira p??gina da Web";
    trilhaConteudo04.textContent = "HTML5 e CSS3 parte 2: Posicionamento, listas e navega????o";
    trilhaConteudo05.textContent = "HTML5 e CSS3 parte 3: Trabalhando com formul??rios e tabelas";
    trilhaConteudo06.textContent = "HTML5 e CSS3 parte 4: Avan??ando no CSS";
    trilhaConteudo07.textContent = "Web Design Responsivo: P??ginas que se adaptam do mobile ao desk";
    trilhaConteudo08.textContent = "Layouts Responsivos: Trabalhando com layouts mobile";
    trilhaConteudo09.textContent = "JavaScript: Primeiros passos com a linguagem";
    trilhaConteudo10.textContent = "JavaScript: Introdu????o a Orienta????o a Objetos";
    trilhaConteudo11.textContent = "JavaScript: Interfaces e Heran??a em Orienta????o a Objetos";
    trilhaConteudo12.textContent = "React parte 1: Componentes reutiliz??veis para sua webapp";
    trilhaConteudo13.textContent = "React parte 2: Valida????o, Rotas e Integra????o com API";
    trilhaConteudo14.textContent = "React: Boas pr??ticas e refatora????o";
    trilhaConteudo15.textContent = "React Native: Trabalhando com Function components";
    trilhaConteudo16.textContent = "React Native: AsyncStorage e Navega????o";

    trilhaConteudo17.classList.add("invisivel");
    trilhaConteudo18.classList.add("invisivel");
    trilhaConteudo19.classList.add("invisivel");
    trilhaConteudo20.classList.add("invisivel");
    trilhaConteudo21.classList.add("invisivel");
    trilhaConteudo22.classList.add("invisivel");
    trilhaConteudo23.classList.add("invisivel");
    trilhaConteudo24.classList.add("invisivel");
    trilhaConteudo25.classList.add("invisivel");
    trilhaConteudo26.classList.add("invisivel");
    trilhaConteudo27.classList.add("invisivel");
    trilhaConteudo28.classList.add("invisivel");
    trilhaConteudo29.classList.add("invisivel");

    scratchImg1.classList.add("invisivel");
    scratchImg2.classList.add("invisivel");
    appInventorImg.classList.add("invisivel");
    constructImg.classList.add("invisivel");
    html5Img.classList.remove("invisivel");
    css3Img.classList.remove("invisivel");
    javascriptImg.classList.remove("invisivel");
    bootstrapImg.classList.add("invisivel");
    reactNativeImg.classList.remove("invisivel");
    javaImg.classList.add("invisivel");
    jdbcImg.classList.add("invisivel");
    backendImg.classList.add("invisivel");

    divConteudoAlternativo2e3.classList.remove("invisivel");

    var titulo2 = document.getElementById("cursos-detalhes__titulo2");
    
    var textoExplicativo2 = document.getElementById("texto-explicativo2");

    var trilhaConteudo201 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo202 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo203 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo204 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo205 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo206 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo207 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo208 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo209 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo210 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo211 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo212 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo213 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo214 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo215 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo216 = document.getElementById("trilha-conteudo2-01");

    titulo2.textContent = "Data Science (Ci??ncia de Dados)";

    textoExplicativo2.textContent = "Neste curso vamos estudar o assunto que mais cresce na ??rea da tecnologia atualmente. Data Science ?? a ci??ncia que as empresas ter??o necessidade no futuro pr??ximo, visto o volume de dados produzidos, gerados e armazenados por todos na atualidade. As empresas precisam saber o que fazer para processar e extrair as melhores informa????es dessa grande massa de dados gerados atualmente, que ser??o informa????es valiosas para decis??es e mudan??as estrat??gicas para a vida das empresas. Quem ser?? o respons??vel para tratar e processar esses dados e para extrair melhores e mais valiosas informa????es ?? o profissional de Data Science: al??m dos conhecimentos de programa????o, esse profissional consegue tamb??m a ??tica do como trabalhar, organizar e otimizar os dados de uma empresa.";

    trilhaConteudo201.textContent = "L??gica de programa????o I: Os primeiros programas com JavaScript e HTML";
    trilhaConteudo202.textContent = "L??gica de programa????o II: Pratique com desenhos, anima????es e um jogo";
    trilhaConteudo203.textContent = "Python para Data Science: Primeiros passos";
    trilhaConteudo204.textContent = "Python para Data Science: Introdu????o ?? linguagem e Numpy";
    trilhaConteudo205.textContent = "Python para Data Science: Fun????es, pacotes e Pandas b??sico";
    trilhaConteudo206.textContent = "Data Science: Primeiros passos";
    trilhaConteudo207.textContent = "Python Pandas: Tratando e analisando dados";
    trilhaConteudo208.textContent = "Pandas: Formatos diferentes de entrada e sa??da (IO)";
    trilhaConteudo209.textContent = "Data Visualization: Explorando com Seaborn";
    trilhaConteudo210.textContent = "Data Science: Introdu????o ?? an??lise de s??ries temporais";
    trilhaConteudo211.textContent = "Python Scikit-Learn: Regress??o, classifica????o e clustering";
    trilhaConteudo212.textContent = "Corretor Ortogr??fico em Python: Aplicando t??cnicas de NLP";
    trilhaConteudo213.textContent = "Scraping com Python: Coleta de dados na web";

    trilhaConteudo214.classList.add("invisivel");
    trilhaConteudo215.classList.add("invisivel");
    trilhaConteudo216.classList.add("invisivel");

    dataScienceImg.classList.remove("invisivel");
}

function mudaConteudoTerceiraSerie() {
    var titulo = document.getElementById("cursos-detalhes__titulo");

    var textoExplicativo = document.getElementById("texto-explicativo");

    var trilhaConteudo01 = document.getElementById("trilha-conteudo01");
    var trilhaConteudo02 = document.getElementById("trilha-conteudo02");
    var trilhaConteudo03 = document.getElementById("trilha-conteudo03");
    var trilhaConteudo04 = document.getElementById("trilha-conteudo04");
    var trilhaConteudo05 = document.getElementById("trilha-conteudo05");
    var trilhaConteudo06 = document.getElementById("trilha-conteudo06");
    var trilhaConteudo07 = document.getElementById("trilha-conteudo07");
    var trilhaConteudo08 = document.getElementById("trilha-conteudo08");
    var trilhaConteudo09 = document.getElementById("trilha-conteudo09");
    var trilhaConteudo10 = document.getElementById("trilha-conteudo10");
    var trilhaConteudo11 = document.getElementById("trilha-conteudo11");
    var trilhaConteudo12 = document.getElementById("trilha-conteudo12");
    var trilhaConteudo13 = document.getElementById("trilha-conteudo13");
    var trilhaConteudo14 = document.getElementById("trilha-conteudo14");
    var trilhaConteudo15 = document.getElementById("trilha-conteudo15");
    var trilhaConteudo16 = document.getElementById("trilha-conteudo16");
    var trilhaConteudo17 = document.getElementById("trilha-conteudo17");
    var trilhaConteudo18 = document.getElementById("trilha-conteudo18");
    var trilhaConteudo19 = document.getElementById("trilha-conteudo19");
    var trilhaConteudo20 = document.getElementById("trilha-conteudo20");
    var trilhaConteudo21 = document.getElementById("trilha-conteudo21");
    var trilhaConteudo22 = document.getElementById("trilha-conteudo22");
    var trilhaConteudo23 = document.getElementById("trilha-conteudo23");
    var trilhaConteudo24 = document.getElementById("trilha-conteudo24");
    var trilhaConteudo25 = document.getElementById("trilha-conteudo25");
    var trilhaConteudo26 = document.getElementById("trilha-conteudo26");
    var trilhaConteudo27 = document.getElementById("trilha-conteudo27");
    var trilhaConteudo28 = document.getElementById("trilha-conteudo28");
    var trilhaConteudo29 = document.getElementById("trilha-conteudo29");

    titulo.textContent = "Programa????o em JAVA";

    textoExplicativo.textContent = "Neste curso, vamos estudar uma das linguagens de programa????o mais robusta, difundida e utilizada ao longo de d??cadas no mundo da programa????o. Teremos o contato com a linguagem pura desde a utiliza????o para interfaces simples, passando pelo armazenamento de informa????es e at?? o desenvolvimento de uma aplica????o completa. Esse curso poder?? ser a porta de entrada para o mundo da programa????o em Java, onde cada profissional poder?? ter a vis??o para qual ??rea ter?? mais afinidade para se aprofundar e atuar no amplo mercado da programa????o BACK-END.";
    
    trilhaConteudo01.textContent = "L??gica de programa????o I: Os primeiros programas com JavaScript e HTML";
    trilhaConteudo02.textContent = "L??gica de programa????o II: Pratique com desenhos, anima????es e um jogo";
    trilhaConteudo03.textContent = "Java parte 1: Primeiros passos";
    trilhaConteudo04.textContent = "Java parte 2: Introdu????o ?? orienta????o a objetos";
    trilhaConteudo05.textContent = "Java parte 3: Entendendo heran??a e interface";
    trilhaConteudo06.textContent = "Java parte 4: Entendendo exce????es";
    trilhaConteudo07.textContent = "Java parte 5: Pacotes e java.lang";
    trilhaConteudo08.textContent = "Java parte 6: Conhecendo o java.util";
    trilhaConteudo09.textContent = "Java parte 7: Trabalhando com java.io";
    trilhaConteudo10.textContent = "Java e JDBC: Trabalhando com um banco de dados";
    trilhaConteudo11.textContent = "Eclipse: Produtividade Extrema na IDE com Java";
    trilhaConteudo12.textContent = "Threads em Java 1: Programa????o paralela";
    trilhaConteudo13.textContent = "Java e JPA: Otimiza????es com JPA2 e Hibernate";
    trilhaConteudo14.textContent = "Introdu????o ao SQL com MySQL: Manipule e consulte dados";
    trilhaConteudo15.textContent = "Consultas SQL: Avan??ando no SQL com MySQL";

    trilhaConteudo16.classList.add("invisivel");
    trilhaConteudo17.classList.add("invisivel");
    trilhaConteudo18.classList.add("invisivel");
    trilhaConteudo19.classList.add("invisivel");
    trilhaConteudo20.classList.add("invisivel");
    trilhaConteudo21.classList.add("invisivel");
    trilhaConteudo22.classList.add("invisivel");
    trilhaConteudo23.classList.add("invisivel");
    trilhaConteudo24.classList.add("invisivel");
    trilhaConteudo25.classList.add("invisivel");
    trilhaConteudo26.classList.add("invisivel");
    trilhaConteudo27.classList.add("invisivel");
    trilhaConteudo28.classList.add("invisivel");
    trilhaConteudo29.classList.add("invisivel");

    scratchImg1.classList.add("invisivel");
    scratchImg2.classList.add("invisivel");
    appInventorImg.classList.add("invisivel");
    constructImg.classList.add("invisivel");
    html5Img.classList.remove("invisivel");
    css3Img.classList.add("invisivel");
    javascriptImg.classList.remove("invisivel");
    bootstrapImg.classList.add("invisivel");
    reactNativeImg.classList.add("invisivel");
    javaImg.classList.remove("invisivel");
    jdbcImg.classList.remove("invisivel");
    backendImg.classList.remove("invisivel");

    divConteudoAlternativo2e3.classList.remove("invisivel");

    var titulo2 = document.getElementById("cursos-detalhes__titulo2");
    
    var textoExplicativo2 = document.getElementById("texto-explicativo2");

    var trilhaConteudo201 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo202 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo203 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo204 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo205 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo206 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo207 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo208 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo209 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo210 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo211 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo212 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo213 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo214 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo215 = document.getElementById("trilha-conteudo2-01");
    var trilhaConteudo216 = document.getElementById("trilha-conteudo2-01");

    titulo2.textContent = "Programa????o em Python";

    textoExplicativo2.textContent = "Neste curso, vamos estudar a linguagem de programa????o mais querida dos desenvolvedores na atualidade. Com Python, atualmente podemos trabalhar desde aplica????es que manipulam informa????es simples, como dados de hardware, at?? informa????es complexas de alto poder de processamento, como a????es dentro de games. Python ?? uma linguagem em ampla e constante evolu????o e ades??o para aplica????es de pequeno, m??dio e grande porte.";

    trilhaConteudo201.textContent = "L??gica de programa????o I: Os primeiros programas com JavaScript e HTML";
    trilhaConteudo202.textContent = "L??gica de programa????o II: Pratique com desenhos, anima????es e um jogo";
    trilhaConteudo203.textContent = "Python 3 parte 1: Introdu????o ?? nova vers??o da linguagem";
    trilhaConteudo204.textContent = "Python 3 parte 2: Avan??ando na linguagem";
    trilhaConteudo205.textContent = "Python 3: Introdu????o ?? orienta????o a objetos";
    trilhaConteudo206.textContent = "Python 3: Avan??ando na orienta????o a objetos";
    trilhaConteudo207.textContent = "Python 3: Trabalhando com I/O";
    trilhaConteudo208.textContent = "Python: Manipula????o de Strings";
    trilhaConteudo209.textContent = "Python 3: Entendendo o tratamento de erros";
    trilhaConteudo210.textContent = "Python Brasil: Valida????o de dados no padr??o nacional";
    trilhaConteudo211.textContent = "Design Patterns Python I: Boas pr??ticas de programa????o";
    trilhaConteudo212.textContent = "Design Patterns Python II: Boas pr??ticas de programa????o";
    trilhaConteudo213.textContent = "Python Collections parte 1: Listas e tuplas";
    trilhaConteudo214.textContent = "Python Collections parte 2: Conjuntos e dicion??rios";
    trilhaConteudo215.textContent = "Pacman com Python e Pygame: Cen??rio e ator";
    trilhaConteudo216.textContent = "Pacman com Python e Pygame: Colis??o e pontua????o";

    dataScienceImg.classList.add("invisivel");
}


cursosLista.addEventListener("click", function(event) {

    var ativo = document.querySelector(".ativo").classList.remove("ativo");
    var clicado = event.target;
    clicado.classList.add("ativo");

    if(event.target == sextoESetimo) {
        
        mudaConteudo6e7();
    }

    if(event.target == oitavoENono) {
        mudaConteudo8e9();
    }

    if(event.target == primeiraSerie) {
        mudaConteudoPrimeiraSerie();
    }

    if(event.target == segundSerie) {
        mudaConteudoSegundaSerie();
    }

    if(event.target == terceiraSerie) {
        mudaConteudoTerceiraSerie();
    }
})


