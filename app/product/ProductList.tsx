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
import { Product } from "../_settings/interfaces";

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SelectedListItem() {
    //onst [products, setProducts] = useGetProducts();
    //const [products, setProducts, addProduct, isLoading] = useGetProducts();
    const [products, addProduct, deleteProduct, updateProduct, isLoading] = useGetProducts();

//   const [products, setProducts] = useState([
//     { desc: "iPad", price: 20000 },
//     { desc: "iPhone 8", price: 20000 },
//     { desc: "iPhone X", price: 30000 }
//   ])

  //const [newProduct, setNewProduct] = useState({ visible: false, desc: "", price: 0 })
  const [newProduct, setNewProduct] = useState<Product>({ id: "", desc: "", price: 0, category:""});
  const [status, setStatus] = useState({ visible: false });
  
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
  // function add() {
  //   addProduct(newProduct);
  //   setNewProduct({ ...newProduct, visible: false })
  //   console.log(products);
  // }
  function addOrUpdate() {
    if (newProduct.id === "") {
      addProduct(newProduct);
    }
    else {
      updateProduct(newProduct);
    }
    setStatus({ ...status, visible: false })
    resetProduct();
  }

  //新增
  //old
  // function update() {
  //   //setProducts(() => [...products, newProduct]);
  //   setNewProduct({ ...newProduct, visible: false })
  //   console.log(products);
  // }


  // const show = () => {
  //   setNewProduct({ ...newProduct, visible: true })
  // }
  // const hide = () => {
  //   setNewProduct({ ...newProduct, visible: false })
  // }
  const hide = () => {
    setStatus({ ...status, visible: false })
  }
  const show = () => {
    setStatus({ ...status, visible: true })
  }


  //刪除
  //old
  // const del = (
  //   event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  //   index: number,
  // ) => {
  //   products.splice(index, 1);
  //   //setProducts([...products]);
  // };


  //修改
  //old
  // const edit = (
  //   event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  //   index: number,
  // ) => {
  //   products.splice(index, 1);
  //   //setProducts([...products]);
  //   //setProducts(() => [...products, newProduct]);
  //   setNewProduct({ ...newProduct, visible: true })
  //   console.log(products);
  // };

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  // function setUpdateProduct(product: Product) {
  //   setNewProduct({ ...product, visible: true })
  // }

  function setUpdateProduct(product: Product) {
    setNewProduct({ ...product })
    setStatus({ visible: true })
  }

  //清空內容
  const resetProduct = () => {
    setNewProduct({ id: "", desc: "", price: 0, category:"", })
  }

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
    {/* <Dialog open={newProduct.visible} onClose={hide} aria-labelledby="新增產品">
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
        <Button variant="contained" color="primary" onClick={add}>新增</Button>
      </DialogActions>
    </Dialog> */}
      <Dialog open={status.visible} onClose={hide} aria-labelledby={newProduct.id === "" ? "新增產品" : "更新產品"}>
        <DialogTitle>{newProduct.id === "" ? "新增產品" : "更新產品"}</DialogTitle>
        <DialogContent>
        <TextField label="產品類別" variant="outlined" name="category" value={newProduct.category} onChange={handleClick} /><p />
          <TextField label="產品名稱" variant="outlined" name="desc" value={newProduct.desc} onChange={handleClick} /><p />
          <TextField type="number" label="產品價格" variant="outlined" name="price" value={newProduct.price} onChange={handleClick} /><p />
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
          <Button variant="contained" color="primary" onClick={addOrUpdate}>{newProduct.id === "" ? "新增產品" : "更新產品"}</Button>
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
   
        {/* {isLoading ? <CircularProgress /> :
        <List subheader="Product list" aria-label="product list">
        
          {products.map((product,i) =>
            <ListItem divider key={product.desc}>
              <ListItemButton
                  selected={selectedIndex === i}
                  onClick={(event) => handleListItemClick(event, i)}
                >
                  <ListItemText primary={product.desc} secondary={product.price}>
                  
                  </ListItemText>
                  <ListItemText secondary={product.category}>
                  </ListItemText>
              </ListItemButton>

              <IconButton edge="end" aria-label="delete" onClick={() => deleteProduct(product.id)}>
                  <DeleteIcon />
                </IconButton>
                <IconButton edge="end" aria-label="update" onClick={() => setUpdateProduct(product)}>
                  <EditIcon />
                </IconButton>

            </ListItem>
          
            )}
            

        </List>
        } */}

        {/* {isLoading ? <CircularProgress /> :
        <List subheader="Product list" aria-label="product list">
        
          {products.map((product,i) =>
            <ListItem divider key={product.desc}>
              <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <Col key={idx}>
                    <Card>
                      <Card.Header>{product.category}</Card.Header>
                      <Card.Body>
                        <Card.Title>{product.desc}</Card.Title>
                        <Card.Text>
                        {product.price}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteProduct(product.id)}>
                  <DeleteIcon />
                </IconButton>

                <IconButton edge="end" aria-label="update" onClick={() => setUpdateProduct(product)}>
                  <EditIcon />
                </IconButton>

            </ListItem>
            
          
            )}
           
            
        </List>
        
        } */}

{isLoading ? <CircularProgress /> :
        // //<List subheader="Product list" aria-label="product list">
        // <div>
        //   {products.map((product,i) =>
        //     //<ListItem divider key={product.desc}>
            <div>
              <Row xs={1} md={2}>
                {products.map((product,i) => (
                  <Col key={i}>
                    <Card>
                      <Card.Header>{product.category}</Card.Header>
                      <Card.Body>
                        <Card.Title>{product.desc}</Card.Title>
                        <Card.Text>
                        {product.price}
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <IconButton edge="end" aria-label="delete" onClick={() => deleteProduct(product.id)}>
                          <DeleteIcon />
                        </IconButton>

                        <IconButton edge="end" aria-label="update" onClick={() => setUpdateProduct(product)}>
                          <EditIcon />
                        </IconButton>
                      </Card.Footer>
                    </Card>
                  </Col>
                ))}
              </Row>
              
            </div>
            //</ListItem>
            
          
        //     )}
           
        //    </div>  
        // //</List>
        
        }
      </div>
    {/* // } */}
    </Box>
   
   
  );


 
}