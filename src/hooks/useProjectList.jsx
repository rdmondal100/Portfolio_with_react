import { w1, w2, w3, w4,portfolio,socialMedia_sociallife, w5, w6 } from "@/assets"

const useProjectList = () => {

  const projectData = [
    {
      image: socialMedia_sociallife,
      category: 'react js',
      name: "Social Media",
      description: "It's a social media application build with React JS, Tailwind CSS, Redux-toolkit, Appwrite (Back-end as a service), Shadcn, Zod(for form validation), and more",
      link: 'https://sociallife-delta.vercel.app/',
      github: '/',
      id:"1"
    },{
      image: portfolio,
      category: 'react js',
      name: "Portfolio Website",
      description: "It's a developer portfolio website that is build with react js and tailwind. I used my front-end development skills to build this mobile-friendly responsive website",
      link: 'https://rdmondal.tech',
      github: '/',
      id:"2"
  
    },
    {
      image: w1,
      category: 'next js',
      name: "News Blog Website",
      description: 'This is a new blog website, buid with Next JS, Tailwind CSS and more. I have build this site to showcase my skills in web development or front-end development.',
      link: '/',
      github: '/',
      id:"3"
  
    },
    {
      image: w2,
      category: 'react js',
      name: "Education Website",
      description: 'This is an education website where students and other users can access various details about educational institutions. The site provides comprehensive information on academic curriculums, including course offerings, program structures, and syllabi. Users can also find details on faculty members, admission requirements, campus facilities, extracurricular activities, and upcoming events. Additionally, the website features resources such as study materials, examination schedules, and results. Whether you are a prospective student, current student, or educator, this platform offers valuable insights to help you navigate and succeed in your educational journey.',
      link: '/',
      github: '/',
      id:"4"
  
    },
    {
      image: w3,
      category: 'react js',
      name: "E-commerce Website",
      description: "As a React developer, I built this eCommerce website with a focus on performance, scalability, and user experience. Utilizing React's component-based architecture, the website offers a seamless and dynamic shopping experience for users. ",
      link: '/',
      github: '/',
      id:"5"
  
    },
    {
      image: w4,
      category: 'next js',
      name: "Business Website",
      description: 'As a developer, I created this business website to feature an innovative Plant App and provide a comprehensive resource center for the users. The website is built with a focus on user experience, performance, and accessibility, leveraging modern web development technologies.',
      link: '/',
      github: '/',
      id:"6"
  
    },
    {
      image: w5,
      category: 'vanilla js',
      name: "Generall Blog Website",
      description: `<p>I developed a blog website using vanilla JavaScript and CSS. The site features a clean, responsive design with a user-friendly interface. Key components include:</p>

      <ul>
        <li><strong>Home Page</strong>: Displays a list of blog posts with titles, dates, and excerpts.</li>
        <li><strong>Navigation Bar</strong>: Simple, intuitive navigation links to Home, About, and Contact pages.</li>
        <li><strong>Post Section</strong>: Dynamically generated blog posts with JavaScript, showcasing how posts can be added and displayed.</li>
        <li><strong>Comments Section</strong>: Allows users to submit comments, which are appended to the post using JavaScript.</li>
        <li><strong>Responsive Design</strong>: Ensures the site looks great on both desktop and mobile devices.</li>
      </ul>
      
      <p>This project highlights my skills in front-end web development, demonstrating my ability to create functional, dynamic web applications using only HTML, CSS, and JavaScript.</p>
      `,
      link: '/',
      github: '/',
      id:"7"
  
    },
    {
      image: w6,
      category: 'react js',
      name: "Ecommerce Website",
      description: `<div class="desc mt-5">
      <p>I designed and developed a professional business website using Tailwind CSS, HTML, and React.js. This website offers a sleek and modern interface tailored to showcase the unique offerings of the business.</p>
    
      <p>Key features of the website include:</p>
    
      <ul>
        <li><strong>Responsive Design:</strong> Utilizing Tailwind CSS, the website is fully responsive and ensures a seamless user experience across various devices and screen sizes.</li>
        
        <li><strong>Custom Components:</strong> Leveraging the power of React.js, custom components were created to enhance user interaction and streamline navigation.</li>
        
        <li><strong>Dynamic Content:</strong> Content is dynamically rendered using React.js, allowing for easy updates and modifications to keep the website current and engaging.</li>
        
        <li><strong>Optimized Performance:</strong> The use of React.js and Tailwind CSS results in a lightweight and fast-loading website, optimizing performance and user satisfaction.</li>
        
        <li><strong>Tailored Styling:</strong> Tailwind CSS was utilized to customize the website's styling, ensuring a cohesive and visually appealing design that aligns with the business's branding and identity.</li>
      </ul>
    
      <p>This project exemplifies my proficiency in front-end web development, showcasing my ability to create visually stunning and functional websites using modern technologies like Tailwind CSS, HTML, and React.js.</p>
    
      <p>
        <a href="#">View Project</a><br>
        <a href="#">GitHub Repository</a>
      </p>
    </div>
    `,
      link: '/',
      github: '/',
      id:"8"
  
    },
  ]
  return (
      {projectData}
  )
}

export default useProjectList