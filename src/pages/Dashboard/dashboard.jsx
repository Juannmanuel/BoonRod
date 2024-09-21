import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postNewProduct } from '../../redux/actions';
const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    price: '',
    sizes: [],
    inStock: true,
    discount: false,
    categories: [],
    images: [],
    isSoldOut: false,
    description: ''
  });
  const dispatch = useDispatch()
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleArrayChange = (e, field) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [field]: value.split(',').map((item) => item.trim())
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del producto:', formData);
    dispatch(postNewProduct(formData))
    
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <label style={styles.label}>Nombre del Producto:</label>
        <input
          style={styles.input}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Tipo:</label>
        <input
          style={styles.input}
          type="text"
          name="type"
          value={formData.type}
          onChange={handleInputChange}
          required
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Precio:</label>
        <input
          style={styles.input}
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          step="0.01"
          required
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Tallas (separadas por comas):</label>
        <input
          style={styles.input}
          type="text"
          value={formData.sizes.join(', ')}
          onChange={(e) => handleArrayChange(e, 'sizes')}
          required
        />
      </div>

      <div style={styles.formGroupCheckbox}>
        <label style={styles.labelCheckbox}>¿En stock?:</label>
        <input
          style={styles.checkbox}
          type="checkbox"
          name="inStock"
          checked={formData.inStock}
          onChange={handleInputChange}
        />
      </div>

      <div style={styles.formGroupCheckbox}>
        <label style={styles.labelCheckbox}>¿Tiene descuento?:</label>
        <input
          style={styles.checkbox}
          type="checkbox"
          name="discount"
          checked={formData.discount}
          onChange={handleInputChange}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Categorías (separadas por comas):</label>
        <input
          style={styles.input}
          type="text"
          value={formData.categories.join(', ')}
          onChange={(e) => handleArrayChange(e, 'categories')}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Imágenes (URLs separadas por comas):</label>
        <input
          style={styles.input}
          type="text"
          value={formData.images.join(', ')}
          onChange={(e) => handleArrayChange(e, 'images')}
          required
        />
      </div>

      <div style={styles.formGroupCheckbox}>
        <label style={styles.labelCheckbox}>¿Agotado?:</label>
        <input
          style={styles.checkbox}
          type="checkbox"
          name="isSoldOut"
          checked={formData.isSoldOut}
          onChange={handleInputChange}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Descripción:</label>
        <textarea
          style={styles.textarea}
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit" style={styles.button}>Crear Producto</button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
  },
  formGroup: {
    marginBottom: '15px'
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    minHeight: '100px'
  },
  formGroupCheckbox: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px'
  },
  labelCheckbox: {
    marginRight: '10px',
    fontWeight: 'bold'
  },
  checkbox: {
    width: '20px',
    height: '20px'
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default ProductForm;
