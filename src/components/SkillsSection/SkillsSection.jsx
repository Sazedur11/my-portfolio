import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiFramer,
  SiBootstrap,
  SiExpress,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  {
    name: "ExpressJs", icon: <SiExpress className="text-gray-900 dark:text-white" />,
  },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  {
    name: "Git & GitHub",
    icon: <FaGithub className="text-gray-800 dark:text-white" />,
  },
  { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
];

const SkillsSection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2 ">
          🚀 <span className="bg-gradient-to-r from-themeColor via-pink-600 to-purple-600 bg-clip-text text-transparent font-bold">My Skills & Technologies</span>
        </h2>
        <p className="mb-10 md:max-w-6/12 mx-auto">A list of all the skills and tech I'm familliar with. I'm especially capable at front-end development and can create visually-stunning websites.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <p className="text-gray-700 dark:text-gray-200 font-medium">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
