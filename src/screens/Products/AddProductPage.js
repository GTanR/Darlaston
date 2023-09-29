import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import './addproducts.css';

function AddProductPage() {
    const [product, setProduct] = useState({
        title: '',
        description: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
          ...product,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Product Data:', product);
      };

    return (
        <div id="addproduct">
            <div id="header">
                <Link id="back" to="/products">&larr;</Link>
                <h5>Add Product</h5>
            </div>
                <form id="form1" onSubmit={handleSubmit}>
                    <div className='form-container'>
                        <div className='firsthalf'>
                            <div className='section1'>
                                <div>
                                    <label htmlFor="title">Title</label><br />
                                    <input
                                        placeholder='Enter your product name'
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={product.title}
                                        onChange={handleChange}
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="description">Description</label><br />
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={product.description}
                                        onChange={handleChange}
                                        required />
                                </div>
                            </div>
                            <div className='section2'>
                                <div>
                                    <label htmlFor="media">Media</label>
                                    <input
                                        type="file"
                                        id="media"
                                        name="media"
                                        accept="image/*"
                                        onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className='sh'>
                            <div className='secondhalf'>
                                <div>
                                    <label htmlFor="status">Status</label><br />
                                    <select
                                        id="status"
                                        name="status"
                                        value={product.status}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="category">Category</label><br />
                                    <input
                                        type="text"
                                        id="category"
                                        name="category"
                                        value={product.category}
                                        onChange={handleChange}
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="cost">Cost</label><br />
                                    <input
                                        type="number"
                                        id="cost"
                                        name="cost"
                                        value={product.cost}
                                        onChange={handleChange}
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="inventory">Inventory</label><br />
                                    <input
                                        type="number"
                                        id="inventory"
                                        name="inventory"
                                        value={product.inventory}
                                        onChange={handleChange}
                                        required />
                                </div>
                            </div>
                            <div className='buttons'>
                                <button type="submit">Save</button>
                                <button type="reset">Discard</button>
                            </div>
                        </div>
                    </div>
                </form>
        </div>
     );
}

export default AddProductPage;
