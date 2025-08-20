import { FaHtml5 } from "react-icons/fa";

const Skills = () => {
  return (
    <div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Frontend"
        />
        <div className="tab-content border-base-300 p-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
            <FaHtml5 className="text-orange-500 text-4xl mb-3" />
            <h3 className="font-medium text-white">Markup and styling for web pages.</h3>
          </div>
          </div>
          
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Tab 2"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 2
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Tab 3"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 3
        </div>
      </div>
    </div>
  );
};

export default Skills;
