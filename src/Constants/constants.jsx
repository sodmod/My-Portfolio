import AddExpense from "../Files/Images/AddExpense.png";
import ToDo_List from "../Files/Images/ToDo_List.png";
import Food_App from "../Files/Images/Food_app.png";

export const person = {
  info: {
    Name: " I AM BADMUS OLUSOLA SODIQ",
    job_title: "Full stack Developer",
    job_entails:
      "FullStack Developer with high level of experience in web and development, building backend logic and creating API.",
    CV:
      "https://docs.google.com/document/d/11WHW0L4xdUnWA9c4WCVWUIToXVpK5LXID7evyKOaOVk/edit?usp=sharing",
  },
  services: {
    service1:
      "Designing and Developing of website and web applications using latest technologies such as React.Js",
    service2:
      "Designing and Developing of website and web applications using latest technologies such as React.Js",
    service3:
      "Designing and Developing of website and web applications using latest technologies such as React.Js",
    service4:
      "Desings and develop beautiful web user interface using various javascript framework like React.Js, HTML &C CSS",
    service5:
      "Develoops software, and web applications using SpringBoot, Jax-rs",
    service6:
      "Designs and edits images, logos, flyers using Figma and Photoshops",
  },
  images: {
    AddExpense,
    ToDo_List,
    Food_App,
  },
  links: {
    AddExpense: "https://sodiq-expenses.netlify.app/",
    ToDo_List: "https://badmus-todo-list.netlify.app/",
    Food_App: "https://badmus-food-order-app.netlify.app/",
  },
};

export const myservice = [
  {
    id: "1",
    speech: person.services.service1,
  },
  {
    id: "2",
    speech: person.services.service2,
  },
  {
    id: "3",
    speech: person.services.service3,
  },
];

export const serviceArrays = [
  {
    id: "1",
    logo: "fa-brands fa-react",
    service: person.services.service4,
  },
  {
    id: "2",
    logo: "fa-brands fa-java",
    service: person.services.service5,
  },
  {
    id: "3",
    logo: "fa-brands fa-figma",
    service: person.services.service6,
  },
];

export const projects = [
  {
    id: "1",
    image: person.images.AddExpense,
    link: person.links.AddExpense,
  },
  {
    id: "2",
    image: person.images.ToDo_List,
    link: person.links.ToDo_List,
  },
  {
    id: "3",
    image: person.images.Food_App,
    link: person.images.Food_App,
  },
];

export const icons = [
  {
    id: "1",
    link: "https://instagram.com/olusola_badmus?igshid=ZmZhODViOGI=",
    icon: "fa-brands fa-instagram",
  },
  {
    id: "2",
    link: "https://github.com/sodmod",
    icon: "fa-brands fa-github",
  },
  {
    id: "3",
    link: "https://wa.me/message/ZHKACXOXT2U5E1",
    icon: "fa-brands fa-whatsapp",
  },
  {
    id: "4",
    link: "https://linkedin.com/in/badmus-sodiq-b75441185/",
    icon: "fa-brands fa-linkedin-in",
  },
  {
    id: "5",
    link: "tel:+2348183337363",
    icon: "fa-solid fa-phone",
  },
  {
    id: "6",
    link: "mailto:horluwatosin1999@gmail.com",
    icon: "fa-solid fa-envelope",
  },
];

export const footer = [
  {
    id: "1",
    head: "About us",
    list: {
      list: "what is your name",
    },
  },
];
