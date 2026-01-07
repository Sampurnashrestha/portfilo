import Img from "../assets/about.jpeg";

const About = () => {
  return (
     
    <div className="min-h-screen min-w-full flex flex-col-reverse lg:flex-row gap-9 pt-[130px] px-[25px] lg:px-[40px] bg-gradient-to-br from-blue-90 to-purple-90">
    
      <div className="pl-53   ">
        <img
          src={Img}
          alt="about_profile"
          className="w-[100px] h-[100px] lg:w-[400px] lg:h-[400px] rounded-full object-cover"
        />
      </div>
      

      <div className="w-[600px] pl-4 mt-24">
        <h1 className="font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-6xl text-left">
          About me
        </h1>
        <p className="pt-4 text-xl text-justify text-gray-600">
          Hi, I'm{" "}
          <span className="font-bold text-black">Sampurna Shrestha </span> — a
          React learner and Front-End Developer. I love creating clean,
          responsive, and user-friendly websites using React and Tailwind CSS.
          Every project helps me learn, grow, and build better digital
          experiences.
        </p>
      </div>
      
    </div>
    
  );
};

export default About;
