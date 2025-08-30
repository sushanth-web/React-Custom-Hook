// src/App.js
import React from 'react';
import ProductList from './ProductList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-gray-900 text-center">React Fetch with Custom Hook </h1>
        </div>
      </header>

      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;
