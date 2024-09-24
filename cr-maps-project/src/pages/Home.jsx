import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import schoolimage from '../assets/img/emmages- (3).jpg';
import teamone from '../assets/img/team_1.jpg';
import teamtwo from '../assets/img/team_2.jpg';
import goalone from '../assets/img/emmages- (1).jpg';
import goaltwo from '../assets/img/emmages- (2).jpg';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close menu after clicking
  };

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-500 to-indigo-500 text-white shadow-lg">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <a className="text-gray-700 normal-case font-bold text-3xl" href="/">Edu Mappr</a>

          {/* Hamburger Icon */}
          <button className="lg:hidden text-white text-3xl" onClick={toggleMenu}>
            <FaBars />
          </button>

          {/* Navigation Menu (Centered) */}
          <nav className="hidden lg:flex justify-center flex-1 space-x-8">
            <button
              onClick={() => handleScroll('home-section')}
              className="btn btn-ghost text-white px-4 py-2 rounded hover:bg-white hover:text-green-500 transition-all duration-300"
            >
              Home
            </button>
            <button
              onClick={() => handleScroll('about-section')}
              className="btn btn-ghost text-white px-4 py-2 rounded hover:bg-white hover:text-green-500 transition-all duration-300"
            >
              About Us
            </button>
          </nav>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <motion.div
          className="lg:hidden flex flex-col bg-gray-900 p-6 space-y-4 absolute top-16 left-0 right-0 z-50"
          initial={{ opacity: 0, y: '-100%' }}
          animate={isOpen ? { opacity: 1, y: '0%' } : { opacity: 0, y: '-100%' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <button
            onClick={() => handleScroll('home-section')}
            className="text-white text-lg px-4 py-2 rounded hover:bg-gray-700 transition duration-300"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll('about-section')}
            className="text-white text-lg px-4 py-2 rounded hover:bg-gray-700 transition duration-300"
          >
            About Us
          </button>
        </motion.div>
      </header>

      {/* Home Section */}
      <section id="home-section" className="flex-grow flex flex-col-reverse md:flex-row items-center justify-between gap-x-10 p-8 max-w-7xl mx-auto relative">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-neutral mb-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to the EDU MAPPR
          </motion.h2>
          <motion.p
            className="text-lg md:text-2xl text-neutral mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Discover schools in your area with our interactive map.
          </motion.p>
          <button
            onClick={() => navigate('/map')}
            className="btn relative bg-gradient-to-r from-green-500 to-indigo-500 text-white px-6 py-2 rounded hover:bg-opacity-80 transition duration-300 mb-8 shadow-lg overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-transparent opacity-30 animate-glitter"></span>
            <span className="relative z-10">Explore Map</span>
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative overflow-hidden mb-8 md:mb-0">
          <motion.img
            src={schoolimage}
            alt="School Kid"
            className="w-full h-auto rounded-[30px] shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-section" className="bg-gray-100 p-8">
        <motion.h3
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Image 1 */}
          <motion.div
            className="flex items-center justify-center relative h-64 rounded-lg overflow-hidden shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={goalone}
              alt="Goal Image 1"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Image 2 */}
          <motion.div
            className="flex items-center justify-center relative h-64 rounded-lg overflow-hidden shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.img
              src={goaltwo}
              alt="Goal Image 2"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Goals Section */}
        <motion.h4
          className="text-3xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Goals
        </motion.h4>
        <motion.p
          className="text-xl text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our goal is to provide easy access to education resources and help families connect with the best educational institutions in their area.
        </motion.p>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 p-8">
        <motion.h3
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          TEAM
        </motion.h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Team Member 1 */}
          <motion.div
            className="flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={teamone}
              alt="Team Member 1"
              className="w-full lg:w-3/4 rounded-lg shadow-2xl mb-4"
            />
            <h4 className="text-xl font-bold">Team Member 1</h4>
            <p className="text-center lg:text-left">Role: Description about the team member.</p>
          </motion.div>

          {/* Team Member 2 */}
          <motion.div
            className="flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={teamtwo}
              alt="Team Member 2"
              className="w-full lg:w-3/4 rounded-lg shadow-2xl mb-4"
            />
            <h4 className="text-xl font-bold">Team Member 2</h4>
            <p className="text-center lg:text-left">Role: Description about the team member.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
