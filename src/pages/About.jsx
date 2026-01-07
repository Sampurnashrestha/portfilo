import Img from "../assets/about.jpeg";

const About = () => {
  return (
    <div className="min-h-[700px] lg:min-h-[900px] w-full flex flex-col lg:flex-row-reverse items-center lg:items-start gap-6 lg:gap-9 pt-[100px] lg:pt-[110px] px-5 lg:px-20 bg-gradient-to-br from-blue-90 to-purple-90">
      <div className="  lg:flex-1 mt-8 lg:mt-25 text-center lg:text-left px-2 lg:px-0">
        <h1 className="font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-4xl sm:text-5xl lg:text-6xl">
          About me
        </h1>
        <p className="pt-3 text-base sm:text-lg lg:text-xl text-justify text-gray-600">
          Hi, I'm{" "}
          <span className="font-bold text-black">Sampurna Shrestha</span> — a
          React learner and Front-End Developer. I love creating clean,
          responsive, and user-friendly websites using React and Tailwind CSS.
          Every project helps me learn, grow, and build better digital
          experiences.
        </p>
      </div>
      <div className="flex justify-center lg:justify-start">
        <img
          src={Img}
          alt="about_profile"
          className="w-[250px] h-[250px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[400px] rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default About;
