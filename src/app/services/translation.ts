import { Injectable, signal, computed } from '@angular/core';

type Language = 'es' | 'en' | 'fr' | 'ca' | 'gl';

export interface JobTranslations {
  title: string;
  company: string;
  description: string[];
}

export interface ProjectTranslations {
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = signal<Language>('es');

  private translations = {
    es: {
      nav_about: 'Sobre mí',
      nav_experience: 'Experiencia',
      nav_projects: 'Mis proyectos',
      nav_contact: 'Contacto',
      hero_subtitle: 'Desarrolladora Frontend dedicada a transformar diseños en experiencias de usuario intuitivas y accesibles, construyendo aplicaciones robustas con tecnología web moderna.',
      hero_button: 'Visita mi LinkedIn',
      hero_cv_button: 'Descargar CV',
      about_title: 'Sobre mí',
      about_p1: 'Empecé en el mundo de la integración social, movida por mis valores y mi vocación de ayudar. Sin embargo, la programación llevaba años llamándome a través de mi entorno, de las conversaciones en casa y de los códigos que veía con curiosidad en las pantallas de mi familia de programadores.',
      about_p2: ['Lo que empezó como un juego —pequeñas bromas en el navegador y extensiones con efectos absurdos— se convirtió en una pasión. Entendí su lema: “','”. Así que di el paso, me formé en Desarrollo de Aplicaciones Multiplataforma y descubrí que este es el lugar donde mi curiosidad, mi lógica y mis ganas de crear encuentran su sitio.'],
      about_motto: 'A programar se aprende programando',
      about_p3: 'Lo que me define es mi motivación, mi rápida capacidad de aprendizaje y un profundo respeto por el oficio. Para mí, no es solo un trabajo: es algo que, sin saberlo, llevo años preparando.',
      experience_title: 'Experiencia',
      projects_title: 'Mis Proyectos',
      contact_title: 'Hablemos',
      contact_p1: 'Estoy buscando activamente nuevas oportunidades y desafíos como desarrolladora. Si crees que mi perfil encaja en tu equipo o proyecto, no dudes en contactarme.',
      footer_text: '© 2025 - Desarrollado con Angular por Alicia Caparrós.',
      job1: { title: 'Programadora', company: 'Premium Numbers', description: ['Desarrollo de un conjunto de extensiones de navegador para Chrome, enfocadas en la optimización de la productividad y la comunicación del usuario.','Implementación de interfaces interactivas para iniciar llamadas y enviar mensajes a través de una API REST de centralita.','Automatización de flujos de trabajo e integración de sistemas CRM utilizando n8n y JavaScript.'] },
      job2: { title: 'Formadora y Desarrolladora de Contenidos Digitales', company: 'COCEDER', description: ['Análisis de las necesidades del usuario para diseñar y adaptar contenidos tecnológicos, asegurando una curva de aprendizaje suave.','Soporte técnico y resolución de problemas a usuarios con distintos niveles de competencia digital.'] },
      project1: { title: 'Portfolio Profesional (Este Proyecto)', description: 'Portfolio personal interactivo desarrollado desde cero con las últimas versiones de Angular para mostrar mis proyectos y habilidades. Incluye modo claro/oscuro y un diseño responsive.' },
      project2: { title: 'ClickToCall - Extensión de Chrome', description: 'Extensión compleja que detecta teléfonos en webs y permite llamar o enviar WhatsApps vía API, inyectando UI dinámica en las páginas.' },
      project3: {
        title: 'Weather App (Angular)',
        description: 'Aplicación web completa para consultar el tiempo en tiempo real, desarrollada con Angular, que incluye un selector de idioma, historial de búsquedas y un diseño responsivo con modo claro/oscuro. Consume datos de una API REST.'
      },
      project4: {
        title: 'Apego Consciente',
        description: 'Aplicación web dedicada a explorar y fomentar el apego consciente, ofreciendo recursos y herramientas para entender las dinámicas de las relaciones y el bienestar emocional. Desarrollada con Angular.'
      }
    },
    en: {
      nav_about: 'About me',
      nav_experience: 'Experience',
      nav_projects: 'My projects',
      nav_contact: 'Contact',
      hero_subtitle: 'Frontend Developer dedicated to transforming designs into intuitive and accessible user experiences, building robust applications with modern web technology.',
      hero_button: 'Visit my LinkedIn',
      hero_cv_button: 'Download CV',
      about_title: 'About Me',
      about_p1: 'I started in the world of social integration, driven by my values and my vocation to help. However, programming had been calling me for years through my environment, from conversations at home, and the code I curiously watched on my family of programmers\' screens.',
      about_p2: ['What began as a game—small pranks in the browser and extensions with absurd effects—became a passion. I understood their motto: “','.” So I took the step, trained in Multi-platform Application Development, and discovered that this is the place where my curiosity, logic, and desire to create find their home.'],
      about_motto: 'You learn to code by coding',
      about_p3: 'What defines me is my motivation, my rapid learning ability, and a deep respect for the craft. For me, this isn\'t just a job: it\'s something I\'ve unknowingly been preparing for for years.',
      experience_title: 'Experience',
      projects_title: 'My Projects',
      contact_title: 'Let\'s Talk',
      contact_p1: 'I am actively looking for new opportunities and challenges as a developer. If you think my profile fits your team or project, do not hesitate to contact me.',
      footer_text: '© 2025 - Developed with Angular by Alicia Caparrós.',
      job1: { title: 'Programmer', company: 'Premium Numbers', description: ['Development of a set of browser extensions for Chrome, focused on optimizing user productivity and communication.','Implementation of interactive interfaces to initiate calls and send messages through a PBX REST API.','Workflow automation and CRM systems integration using n8n and JavaScript.'] },
      job2: { title: 'Trainer and Digital Content Developer', company: 'COCEDER', description: ['Analysis of user needs to design and adapt technological content, ensuring a smooth learning curve.','Technical support and problem-solving for users with different levels of digital competence.'] },
      project1: { title: 'Professional Portfolio (This Project)', description: 'Interactive personal portfolio developed from scratch with the latest versions of Angular to showcase my projects and skills. Features light/dark mode and a responsive design.' },
      project2: { title: 'ClickToCall - Chrome Extension', description: 'Complex extension that detects phone numbers on websites and allows calling or sending WhatsApp messages via API, injecting dynamic UI into the pages.' },
      project3: {
        title: 'Weather App (Angular)',
        description: 'Complete web application to check the weather in real-time, developed with Angular, including a language selector, search history, and a responsive design with light/dark mode. Consumes data from a REST API.'
      },
      project4: {
        title: 'Apego Consciente',
        description: 'Web application dedicated to exploring and fostering conscious attachment, offering resources and tools to understand relationship dynamics and emotional well-being. Developed with Angular.'
      }
    },
    fr: {
      nav_about: 'À propos de moi',
      nav_experience: 'Expérience',
      nav_projects: 'Mes projets',
      nav_contact: 'Contact',
      hero_subtitle: 'Développeuse Frontend dédiée à transformer des designs en expériences utilisateur intuitives et accessibles, en créant des applications robustes avec la technologie web moderne.',
      hero_button: 'Visitez mon LinkedIn',
      hero_cv_button: 'Télécharger CV',
      about_title: 'À Propos de Moi',
      about_p1: 'J\'ai commencé dans le monde de l\'intégration sociale, motivée par mes valeurs et ma vocation d\'aider. Cependant, la programmation m\'appelait depuis des années à travers mon environnement, les conversations à la maison et le code que j\'observais avec curiosité sur les écrans de ma famille de programmeurs.',
      about_p2: ['Ce qui a commencé comme un jeu — des petites blagues dans le navigateur et des extensions aux effets absurdes — est devenu une passion. J\'ai compris leur devise : « ',' ». J\'ai donc franchi le pas, je me suis formée en Développement d\'Applications Multiplateformes et j\'ai découvert que c\'est l\'endroit où ma curiosité, ma logique et mon envie de créer trouvent leur place.'],
      about_motto: 'C\'est en codant qu\'on apprend à coder',
      about_p3: 'Ce qui me définit, c\'est ma motivation, ma capacité d\'apprentissage rapide et un profond respect pour le métier. Pour moi, ce n\'est pas seulement un travail : c\'est quelque chose que, sans le savoir, je prépare depuis des années.',
      experience_title: 'Expérience',
      projects_title: 'Mes Projets',
      contact_title: 'Parlons-en',
      contact_p1: 'Je suis activement à la recherche de nouvelles opportunités et de nouveaux défis en tant que développeuse. Si vous pensez que mon profil correspond à votre équipe ou à votre projet, n\'hésitez pas à me contacter.',
      footer_text: '© 2025 - Développé avec Angular par Alicia Caparrós.',
      job1: { title: 'Programmeuse', company: 'Premium Numbers', description: ['Développement d\'un ensemble d\'extensions de navigateur pour Chrome, axées sur l\'optimisation de la productivité et de la communication de l\'utilisateur.','Implémentation d\'interfaces interactives pour lancer des appels et envoyer des messages via une API REST de central téléphonique.','Automatisation des flux de travail et intégration des systèmes CRM en utilisant n8n et JavaScript.'] },
      job2: { title: 'Formatrice et Développeuse de Contenus Numériques', company: 'COCEDER', description: ['Analyse des besoins des utilisateurs pour concevoir et adapter des contenus technologiques, assurant une courbe d\'apprentissage douce.','Support technique et résolution de problèmes pour des utilisateurs ayant différents niveaux de compétence numérique.'] },
      project1: { title: 'Portfolio Professionnel (Ce Projet)', description: 'Portfolio personnel interactif développé à partir de zéro avec les dernières versions d\'Angular pour présenter mes projets et compétences. Inclut un mode clair/sombre et un design responsive.' },
      project2: { title: 'ClickToCall - Extension Chrome', description: 'Extension complexe qui détecte les numéros de téléphone sur les sites web et permet d\'appeler ou d\'envoyer des messages WhatsApp via une API, en injectant une UI dynamique dans les pages.' },
      project3: {
        title: 'Weather App (Angular)',
        description: 'Application web complète pour consulter la météo en temps réel, développée avec Angular, comprenant un sélecteur de langue, un historique de recherche et un design responsive avec mode clair/sombre. Consomme des données d\'une API REST.'
      },
      project4: {
        title: 'Apego Consciente',
        description: 'Application web dédiée à explorer et à favoriser l\'attachement conscient, offrant des ressources et des outils pour comprendre les dynamiques relationnelles et le bien-être émotionnel. Développée avec Angular.'
      }
    },
    ca: {
      nav_about: 'Sobre mi',
      nav_experience: 'Experiència',
      nav_projects: 'Els meus projectes',
      nav_contact: 'Contacte',
      hero_subtitle: 'Desenvolupadora Frontend dedicada a transformar dissenys en experiències d\'usuari intuïtives i accessibles, construint aplicacions robustes amb tecnologia web moderna.',
      hero_button: 'Visita el meu LinkedIn',
      hero_cv_button: 'Descarregar CV',
      about_title: 'Sobre Mi',
      about_p1: 'Vaig començar al món de la integració social, moguda pels meus valors i la meva vocació d\'ajudar. No obstant això, la programació feia anys que em cridava a través del meu entorn, de les converses a casa i dels codis que veia amb curiositat a les pantalles de la meva família de programadors.',
      about_p2: ['El que va començar com un joc —petites bromes al navegador i extensions amb efectes absurds— es va convertir en una passió. Vaig entendre el seu lema: “','”. Així que vaig fer el pas, em vaig formar en Desenvolupament d\'Aplicacions Multiplataforma i vaig descobrir que aquest és el lloc on la meva curiositat, la meva lògica i les meves ganes de crear troben el seu lloc.'],
      about_motto: 'A programar se n\'aprèn programant',
      about_p3: 'El que em defineix és la meva motivació, la meva ràpida capacitat d\'aprenentatge i un profund respecte per l\'ofici. Per a mi, no és només una feina: és quelcom que, sense saber-ho, porto anys preparant.',
      experience_title: 'Experiència',
      projects_title: 'Els Meus Projectes',
      contact_title: 'Parlem-ne',
      contact_p1: 'Estic buscant activament noves oportunitats i reptes com a desenvolupadora. Si creus que el meu perfil encaixa en el teu equip o projecte, no dubtis a contactar-me.',
      footer_text: '© 2025 - Desenvolupat amb Angular per Alicia Caparrós.',
      job1: { title: 'Programadora', company: 'Premium Numbers', description: ['Desenvolupament d\'un conjunt d\'extensions de navegador per a Chrome, enfocades a l\'optimització de la productivitat i la comunicació de l\'usuari.','Implementació d\'interfícies interactives per iniciar trucades i enviar missatges a través d\'una API REST de centraleta.','Automatització de fluxos de treball i integració de sistemes CRM utilitzant n8n i JavaScript.'] },
      job2: { title: 'Formadora i Desenvolupadora de Continguts Digitals', company: 'COCEDER', description: ['Anàlisi de les necessitats de l\'usuari per a dissenyar i adaptar continguts tecnològics, assegurant una corba d\'aprenentatge suau.','Suport tècnic i resolució de problemes a usuaris amb diferents nivells de competència digital.'] },
      project1: { title: 'Portfolio Professional (Aquest Projecte)', description: 'Portfolio personal interactiu desenvolupat des de zero amb les últimes versions d\'Angular per a mostrar els meus projectes i habilitats. Inclou mode clar/fosc i un disseny responsive.' },
      project2: { title: 'ClickToCall - Extensió de Chrome', description: 'Extensió complexa que detecta telèfons en webs i permet trucar o enviar missatges de WhatsApp via API, injectant UI dinàmica a les pàgines.' },
      project3: {
        title: 'Weather App (Angular)',
        description: 'Aplicació web completa per a consultar el temps en temps real, desenvolupada amb Angular, que inclou un selector d\'idioma, historial de cerques i un disseny responsiu amb mode clar/fosc. Consumeix dades d\'una API REST.'
      },
      project4: {
        title: 'Apego Consciente',
        description: 'Aplicació web dedicada a explorar i fomentar l\'apego conscient, oferint recursos i eines per a entendre les dinàmiques de les relacions i el benestar emocional. Desenvolupada amb Angular.'
      }
    },
    gl: { // TODO: Reemplazar estos textos con las traducciones correctas al gallego
      nav_about: 'Sobre min',
      nav_experience: 'Experiencia',
      nav_projects: 'Os meus proxectos',
      nav_contact: 'Contacto',
      hero_subtitle: 'Desenvolvedora Frontend dedicada a transformar deseños en experiencias de usuario intuitivas e accesibles, construíndo aplicacións robustas con tecnoloxía web moderna.',
      hero_button: 'Visita o meu LinkedIn',
      hero_cv_button: 'Descargar CV',
      about_title: 'Sobre min',
      about_p1: 'Empecei no mundo da integración social, movida polos meus valores e a miña vocación de axudar. Sen embargo, a programación levaba anos chamándome a través do meu entorno, das conversas na casa e dos códigos que vía con curiosidade nas pantallas da miña familia de programadores.',
      about_p2: ['O que empezou como un xogo —pequenas bromas no navegador e extensións con efectos absurdos— converteuse nunha paixón. Entendín o seu lema: “','”. Así que din o paso, formeime en Desenvolvemento de Aplicacións Multiplataforma e descubrín que este é o lugar onde a miña curiosidade, a miña lóxica e as miñas ganas de crear atopan o seu sitio.'],
      about_motto: 'A programar apréndese programando',
      about_p3: 'O que me define é a miña motivación, a miña rápida capacidade de aprendizaxe e un profundo respecto polo oficio. Para min, non é só un traballo: é algo que, sen sabelo, levo anos preparando.',
      experience_title: 'Experiencia',
      projects_title: 'Os Meus Proxectos',
      contact_title: 'Falemos',
      contact_p1: 'Estou a buscar activamente novas oportunidades e desafíos como desenvolvedora. Se cres que o meu perfil encaixa no teu equipo ou proxecto, non dubides en contactarme.',
      footer_text: '© 2025 - Desenvolvido con Angular por Alicia Caparrós.',
      job1: { title: 'Programadora', company: 'Premium Numbers', description: ['Desenvolvemento dun conxunto de extensións de navegador para Chrome, enfocadas na optimización da produtividade e a comunicación do usuario.','Implementación de interfaces interactivas para iniciar chamadas e enviar mensaxes a través dunha API REST de centraliña.','Automatización de fluxos de traballo e integración de sistemas CRM utilizando n8n e JavaScript.'] },
      job2: { title: 'Formadora e Desenvolvedora de Contidos Dixitais', company: 'COCEDER', description: ['Análise das necesidades do usuario para deseñar e adaptar contidos tecnolóxicos, asegurando unha curva de aprendizaxe suave.','Soporte técnico e resolución de problemas a usuarios con distintos niveis de competencia dixital.'] },
      project1: { title: 'Portfolio Profesional (Este Proxecto)', description: 'Portfolio persoal interactivo desenvolvido desde cero coas últimas versións de Angular para amosar os meus proxectos e habilidades. Inclúe modo claro/escuro e un deseño responsive.' },
      project2: { title: 'ClickToCall - Extensión de Chrome', description: 'Extensión complexa que detecta teléfonos en webs e permite chamar ou enviar WhatsApps vía API, inxectando UI dinámica nas páxinas.' },
      project3: {
        title: 'Weather App (Angular)',
        description: 'Aplicación web completa para consultar o tempo en tempo real, desenvolvida con Angular, que inclúe un selector de idioma, historial de buscas e un deseño responsivo con modo claro/escuro. Consume datos dunha API REST.'
      },
      project4: {
        title: 'Apego Consciente',
        description: 'Aplicación web dedicada a explorar e fomentar o apego consciente, ofrecendo recursos e ferramentas para entender as dinámicas das relacións e o benestar emocional. Desenvolvida con Angular.'
      }
    }
  };

  public t = computed(() => this.translations[this.currentLanguage()]);

  public setLanguage(lang: Language) {
    this.currentLanguage.set(lang);
  }
}