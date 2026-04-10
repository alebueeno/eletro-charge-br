# Eletro Charge BR - Website Institucional
Acesso ao projeto ao vivo: [https://alebueeno.github.io/eletro-charge-br/](https://alebueeno.github.io/eletro-charge-br/)

## Sobre o Projeto
Este é um projeto fictício desenvolvido primeiramente para fins acadêmicos como trabalho prático da disciplina de Programação Front-End/Análise e Desenvolvimento de Sistemas.

A Eletro Charge BR foi idealizada (originalmente para um trabalho de Administração) como uma empresa de infraestrutura sustentável focada em mobilidade elétrica. O objetivo deste projeto de Front-End foi transformar essa regra de negócio em um Website completo e funcional. O ecossistema evoluiu de uma Landing Page unificada para uma aplicação multi-página, priorizando a narrativa visual, estruturação semântica, arquitetura limpa e a experiência do usuário (UX).

## Tecnologias Utilizadas
Como requisito da avaliação, este projeto foi construído utilizando majoritariamente tecnologias nativas (Vanilla):

- **HTML5:** Estruturação semântica multi-página (uso de tags como `<header>`, `<section>`, `<footer>`, etc).
- **CSS3:** Estilização, responsividade nativa usando *CSS Grid* e *Flexbox*, e animações puras (hover, smooth scroll, transições polidas).
- **JavaScript (Vanilla):** Lógica de interface de usuário assíncrona/dinâmica (por exemplo, interações de navegação mobile e efeitos on-scroll).
- **FontAwesome:** Biblioteca de ícones em fonte.
- **Google Fonts:** Tipografia baseada na família estrutural *Inter*.

## Nova Arquitetura do Código
Para demonstrar práticas de desenvolvimento escalável de Front-End, e refletir a evolução de "Landing Page simples" para um "Site Multipage", o CSS e o JS foram profundamente refatorados e modularizados, agrupando e separando responsabilidades:

### 🧩 Módulos de Estilo (CSS)
- **`global.css`**: Estrutura base da aplicação. Guarda as Variáveis globais (paletas, fontes) e os componentes estruturais repetitivos aplicados a todas as páginas (Cabeçalho/Navbar, Estilo de Botões Base, Rodapé).
- **`home.css`**: Container de estilos específicos exclusivos para os blocos da página `index.html` (Grid de Serviços, Timeline da Homepage, Seção Hero Principal).
- **`estacoes.css`**: Novo layout dedicado exclusivamente à apresentação da página `estacoes.html`.
- **`imagens.css`**: Unificação independente que padroniza os tratamentos, filtros, sombras e encaixe (`object-fit`) de mídias e vetores do projeto inteiro.

### ⚙️ Módulos de Scripts (JS)
- **`global.js`**: Scripts vitais para a estrutura mestre da UI presentes em qualquer página (ex: Controle de Menu Mobile de Navegação).
- **`estacoes.js`**: Scripts fechados cujo escopo importa apenas para interações que ocorrem dentro da tela de estações, poupando a `Home` de rodar JS desnecessário.
