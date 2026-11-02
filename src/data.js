// Todo o conteúdo do portfólio fica aqui — edite este arquivo para atualizar o site.

export const profile = {
  name: 'Luan Martins Basilio',
  shortName: 'Luan Basilio',
  role: 'Desenvolvedor de Software',
  location: 'Praia Grande, SP',
  email: 'luan_martins_basilio@outlook.com',
  phone: '(13) 99130-9010',
  phoneLink: 'https://wa.me/5513991309010',
  roles: ['Desenvolvedor Web', 'Estudante de Ciência da Computação', 'Entusiasta de Cibersegurança', 'Ex-militar do Exército Brasileiro'],
  links: {
    github: 'https://github.com/LuanMBasilio',
    linkedin: 'https://www.linkedin.com/in/luanmbasilio/',
    tryhackme: 'https://tryhackme.com/p/LittleTyrant',
  },
}

export const about = [
  'Sou estudante do 8º semestre de Ciência da Computação na UNIP e técnico em Informática para Internet pela ETEC. Gosto de transformar problemas em código limpo e funcional — de bots que automatizam comunidades a sistemas de visão computacional.',
  'Antes da tecnologia virar profissão, servi no Exército Brasileiro, onde aprendi disciplina, trabalho em equipe e a manter a calma sob pressão. Hoje levo essa mesma rigidez de processo para o desenvolvimento de software e para o estudo de segurança da informação no TryHackMe.',
]

export const stats = [
  { value: '8º', label: 'semestre de CC' },
  { value: '5+', label: 'projetos públicos' },
  { value: '4', label: 'linguagens' },
  { value: 'EN', label: 'inglês avançado' },
]

export const skillGroups = [
  { title: 'Linguagens', icon: '{ }', items: ['Java', 'C#', 'Python', 'JavaScript', 'SQL'] },
  { title: 'Web', icon: '</>', items: ['HTML5', 'CSS3', 'React', 'Node.js', 'Streamlit'] },
  { title: 'Dados', icon: '⛁', items: ['Modelagem relacional', 'Consultas SQL', 'Normalização', 'JSON'] },
  { title: 'Fundamentos', icon: '∑', items: ['Estruturas de dados', 'Algoritmos', 'POO', 'Boas práticas'] },
  { title: 'Infra & Segurança', icon: '⌁', items: ['Redes TCP/IP', 'LAN / Wi-Fi', 'TryHackMe', 'Softwares de segurança'] },
  { title: 'Ferramentas', icon: '⚙', items: ['Git & GitHub', 'OpenCV', 'discord.js', 'Java Swing'] },
]

export const projects = [
  {
    id: 'fp',
    title: 'FP-Matcher',
    tagline: 'Correspondência de impressões digitais',
    description:
      'Aplicação web em Streamlit que compara duas digitais usando visão computacional: pré-processamento com limiarização de Otsu, extração de pontos-chave com ORB e matching por força bruta com distância de Hamming e teste de razão de Lowe.',
    tags: ['Python', 'OpenCV', 'Streamlit', 'Plotly'],
    category: 'python',
    repo: 'https://github.com/LuanMBasilio/FP-Matcher',
    demo: 'fingerprint',
    featured: true,
  },
  {
    id: 'alice',
    title: 'Alice Bot',
    tagline: 'Bot de Discord para comunidade',
    description:
      'Bot auxiliar do regimento Selva com mais de 15 comandos slash: sistema de encomendas e vendas com fila de pedidos, enquetes, sugestões, denúncias, moderação e utilidades. Persistência em JSON e arquitetura modular por comandos e eventos.',
    tags: ['JavaScript', 'Node.js', 'discord.js'],
    category: 'javascript',
    repo: 'https://github.com/LuanMBasilio/Alice-Bot',
    demo: 'chat',
    featured: true,
  },
  {
    id: 'bj',
    title: 'BlackJack Card Counter',
    tagline: 'Contador Hi-Lo com true count',
    description:
      'Ferramenta em Java que implementa o sistema Hi-Lo de contagem de cartas, calculando a contagem corrente e a contagem real (true count) a partir do número de baralhos restantes. Teste a lógica ao lado!',
    tags: ['Java', 'POO', 'Probabilidade'],
    category: 'java',
    repo: 'https://github.com/LuanMBasilio/BlackJackCardCounter',
    demo: 'cards',
  },
  {
    id: 'sort',
    title: 'Sorteio & Ordenação',
    tagline: 'Benchmark de algoritmos',
    description:
      'Gera 250 números aleatórios e compara o desempenho de Bubble Sort, Insertion Sort e Quick Sort medindo o tempo de execução em nanossegundos. Veja os algoritmos em ação no visualizador.',
    tags: ['Java', 'Algoritmos', 'Complexidade'],
    category: 'java',
    repo: 'https://github.com/LuanMBasilio/Sorteio',
    demo: 'sort',
  },
  {
    id: 'aps',
    title: 'APS — Jogo 2D',
    tagline: 'Jogo arcade em Java Swing',
    description:
      'Jogo 2D desenvolvido como Atividade Prática Supervisionada: o jogador se move pelo cenário coletando pontos coloridos que correspondem a um alvo sorteado, com detecção de colisão AABB, cronômetro de 30 s e placar.',
    tags: ['Java', 'Swing', 'Game Dev'],
    category: 'java',
    repo: 'https://github.com/LuanMBasilio/APS',
    demo: 'game',
  },
]

// Currículo — dados comuns a todas as versões
export const resumeBase = {
  experience: [
    {
      role: 'Soldado EV — Intendência',
      org: 'Exército Brasileiro · 2º GAAAe',
      place: 'Praia Grande, SP',
      period: 'mar/2023 — jan/2024',
      bullets: [
        'Executei inspeções diárias e manutenção preventiva da frota de viaturas, assegurando a disponibilidade operacional da unidade.',
        'Apliquei com rigor normas de segurança, controle e logística de materiais, seguindo procedimentos padronizados.',
        'Operei e mantive equipamentos de artilharia antiaérea, em atividades que exigiam precisão e atenção a detalhes.',
        'Atuei em equipe sob pressão e prazos rígidos, desenvolvendo disciplina, responsabilidade e resiliência.',
      ],
    },
  ],
  education: [
    {
      course: 'Bacharelado em Ciência da Computação',
      org: 'Universidade Paulista (UNIP) — Santos, SP',
      period: 'Cursando 8º semestre · Conclusão prevista: 2026',
    },
    {
      course: 'Técnico em Informática para Internet',
      org: 'ETEC de Praia Grande — Praia Grande, SP',
      period: 'Concluído em 2021',
    },
  ],
  languages: ['Português — nativo', 'Inglês — avançado'],
}

// Versões do currículo por área de foco. Para criar uma nova, adicione um objeto com id e label;
// campos omitidos (experience, education, languages) vêm de resumeBase.
export const resumes = [
  {
    id: 'software',
    label: 'Desenvolvimento de Software',
    headline: 'Desenvolvedor de Software Júnior | Estudante de Ciência da Computação',
    summary:
      'Estudante do 8º semestre de Ciência da Computação (conclusão prevista em 2026) e técnico em Informática para Internet, com projetos práticos em Java, Python e JavaScript — incluindo visão computacional, bots com Node.js e jogos 2D. Experiência no Exército Brasileiro que consolidou disciplina, cumprimento de procedimentos e trabalho em equipe sob pressão. Busco uma oportunidade de estágio ou posição júnior em desenvolvimento de software, onde possa entregar código de qualidade e crescer tecnicamente.',
    projects: [
      { name: 'FP-Matcher', text: 'Comparador de digitais com OpenCV (ORB + Hamming) e interface em Streamlit.' },
      { name: 'Alice Bot', text: 'Bot de Discord em Node.js com 15+ comandos, sistema de pedidos e moderação.' },
      { name: 'Sorteio', text: 'Benchmark de Bubble, Insertion e Quick Sort com medição em nanossegundos.' },
    ],
    skills: [
      { label: 'Linguagens', value: 'Java, C#, Python, JavaScript, SQL' },
      { label: 'Web', value: 'HTML, CSS, React, Node.js, Streamlit' },
      { label: 'Banco de dados', value: 'Modelagem relacional, consultas SQL, normalização' },
      { label: 'Fundamentos', value: 'Estruturas de dados, algoritmos, POO, boas práticas de código' },
      { label: 'Infraestrutura', value: 'Redes (LAN, Wi-Fi, TCP/IP), instalação e configuração de sistemas, drivers e softwares de segurança' },
      { label: 'Ferramentas', value: 'Git, GitHub, OpenCV, discord.js' },
    ],
    extras: ['Estudo contínuo de cibersegurança na plataforma TryHackMe (perfil LittleTyrant)'],
  },
  {
    id: 'web',
    label: 'Desenvolvimento Web',
    headline: 'Desenvolvedor Web Júnior | Front-end & Node.js',
    summary:
      'Técnico em Informática para Internet pela ETEC e estudante do 8º semestre de Ciência da Computação (conclusão prevista em 2026). Construo interfaces com React, HTML e CSS e serviços em Node.js — como este portfólio, uma SPA em React + Vite com deploy automatizado no GitHub Pages, e um bot de Discord com mais de 15 comandos. Do Exército Brasileiro trago disciplina e foco em processo para entregar código organizado e dentro do prazo. Busco estágio ou vaga júnior em desenvolvimento web front-end ou full stack.',
    projects: [
      { name: 'Portfólio pessoal', text: 'SPA em React + Vite com tema claro/escuro, layout responsivo, demos interativas e deploy contínuo via GitHub Actions no GitHub Pages.' },
      { name: 'Alice Bot', text: 'Aplicação Node.js com 15+ comandos slash, fila de pedidos, persistência em JSON e arquitetura modular por comandos e eventos.' },
      { name: 'FP-Matcher', text: 'Aplicação web em Streamlit com visualizações em Plotly para comparar impressões digitais.' },
    ],
    skills: [
      { label: 'Front-end', value: 'React, JavaScript (ES6+), HTML5, CSS3, layout responsivo' },
      { label: 'Back-end', value: 'Node.js, Python (Streamlit), Java, C#' },
      { label: 'Banco de dados', value: 'SQL, modelagem relacional, normalização, JSON' },
      { label: 'Entrega', value: 'Git, GitHub, GitHub Actions, GitHub Pages, Vite' },
      { label: 'Fundamentos', value: 'Estruturas de dados, algoritmos, POO, boas práticas de código' },
    ],
    extras: ['Projetos públicos e versionados no GitHub (github.com/LuanMBasilio)'],
  },
  {
    id: 'cyber',
    label: 'Cibersegurança',
    headline: 'Cibersegurança Júnior | Estudante de Ciência da Computação',
    summary:
      'Estudante do 8º semestre de Ciência da Computação (conclusão prevista em 2026) com estudo contínuo de segurança ofensiva e defensiva na plataforma TryHackMe. Base em redes (TCP/IP, LAN, Wi-Fi), instalação e configuração de sistemas e softwares de segurança, e programação em Python, Java e C# — incluindo um sistema de verificação biométrica com visão computacional. No Exército Brasileiro, atuei sob normas rígidas de segurança, controle de materiais e procedimentos padronizados. Busco estágio ou posição júnior em segurança da informação.',
    experience: [
      {
        role: 'Soldado EV — Intendência',
        org: 'Exército Brasileiro · 2º GAAAe',
        place: 'Praia Grande, SP',
        period: 'mar/2023 — jan/2024',
        bullets: [
          'Apliquei com rigor normas de segurança, controle e logística de materiais, seguindo procedimentos padronizados.',
          'Executei inspeções diárias e manutenção preventiva da frota de viaturas, assegurando a disponibilidade operacional da unidade.',
          'Operei e mantive equipamentos de artilharia antiaérea, em atividades que exigiam precisão e atenção a detalhes.',
          'Atuei em equipe sob pressão e prazos rígidos, desenvolvendo disciplina, responsabilidade e resiliência.',
        ],
      },
    ],
    projects: [
      { name: 'FP-Matcher', text: 'Verificação biométrica de impressões digitais: pré-processamento com Otsu, extração de características com ORB e matching por distância de Hamming com teste de razão de Lowe.' },
      { name: 'Alice Bot', text: 'Bot de Discord com comandos de moderação e sistema de denúncias para a segurança de uma comunidade.' },
    ],
    skills: [
      { label: 'Segurança', value: 'Segurança ofensiva e defensiva (TryHackMe), softwares de segurança' },
      { label: 'Redes', value: 'TCP/IP, LAN, Wi-Fi' },
      { label: 'Sistemas', value: 'Instalação e configuração de sistemas operacionais e drivers' },
      { label: 'Programação', value: 'Python, Java, C#, JavaScript, SQL' },
      { label: 'Ferramentas', value: 'Git, GitHub, OpenCV' },
    ],
    extras: ['Prática contínua em laboratórios do TryHackMe (perfil LittleTyrant)'],
  },
]

export const timeline = [
  { year: '2021', title: 'Técnico em Informática para Internet', org: 'ETEC de Praia Grande', text: 'Primeiro contato profissional com desenvolvimento web, lógica e banco de dados.' },
  { year: '2023', title: 'Soldado EV — Intendência', org: 'Exército Brasileiro · 2º GAAAe', text: 'Manutenção de viaturas, logística e equipamentos antiaéreos. Disciplina e trabalho em equipe.' },
  { year: '2026', title: 'Bacharelado em Ciência da Computação', org: 'UNIP — Santos', text: 'Estruturas de dados, algoritmos, POO, redes e engenharia de software. Conclusão prevista para 2026.' },
  { year: 'Agora', title: 'Projetos & Cibersegurança', org: 'GitHub · TryHackMe', text: 'Construindo projetos práticos e estudando segurança ofensiva e defensiva.' },
]
