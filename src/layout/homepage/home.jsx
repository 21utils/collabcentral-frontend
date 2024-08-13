import { NavLink } from "react-router-dom";

export default function Home() {
  const keyFeatures = [
    {
      id: 1,
      img: "/homePage/keyFeaturesPic1.svg",
      title: "Connect with Professionals",
      desc: "Find and connect with like-minded professionals across various fields.",
    },
    {
      id: 2,
      img: "/homePage/keyFeaturesPic2.svg",
      title: "Manage Project Efficiently",
      desc: "Use your task management and collaboration tools to keep your projects on track.",
    },
    {
      id: 3,
      img: "/homePage/keyFeaturesPic3.svg",
      title: "Showcase Your Portfolio",
      desc: "Create a profile and showcase your work to attract potential collaborators.",
    },
    {
      id: 4,
      img: "/homePage/keyFeaturesPic4.svg",
      title: "Real time Communication",
      desc: "Stay Connected with team members through chat, video conferencing, and file sharing.",
    },
  ];
  return (
    <>
      <nav className="flex justify-between px-14 items-center py-5 sticky top-0 bg-white">
        <h2 className="text-brown text-xl">CollabCentral</h2>

        <div className="flex items-center justify-evenly gap-10 font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) => `${isActive ? "text-brown" : ""}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) => `${isActive ? "text-brown" : ""}`}
          >
            About Us
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) => `${isActive ? "text-brown" : ""}`}
          >
            Community
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) => `${isActive ? "text-brown" : ""}`}
          >
            Help
          </NavLink>
        </div>

        <div className="flex items-center text-sm justify-center gap-4">
          <button className="text-brown">Login</button>
          <button className="bg-brown px-6 py-2 flex items-center justify-center text-gray-50 text-white rounded-full">
            Signup
          </button>
        </div>
      </nav>

      <section className="bg-[url('/homePage/firstHeroImage.svg')] bg-cover bg-center w-full h-screen flex gap-14 flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold text-white">
          Collaborate and Innovate Together
        </h1>
        <div className="flex gap-8 items-center">
          <button className="bg-brown text-white px-5 py-1.5 rounded-full flex items-center justify-center">
            Get Started
          </button>
          <button className="bg-brown text-white px-5 py-1.5 rounded-full flex items-center justify-center">
            Learn More
          </button>
        </div>
      </section>

      {/* key features section */}
      <section className="flex flex-col items-center gap-6 py-10 lg:px-24 justify-center">
        <h3 className="text-3xl font-semibold text-brown">Key Features</h3>

        <div className="grid lg:grid-cols-4">
          {keyFeatures.map((feat) => (
            <div key={feat.id}>
              <img src={feat.img} alt="" />
              <h3 className="font-semibold">{feat.title}</h3>
              <p className="text-gray-900/70 text-sm">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
