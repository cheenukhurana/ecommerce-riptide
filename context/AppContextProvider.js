import { createContext, useContext, useState } from 'react';
import { items } from '../pages/tsm-shop'

const AppContext = createContext();

function initializeCartItems() {
  let initialCartItems = {}
  for(let i=0;i<items.length;i++)
  {
    initialCartItems[items[i].id] = 0;
  }
}

function AppContextProvider(props) {
  // let sharedState = initializeCartItems()
  const [cartItems, setCartItems] = useState({})

  function setItems(data) {
    setCartItems(data)
  }

  return (
    <AppContext.Provider value={{cartItems, setCartItems:setItems}}>
      {props.children}
    </AppContext.Provider>
  );
}

// export function useAppContext() {
//   return useContext(AppContext);
// }

function useAppContext()
{
    const appContext = useContext(AppContext);
    return appContext;
}

export {AppContextProvider, useAppContext};