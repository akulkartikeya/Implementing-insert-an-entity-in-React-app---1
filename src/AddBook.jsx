// src/components/AddBook.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Book added!');
    navigate('/'); // Navigate back to the home page after "submission"
  };

  return (
    <div style={styles.container}>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="title" style={styles.label}>Title:</label>
          <input type="text" id="title" name="title" style={styles.input} required />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="author" style={styles.label}>Author:</label>
          <input type="text" id="author" name="author" style={styles.input} required />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="description" style={styles.label}>Description:</label>
          <textarea id="description" name="description" rows="4" style={styles.textarea}></textarea>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="coverImageURL" style={styles.label}>Cover Image URL:</label>
          <input type="url" id="coverImageURL" name="coverImageURL" style={styles.input} />
        </div>
        <button type="submit" style={styles.button}>Add Book</button>
        <button type="button" onClick={() => navigate('/')} style={styles.button}>Cancel</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    padding: '8px',
    borderRadius: '3px',
    border: '1px solid #ddd',
    width: '100%',
    boxSizing: 'border-box',
  },
  textarea: {
    padding: '8px',
    borderRadius: '3px',
    border: '1px solid #ddd',
    width: '100%',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
    marginRight: '10px',
  },
};

export default AddBook;