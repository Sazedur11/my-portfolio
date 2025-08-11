import { Monitor, Brush, ShoppingCart, Zap } from "lucide-react";
import '../styles/border.css';

const services = [
  {
    icon: <Monitor size={40}/>,
    title: "Custom Website Development",
    description:
      "I build modern, responsive, and SEO-friendly websites that work seamlessly on any device. From personal portfolios to business sites — your ideas, turned into reality.",
  },
  {
    icon: <Brush size={40} />,
    title: "Frontend UI/UX Implementation",
    description:
      "Turn your Figma or XD designs into pixel-perfect, interactive, and accessible web experiences — with smooth animations and user-friendly layouts.",
  },
  {
    icon: <ShoppingCart size={40} />,
    title: "Web App & E-Commerce Solutions",
    description:
      "From feature-rich web applications to scalable online stores — I develop secure, fast, and conversion-focused solutions for your business growth.",
  },
  {
    icon: <Zap size={40} />,
    title: "Website Optimization & Maintenance",
    description:
      "Speed up your site, keep it secure, and ensure everything runs smoothly — with ongoing updates, bug fixes, and performance monitoring.",
  },
];

const Details = () => {
  return (
     <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 ">
          {services.map((service, index) => (
            <div
              key={index}
              className=" rounded-2xl shadow-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl dbox"
            >
             <div className="innerbox">
               <div className="flex justify-center text-themeColor  mb-4">{service.icon}</div>
              <h3 className="text-lg hover:text-themeColor font-semibold mb-3 hover:underline hover:decoration-3">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
             </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Details;
