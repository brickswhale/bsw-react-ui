import React, { useState, useEffect, useMemo, createContext, useContext, useReducer } from "react";

let initialState = {
    items:[]
}

export const CartContext = createContext(initialState);
export const useCartProvider = () => {
  return useContext(CartContext);
}

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
        return {
            ...prevState,
            items: prevState.items.concat(action.item)
        }
    case 'REMOVE_ITEM':
        let restItems = prevState.items.filter((anItem,index)=>anItem[action.itemKey]==action.item[action.itemKey])
        return {
            ...prevState,
            items: restItems
        }
    case 'UPDATE_ITEM':
        let updatedItems = prevState.items.map((anItem,index)=>{
            if (anItem[action.itemKey]==action.item[action.itemKey]) {
                return {...anItem, ...action.item}
            }
            return anItem;
        })
        return {
            ...prevState,
            items: updatedItems
        }
    case 'CLEAR_ALL':
        return {
            ...prevState,
            items: []
        }
    case 'SET_ITEMS':
      return {
            ...prevState,
            items: action.items
      }
    default: 
      return prevState;
  }
}


function CartProvider(props) {
    const { items=[], mode, itemKey="id", children } = props;
    /* 
    mode:
    store cart in localstorage
    store cart in session
    store cart in cookie
    no store, pure state
    store in database (only when with user sign in)
    */
    const [state, dispatch] = useReducer(reducer, initialState);

    const methods = useMemo(()=>({
        addItem: (item) => {
            // add 1 new item to cart
            dispatch({ type: 'ADD_ITEM', item: item });
        },
        removeItem: (item) => {
            // remove 1 item from cart
            dispatch({ type: 'REMOVE_ITEM', item: item, itemKey: itemKey });
        },
        updateItem: (item) => {
            // update 1 item in cart
            dispatch({ type: 'UPDATE_ITEM', item: item, itemKey: itemKey });
        },
        clearAll: () => {
            // remove all items from cart
            dispatch({ type: 'CLEAR_ALL', item: item });
        },
        setItems: (items) => {
            dispatch({ type: 'SET_ITEMS', items: items });
        }
    }),[]);
    
    useEffect(() => {
        if (items != null) {
            methods.setItems(items);
        }
    },[items]);

    return (
        <CartContext.Provider value={[state, methods]}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;