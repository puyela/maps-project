import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import schoolimage from '../assets/img/emmages- (3).jpg'; // Correct image path
import teamone from '../assets/img/team_1.jpg'; // Use the correct filename
import teamtwo from '../assets/img/team_2.jpg'; // Use the correct filename
import teamthree from '../assets/img/team_3.jpg'; // Use the correct filename


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <header className="bg-gradient-to-r from-green-500 to-indigo-500 text-white p-4 shadow-lg">
        <nav className="navbar bg-base-100 shadow-md">
          <div className="flex-1">
            <a className="text-gray-700 normal-case font-bold text-4xl" href="/">Edu Mappr</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 space-x-4 font-bold">
              <li>
                <Link to="/" className="btn">Home</Link>
              </li>
              <li>
                <Link to="/about" className="btn">About Us</Link>
              </li>
              <li>
                <Link to="/map" className="btn btn-primary">View Map</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="flex-grow flex items-center gap-x-32 justify-between p-8 max-w-7xl mx-auto relative">
        {/* Text Section */}
         <div className="flex-1">
          <motion.h2
            className="text-6xl font-bold text-neutral mb-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to the EDU MAPPR
          </motion.h2>
          <motion.p
            className="text-2xl text-neutral mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Discover schools in your area with our interactive map. Our platform provides up-to-date information about local educational institutions, helping you make informed decisions for your child's education.
          </motion.p>
          <Link to="/map" className="btn bg-gradient-to-r from-green-500 to-indigo-500 text-white px-6 py-2 rounded hover:bg-opacity-80 transition duration-300 mb-8">
            Explore
          </Link>
        </div>


        {/* Image Section */}
        <div className="flex-1 relative overflow-hidden">
          <motion.img
            src={schoolimage}
            alt="School Kid"
            className="w-full h-auto rounded-[30px] shadow-2xl translate-x-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </main>

      {/* About Us Section */}
      <section className="bg-gray-100 p-8">
        <h3 className="text-4xl font-bold text-center mb-4">About Us</h3>
        <p className="text-xl text-center mb-8">
          At School Locator, we believe that every child deserves access to quality education. Our mission is to bridge the gap between parents and educational institutions, providing resources and information to help you find the best schools for your needs. Join us in making education accessible for everyone!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center">
            <motion.img
              src={teamone}
              alt="Team Member 1"
              className="w-full rounded-lg shadow-md mb-4"
            />
            <h4 className="text-xl font-bold">Team Member 1</h4>
            <p className="text-center">Role: Description about the team member.</p>
          </div>
          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
            <motion.img
              src={teamtwo}
              alt="Team Member 2"
              className="w-full rounded-lg shadow-md mb-4"
            />
            <h4 className="text-xl font-bold">Team Member 2</h4>
            <p className="text-center">Role: Description about the team member.</p>
          </div>
          {/* Team Member 3 */}
          <div className="flex flex-col items-center">
            <motion.img
              src={teamthree}
              alt="Team Member 3"
              className="w-full rounded-lg shadow-md mb-4"
            />
            <h4 className="text-xl font-bold">Team Member 3</h4>
            <p className="text-center">Role: Description about the team member.</p>
          </div>
        </div>
      </section>


      <footer className="footer p-4 bg-gray-800 justify-center text-white text-center">
        <p>© 2024 Digital Nigeria</p>
      </footer>
    </div>
  );
};

export default Home;
