import React, { useState } from "react";
import Tables from '../Components/PersonalTaletView';
import Modal from '../Components/FormPersonal.js';

function Personal(){
    const [Products, setProducts] = useState([
        {
          firstName:'Анатолій',
           surname:'Загадаєв', 
           age:'36 ',
            gender:'male',
            id: 1
        },
        {
          firstName:'Анатолій',
           surname:'Загадаєв', 
           age:'36 ',
            gender:'male',
            id: 2
        },
        {
          
          firstName:'Анатолій',
           surname:'Загадаєв', 
           age:'36 ',
            gender:'male',
            id: 3
        }
      ]);
    
      const [editProduct, setEditProduct] = useState(null);
      const deleteProduct = (product) => {
        setProducts(Products.filter((p) => p !== product));
      };
    
      const addProduct = (product) => {
        setProducts([...Products, product]);
      };
    
      const saveProduct = (product) => {
        setProducts(
          Products.reduce((acc, p) => {
            if (p.id === product.id) acc.push(product);
            else acc.push(p);
            return acc;
          }, [])
        );
      };
    
      const editProductHandler = (product) => {
        console.log("edit");
        setEditProduct(product);
      };
      return (
        <div>
          <h1 style={{ textAlign: "center" }}>Product</h1>
          <Tables
            Products={Products}
            delete={deleteProduct}
            edit={editProductHandler}
          />
          <Modal add={addProduct} save={saveProduct} product={editProduct} />
        </div>
      );
    }

export default Personal;