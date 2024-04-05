


import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from "@/components/ProjectCard";
import { BiMerge } from "react-icons/bi";
import { w1, w2, w3, w4 } from "@/assets"
const projectData = [
  {
    image: w1,
    category: 'react js',
    name: "Nex Website",
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, totam? Ex, assumenda.',
    link: '/',
    github: '/'
  },
  {
    image: w4,
    category: 'vanila js',
    name: "Hotel Website",
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, totam? Ex, assumenda.',
    link: '/',
    github: '/'
  },
  {
    image: w1,
    category: 'react js',
    name: "Hospital Website",
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, totam? Ex, assumenda.',
    link: '/',
    github: '/'
  },
  {
    image: w2,
    category: 'next js',
    name: "Gym Website",
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, totam? Ex, assumenda.',
    link: '/',
    github: '/'
  },
  {
    image: w3,
    category: 'react js',
    name: "School Website",
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, totam? Ex, assumenda.',
    link: '/',
    github: '/'
  },
  {
    image: w4,
    category: 'next js',
    name: "Ecommerce Website",
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, totam? Ex, assumenda.',
    link: '/',
    github: '/'
  },
]

const uniqueCategories = ["all projects", ...new Set(projectData.map((item) => item.category))];

const Projects = () => {
  const [categories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter(project => (
    category === 'all projects' ? true : project.category === category
  ));

  return (
    <section className="min-h-screen py-12 px-2 md:px-4 xl:px-6">
      <div className="mx-auto flex flex-col">
        <div className="section-title">
          <BiMerge className="section-logo" />
          <h2 className="anim">My Projects</h2>
        </div>
        {/* Tabs */}
        <div className="flex w-full justify-center items-center sm:px-2">
          <Tabs defaultValue={category} className="md:px-5">
            <TabsList className="flex justify-between xl:h-12 font-general_font md:max-w-[600px] max-w-[450px] mx-auto tablist">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  onClick={() => setCategory(category)}
                  value={category}
                  className="xl:text-xl text-base md:text-lg trigger capitalize">{category}</TabsTrigger>
              ))}
            </TabsList>
            {/* Tabs content */}
            <div className="xl:mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center mt-5 md:mt-7">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.name} cardStyles="max-w-full" project={project} />
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Projects;
