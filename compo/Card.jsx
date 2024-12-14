import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Card() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => setData(response.data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '20px',
            padding: '20px',
            backgroundColor: '#f4f4f9',
        }}>
            {data.map((task) => (
                <div key={task.id} style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #dcdcdc',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    padding: '20px',
                    textAlign: 'center',
                    width: '100%',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease-in-out',
                    ':hover': {
                        transform: 'scale(1.05)',
                    },
                }}>
                    <img src={task.image} style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'contain',
                        borderRadius: '5px',
                    }} alt={task.title} /><br />
                    <h3 style={{
                        fontSize: '18px',
                        color: '#333',
                        margin: '10px 0',
                    }}>{task.title}</h3>
                    <p style={{
                        fontSize: '14px',
                        color: '#888',
                    }}>{task.category}</p>
                    <p style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#28a745',
                    }}>${task.price}</p>
                    <button style={{
                        backgroundColor: '#007bff',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                    }} onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'} onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Card;
