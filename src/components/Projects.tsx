import { title } from 'process'
import React from 'react'
import Heading from './Heading';
import Card from './Card';


const data = [
{
    id: 0,
    title: "Hello world",
    desc: "A HTML and NextJS based project use as my first project",
    img: "/hello.jpg",
    tags: ["HTML", "Node", "CSS", "Typescript"],
},
{
    id: 1,
    title: "home page",
    desc: "A HTML and NectJS home page with buttons also style with CSS",
    img: "/home.jpg",
    tags: ["HTML", "Next", "CSS", "Typescript"],
},
{
    id: 2,
    title: "about and contact",
    desc: "A HTML based project using CSS and linking pages with home page",
    img: "/navbar.jpg",
    tags: ["HTML", "Next", "CSS", "Typescript"]
},
{
    id: 3,
    title: "Students Cards",
    desc: "Project developing with NextJS and tailwind CSS creating students Cards",
    img: "/cards.jpg",
    tags: ["HTML", "Node", "Tailwind CSS", "Typescript"],
},
];


const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='My Projects' />
        <div className='grid gap-10 xl-gap-0 xl-gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
    </div>

  )
  
};

export default Projects