
import React from 'react';
import { Button, TextField } from '@mui/material';

function Add() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '500px',
      justifyContent: 'center',
      alignItems: 'center', 
      height: '100vh',
      margin: '0 auto',
      backgroundColor: '#f0f8ff',  
      borderRadius: '15px',
      padding: '20px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    }}>
      <h2 style={{
        color: '#ff6347',  
        marginBottom: '20px',
        fontFamily: 'Arial, sans-serif',
      }}>Add New Product</h2>
      
      <TextField
        label="Product Name"
        variant="outlined"
        style={{
          marginBottom: '15px',
          width: '100%',
          backgroundColor: '#fff8dc',  
        }}
      /><br/>
      <TextField
        label="Product Category"
        variant="outlined"
        style={{
          marginBottom: '15px',
          width: '100%',
          backgroundColor: '#fff8dc',  
        }}
      /><br/>
      <TextField
        label="Product Price"
        variant="outlined"
        style={{
          marginBottom: '15px',
          width: '100%',
          backgroundColor: '#fff8dc',  
        }}
      /><br/>
      <TextField
        label="Product Image Address"
        variant="outlined"
        style={{
          marginBottom: '15px',
          width: '100%',
          backgroundColor: '#fff8dc',  
        }}
      /><br/>
      
      <Button
        variant="contained"
        style={{
          backgroundColor: '#28a745',  
          color: 'white',
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          borderRadius: '5px',
          textTransform: 'none',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s',
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}  
        onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}  
      >
        Add Product
      </Button><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default Add;
