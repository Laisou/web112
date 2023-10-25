'use client'
import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import { Box, List, ListItem, ListItemText, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Fab } from "@mui/material";
import { useState } from "react";
//未成功
import CircularProgress from '@mui/material/CircularProgress';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import useGetProducts from "./useProducts";

export default function SelectedListItem() {
    //onst [products, setProducts] = useGetProducts();
    const [products, setProducts, addProduct, isLoading] = useGetProducts();

//   const [products, setProducts] = useState([
//     { desc: "iPad", price: 20000 },
//     { desc: "iPhone 8", price: 20000 },
//     { desc: "iPhone X", price: 30000 }
//   ])
  const [newProduct, setNewProduct] = useState({ visible: false, desc: "", price: 0 })
  
  // const handleClick = function (e: React.ChangeEvent<HTMLInputElement>) {
  //   setNewProduct({ ...newProduct, [e.target.name]: Number(e.target.value) })
  // }
  const handleClick = function (e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.name === "price") {
      setNewProduct({ ...newProduct, [e.target.name]: parseInt(e.target.value) })
    }
    else {
      setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
    }
  }
  
  //add product to database
  function add() {
    addProduct(newProduct);
    setNewProduct({ ...newProduct, visible: false })
    console.log(products);
  }

  //新增
  function update() {
    setProducts(() => [...products, newProduct]);
    setNewProduct({ ...newProduct, visible: false })
    console.log(products);
  }


  const show = () => {
    setNewProduct({ ...newProduct, visible: true })
  }
  const hide = () => {
    setNewProduct({ ...newProduct, visible: false })
  }


  //刪除
  const del = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number,
  ) => {
    products.splice(index, 1);
    setProducts([...products]);


  };


  //修改
  const edit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number,
  ) => {
    products.splice(index, 1);
    setProducts([...products]);
    //setProducts(() => [...products, newProduct]);
    setNewProduct({ ...newProduct, visible: true })
    console.log(products);
  };

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  return (
      <Box sx={{
          width: '80vw',
          height: '100vh',
          backgroundColor: 'background.paper',
          color: 'black',
          textAlign: 'left'
        }}>




    {/* {newProduct.visible ? */}
    {/* 新增 */}
      <div>
    <Dialog open={newProduct.visible} onClose={hide} aria-labelledby="新增產品">
      <DialogTitle>新增產品</DialogTitle>
      <DialogContent>
        <TextField label="產品描述" variant="outlined" name="desc" value={newProduct.desc} onChange={handleClick} /><p />
        <TextField label="產品價格" variant="outlined" name="price" value={newProduct.price} onChange={handleClick} /><p />
      </DialogContent>
      <DialogActions>
        <IconButton
          aria-label="close"
          onClick={hide}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        {/* <Button variant="contained" color="primary" onClick={update}>新增</Button> */}
        <Button variant="contained" color="primary" onClick={add}>新增</Button>
      </DialogActions>
    </Dialog>
    </div>


    {/* 修改 */}
    {/* <Dialog open={newProduct.visible} onClose={hide} aria-labelledby="修改產品">
      <DialogTitle>新增產品</DialogTitle>
      <DialogContent>
        <TextField label="產品描述" variant="outlined" name="desc" value={products.map} onChange={handleClick} /><p />
        <TextField label="產品價格" variant="outlined" name="price" value={newProduct.price} onChange={handleClick} /><p />
      </DialogContent>
      <DialogActions>
        <IconButton
          aria-label="close"
          onClick={hide}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Button variant="contained" color="primary" onClick={update}>新增</Button>
      </DialogActions>
    </Dialog>
 */}

      {/* : */}
      <div>
        <Fab color="primary" aria-label="Add" onClick={show}>
          <AddIcon/>
        </Fab>
   
        {isLoading ? <CircularProgress /> :
        <List subheader="Product list" aria-label="product list">
        
          {products.map((product,i) =>
            <ListItem divider key={product.desc}>
              <ListItemButton
                  selected={selectedIndex === i}
                  onClick={(event) => handleListItemClick(event, i)}
                >
                  <ListItemText primary={product.desc} secondary={product.price}>
                  </ListItemText>
              </ListItemButton>

              <IconButton edge="end" aria-label="delete"
                  onClick={(event) => del(event, i)}>
              <DeleteIcon />
              </IconButton>

            <IconButton edge="end" aria-label="edit"
            onClick={(event) => edit(event, i)}>
              <EditIcon />
            </IconButton>

            </ListItem>
          
            )}
        </List>
        }
      </div>
    {/* // } */}
    </Box>
   
   
  );


 
}