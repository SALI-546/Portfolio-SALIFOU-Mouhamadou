import ras from "../assets/images/ras.webp";
import joke from "../assets/images/joke.webp";
import lofi from "../assets/images/lofi.webp";
import blog from "../assets/images/blog.webp";
import docAid from "../assets/images/docAid.webp";
import LifeInsureEase from "../assets/images/lifeinsureease.webp";
import Portfolio from "../assets/images/portfolio.webp"
import CartManagementSystem from "../assets/images/cart-management-system.webp"
const data = [
    {
        name: "Cart Management System",
        type: "WebApp",
        url: "http://shoppingmhd.free.nf/?i=1",
        github: "https://github.com/SALI-546/shopping-cart",
        image: CartManagementSystem,
        slug: "cart-management-system",
        description: "Cart Management System is a simple and efficient web application for managing an online shopping cart.",
        tech: ['HTML', 'Javascript', 'Css', 'php','Bootstrap', ]
        
    },
    {
        name: "WEB Platforme",
        type: "Website",
        url: "https://web-learning-platform.vercel.app/courses",
        github: "https://github.com/SALI-546/Web-learning-platform",
        image: LifeInsureEase,
        slug: "lifeinsureease",
        description: "A user-friendly web application designed to enhance online learning experiences. It features an intuitive interface for navigating and managing educational content effectively. ",
        tech: ['HTML', 'Javascript', 'Css',  'Reactjs']

    },
    
    {
        name: "to-do-list-groupe-frml",
        type: "Website",
        url: "https://to-do-list-groupe-frml.vercel.app/",
        github: 'https://github.com/SALI-546/TO-DO-LIST-GROUPE-FRML/tree/main',
        image: docAid,
        slug: "docaid",
        description: "A simple application for managing tasks, offering an intuitive interface to organize and track your daily tasks.",
        tech: ['HTML', 'Javascript', 'CSS', ]
    },
    {
        name: "Weather App",
        type: "WebApp",
        url: "https://application-meteo.vercel.app/",
        github: "https://github.com/SALI-546/APPLICATION-METEO",
        image: blog,
        slug: "devblogs",
        description: "WeatherApp is an intuitive web application that provides real-time weather forecasts. It allows users to search for and view current and upcoming weather conditions for any city in the world.",
        tech: ['HTML', 'Javascript', 'Css', ' bootstrap', 'API openweathermap', ]
    },
    {
        name: "Frontend Mentor",
        type: "projet defis",
        url: "https://projet-defis-pront-end.vercel.app/",
        github: "https://github.com/SALI-546/projet-defis-pront-end-",
        image: ras,
        slug: "ras",
        description: "Frontend Mentor - Interactive Comments Section is a dynamic user interface that allows users to post, reply, and manage comments intuitively. ",
        tech: ['HTML', 'Javascript', 'Css',]
    },
    {
        name: "REACT-EXP-deploy",
        type: "WebApp",
        url: "https://react-exp-deploy.vercel.app/",
        github: "https://github.com/SALI-546/REACT-EXP-deploy",
        image: joke,
        slug: "joke",
        description: "A local file manager for displaying various media types in a web application, similar to Google Drive, Microsoft OneDrive, and Apple iCloud.",
        tech: ['React', 'Javascript', 'Css', 'html',]
    },

    {
        name: "Simple-teaching-platform",
        type: "Website",
        url: "https://simple-teaching-platform.vercel.app/",
        github: "https://github.com/SALI-546/Simple-teaching-platform",
        image: lofi,
        slug: "lofibeats",
        description: "A straightforward and intuitive platform designed to facilitate online learning",
        tech: ['HTML', 'Javascript', 'Css', ]
    },
]

export function getData(){
    return data;
}