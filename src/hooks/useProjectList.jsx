import { w1, w2, w3, w4,portfolio,socialMedia_sociallife, w5, w6, figmaToLandigPage_1, aiArticleSummerizer } from "@/assets"
import { useId } from "react"

const useProjectList = () => {
  

  const projectData = [
    {
      image: aiArticleSummerizer,
      category: 'react js',
      name: "Ai Article Summerizer",
      blurhash:"L8Q,gry=Twy.1VX2w0St2}X2n9WB",
      description: "This is a ai tool that can summerize any article by using their link. You have to just put the link and hit Enter and then get the summerized article",
      link: 'https://ai-article-summerizer-lr9paiowg-riday-mondals-projects.vercel.app/',
      github: 'https://github.com/rdmondal100/ai-article-summerizer',
      id:10
    },
    {
      image: figmaToLandigPage_1,
      category: 'react js',
      name: "Figma to Landing Page",
      blurhash:"L8R3i-%y4-Ev1D00~XIn00-:ICxu",
      description: "This is a landing page created with React.Js, Tailwind CSS, HTML, CSS. This was converted from a figma design. ",
      link: 'https://nexcent-umber.vercel.app/',
      github: 'https://github.com/rdmondal100/landing-page-uisng-react-js',
      id:9
    },
    {
      image: socialMedia_sociallife,
      category: 'react js',
      name: "Social Media",
      blurhash:"LDBMMos=EL~CJS=|^+Ef-pX8Naxa",
      description: "It's a social media application build with React JS, Tailwind CSS, Redux-toolkit, Appwrite (Back-end as a service), Shadcn, Zod(for form validation), and more",
      link: 'https://sociallife-delta.vercel.app/',
      github: 'https://github.com/rdmondal100/social-media-with-react-js',
      id:8
    }
    ,{
      image: portfolio,
      category: 'react js',
      name: "Portfolio Website",
      blurhash:"L68|-X00?c^+xuWlk7Sd01~pn,V|",

      description: "It's a developer portfolio website that is build with react js and tailwind. I used my front-end development skills to build this mobile-friendly responsive website",
      link: 'https://rdmondal.tech',
      github: 'https://github.com/rdmondal100/Portfolio_with_react',
      id:7
  
    },
    {
      image: w1,
      category: 'next js',
      name: "News Blog Website",
      blurhash:"LLDJ9e%2~pIn_N%hNGS6_3%LRiV?",
      description: 'This is a new blog website, buid with Next JS, Tailwind CSS and more. I have build this site to showcase my skills in web development or front-end development.',
      link: '#',
      github: '#',
      id:6
  
    },
    {
      image: w2,
      category: 'react js',
      name: "Education Website",
      blurhash:"LaPsw?_LNZMxs8n+fkoL?^IBWAxu",
      description: 'This is an education website where students and other users can access various details about educational institutions. The site provides comprehensive information on academic curriculums, including course offerings, program structures, and syllabi. Users can also find details on faculty members, admission requirements, campus facilities, extracurricular activities, and upcoming events. Additionally, the website features resources such as study materials, examination schedules, and results. Whether you are a prospective student, current student, or educator, this platform offers valuable insights to help you navigate and succeed in your educational journey.',
      link: '#',
      github: '#',
      id:5
  
    },
    {
      image: w3,
      category: 'react js',
      name: "E-commerce Website",
      blurhash:"L6P?]w.SIwVu1jDis%XN}T%NICoh",
      description: "As a React developer, I built this eCommerce website with a focus on performance, scalability, and user experience. Utilizing React's component-based architecture, the website offers a seamless and dynamic shopping experience for users. ",
      link: '#',
      github: '#',
      id:4
  
    },
    {
      image: w4,
      category: 'next js',
      name: "Business Website",
      blurhash:"LFDe0K~VRo01TGE0xH?IIbIq%1-o",
      description: 'As a developer, I created this business website to feature an innovative Plant App and provide a comprehensive resource center for the users. The website is built with a focus on user experience, performance, and accessibility, leveraging modern web development technologies.',
      link: '#',
      github: '#',
      id:3
  
    },
    {
      image: w5,
      category: 'vanilla js',
      name: "Generall Blog Website",
      blurhash:"L9NAn}D+pJ~q0001-U9E9E-oIA%g",
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
      link: '#',
      github: '#',
      id:2
  
    },
    {
      image: w6,
      category: 'react js',
      name: "Professional Website",
      blurhash:"L4QJiwy40I4T9Ltkxo01TA02x+_M",
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
      link: '#',
      github: '#',
      id:1
  
    },
  ]
  return (
      {projectData}
  )
}

export default useProjectList