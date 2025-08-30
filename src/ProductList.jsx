// src/components/ProductList.js
import React from 'react';
import useFetch from './useFetch';

function ProductList() {
  const { data, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products');

  if (loading) return <div className="text-center text-lg mt-10 animate-pulse text-blue-500">Loading products...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">Error: {error}</div>;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">🛍️ Trending Products</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg hover:shadow-xl transition-shadow rounded-lg overflow-hidden flex flex-col"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-48 object-cover"
              onError={(e) => (e.target.src = 'https://via.placeholder.com/300')}
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">{product.title}</h3>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.description}</p>
              <div className="mt-auto">
                <p className="text-xl font-bold text-blue-600">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
