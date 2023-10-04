"use client"

import * as React from 'react';
//import Box from '@mui/material/Box';
//import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
//import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import {useState} from 'react';
import {MyButton3}  from './MyButton'

import { Box, List, ListItem, ListItemText } from "@mui/material";

export default function ProductList() {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

  let products = [
    { desc: "iPad", price: 20000},
    { desc: "iPhone 8", price: 20000},
    { desc: "iPhone X", price: 30000 }
  ];
  return (
    <Box sx={{
        width: '80vw',
        height: '100vh',
        backgroundColor: 'background.paper',
        color: 'black',
        textAlign: 'left'
      }}>
      <List subheader="Product list" component="nav" aria-label="main mailbox folders">
      {products.map((product, index) =>
        <ListItemButton
           selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event, index)}>
          <ListItem divider key={product.desc}>
            <ListItemText primary={product.desc} secondary={product.price}>
            </ListItemText>
          </ListItem>
          </ListItemButton>)}
      </List>

    </Box>
  );
}
