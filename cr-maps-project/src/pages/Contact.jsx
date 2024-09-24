import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 shadow-lg">
        <h1 className="text-2xl font-semibold text-center">Contact Us</h1>
      </header>
      <main className="flex-grow p-4 max-w-5xl mx-auto">
        <p>If you have any questions, feel free to reach out to us!</p>
      </main>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2024 Digital Nigeria</p>
      </footer>
    </div>
  );
};

export default Contact;
