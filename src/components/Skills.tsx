import React from 'react';

const Skills = () => {
  return (
    <div id='skills' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div>
                <h2 className='text-4xl md:text-5xl text-blue-500'>Technologies I work with:</h2>
                <p className='text-green-500 pt-2'>I have a solid foundation in in web development, specializing in HTML, CSS and Javascript. My experience extends to using frameworks like React and Next.js to create dynamic and user-friendly applications. I'am also proficient in Tailwind CSS for efficient styling and design. With a passion for learning. I stay updated on the latest technologies to ehnance my skill set and contribute effectievly to projects.</p>
            </div>
            <div>
             <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                    <h2>Typescript</h2>
                    <h2>React.js</h2>
                    <h2>Next.js</h2>
                </div>
                <div className='space-y-2'>
                    <h2>Tailwind</h2>
                    <h2>CSS</h2>
                    <h2>Node.js</h2>
                </div>
             </div>
        </div>
        </div>
        

    </div>

  )
}


export default Skills;