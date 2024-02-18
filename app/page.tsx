import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="home-header" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <a href="#" className="text-gray-800 hover:text-gray-600 mr-4">Home</a>
        <a href="#" className="text-gray-800 hover:text-gray-600">Acerca de</a>
      </header>
      <footer className="home-footer">
        <p className="text-center" >Carlos Bocanegra Trejo</p>
      </footer>
    </main>
  );
} 