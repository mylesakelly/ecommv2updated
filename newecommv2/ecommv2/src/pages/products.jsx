// THE CODE BELOW FETCHES THE PRODUCTS FROM THE DATABASE WHEN THE SERVER IS RUNNING


// import '../css/products.css';
// import React, { useEffect, useState } from 'react';

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [selectedFilter, setSelectedFilter] = useState('all');

//   useEffect(() => {
//     fetch('http://localhost:5000/productsjson')
//       .then(response => response.json())
//       .then(data => {
//         setProducts(data);
//         setFilteredProducts(data);
//       })
//       .catch(error => {
//         console.error('Error fetching products:', error);
//       });
//   }, []);

//   const handleFilter = (filter) => {
//     setSelectedFilter(filter);
//     if (filter === 'all') {
//       setFilteredProducts(products);
//     } else if (filter === 'plants') {
//       const filtered = products.filter(product =>
//         product.ProductName.toLowerCase().includes('plant')
//       );
//       setFilteredProducts(filtered);
//     } else if (filter === 'trees') {
//       const filtered = products.filter(product =>
//         product.ProductName.toLowerCase().includes('tree')
//       );
//       setFilteredProducts(filtered);
//     } else if (filter === 'price-less-than-50') {
//       const filtered = products.filter(product =>
//         product.Price < 50
//       );
//       setFilteredProducts(filtered);
//     }
//   };

//   return (
//     <div>
//       <div className="filter-buttons">
//         <button
//           className={selectedFilter === 'all' ? 'active' : ''}
//           onClick={() => handleFilter('all')}
//         >
//           All
//         </button>
//         <button
//           className={selectedFilter === 'plants' ? 'active' : ''}
//           onClick={() => handleFilter('plants')}
//         >
//           Plants
//         </button>
//         <button
//           className={selectedFilter === 'trees' ? 'active' : ''}
//           onClick={() => handleFilter('trees')}
//         >
//           Trees
//         </button>
//         <button
//           className={selectedFilter === 'price-less-than-50' ? 'active' : ''}
//           onClick={() => handleFilter('price-less-than-50')}
//         >
//           Price less than $50
//         </button>
//       </div>
//       <ul id="products">
//         {filteredProducts.map(product => (
//           <li key={product.Id}>
//             <img src={product.ProductImage} alt={product.ProductName} />
//             <h2>{product.ProductName}</h2>
//             <h4>{product.Description}</h4>
//             <p>${product.Price.toFixed(2)}</p>
//           </li>
//         ))}
//       </ul>
//           {/* <ProductCard /> */}
//     </div>
//   );
// };

// export default Products;


// THE FOLLOWING CODE FETCHES THE PRODUCTS FROM THE FRONT END SO THAT THE SITE CAN BE DEPLOYED SUCCESSFULLY

import '../css/products.css';
import React, { useEffect, useState } from 'react';
import productsData from '../data/products.json'; // Assuming the JSON file is located in the 'data' directory

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    // Simulating a fetch request by setting the products from the local JSON data
    setProducts(productsData);
    setFilteredProducts(productsData);
  }, []);

  const handleFilter = (filter) => {
    setSelectedFilter(filter);
    if (filter === 'all') {
      setFilteredProducts(products);
    } else if (filter === 'plants') {
      const filtered = products.filter(product =>
        product.ProductName.toLowerCase().includes('plant')
      );
      setFilteredProducts(filtered);
    } else if (filter === 'trees') {
      const filtered = products.filter(product =>
        product.ProductName.toLowerCase().includes('tree')
      );
      setFilteredProducts(filtered);
    } else if (filter === 'price-less-than-50') {
      const filtered = products.filter(product =>
        product.Price < 50
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      <div className="filter-buttons">
        <button
          className={selectedFilter === 'all' ? 'active' : ''}
          onClick={() => handleFilter('all')}
        >
          All
        </button>
        <button
          className={selectedFilter === 'plants' ? 'active' : ''}
          onClick={() => handleFilter('plants')}
        >
          Plants
        </button>
        <button
          className={selectedFilter === 'trees' ? 'active' : ''}
          onClick={() => handleFilter('trees')}
        >
          Trees
        </button>
        <button
          className={selectedFilter === 'price-less-than-50' ? 'active' : ''}
          onClick={() => handleFilter('price-less-than-50')}
        >
          Price less than $50
        </button>
      </div>
      <ul id="products">
        {filteredProducts.map(product => (
          <li key={product.Id}>
            <img src={product.ProductImage} alt={product.ProductName} />
            <h2>{product.ProductName}</h2>
            <h4>{product.Description}</h4>
            <p>${product.Price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;

