import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './products.css';

function ProductsPage() {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className='heading'>
            <h4>Products</h4>
            <button><Link to = "/addproduct">+ Add Product</Link></button>
      </div>
      <div className='products-box'>
        <ul id="product-tabs" className="nav nav-tabs" role="tablist">
          <li role="presentation" className={activeTab === 'all' ? 'active' : ''}>
            <a href="#all-products" aria-controls="all-section" role="tab" data-toggle="tab" onClick={() => handleTabChange('all')}>
              ALL
            </a>
          </li>
          <li role="presentation" className={activeTab === 'active' ? 'active' : ''}>
            <a href="#active-products" aria-controls="active-section" role="tab" data-toggle="tab" onClick={() => handleTabChange('active')}>
              ACTIVE
            </a>
          </li>
        </ul>
        <div className="tab-content" id="content">
          <div role="tabpanel" className={`tab-pane fade ${activeTab === 'all' ? 'in active' : ''}`} id="all-section">
            {/* Content for the "ALL" tab */}
            <table style={{ borderCollapse: 'separate', borderSpacing: '20px' }}>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Status</th>
                  <th>Inventory</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>Product Name</td>
                    <td>Active</td>
                    <td>10</td>
                    <td>$289.05</td>
                </tr>
                <tr>
                    <td>Product Name</td>
                    <td>Active</td>
                    <td>10</td>
                    <td>$289.05</td>
                </tr>
                <tr>
                    <td>Product Name</td>
                    <td>Active</td>
                    <td>10</td>
                    <td>$289.05</td>
                </tr>
                <tr>
                    <td>Product Name</td>
                    <td>Active</td>
                    <td>10</td>
                    <td>$289.05</td>
                </tr>
                <tr>
                    <td>Product Name</td>
                    <td>Inactive</td>
                    <td>10</td>
                    <td>$289.05</td>
                </tr>
                <tr>
                    <td>Product Name</td>
                    <td>Inactive</td>
                    <td>10</td>
                    <td>$289.05</td>
                </tr>
                <tr>
                    <td>Product Name</td>
                    <td>Inactive</td>
                    <td>10</td>
                    <td>$289.05</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div role="tabpanel" className={`tab-pane fade ${activeTab === 'active' ? 'in active' : ''}`} id="active-section">
            {/* Content for the "ACTIVE" tab */}
            <table style={{ borderCollapse: 'separate', borderSpacing: '20px' }}>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Status</th>
                  <th>Inventory</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>Product Name</td>
                    <td>Active</td>
                    <td>10</td>
                    <td>$289.05</td>
                </tr>
                <tr>
                    <td>Product Name</td>
                    <td>Active</td>
                    <td>10</td>
                    <td>$289.05</td>
                </tr>
                <tr>
                    <td>Product Name</td>
                    <td>Active</td>
                    <td>10</td>
                    <td>$289.05</td>
                </tr>
                <tr>
                    <td>Product Name</td>
                    <td>Active</td>
                    <td>10</td>
                    <td>$289.05</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
