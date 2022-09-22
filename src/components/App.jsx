import { useEffect, useState } from "react";
import { Box } from "utils/Box";
import { currencyFetch } from "../api/API";
import { Converter } from "./Converter/Converter";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./Header/Header";
import listForHeader from "./listForHeader.json"

export const App = () => {
  const [currency, setCurrency] = useState()
  
  useEffect(() => {
    currencyFetch()
      .then(({ rates }) => setCurrency(rates))
      .catch()
  }, [])

  return (
    <Box maxWidth="1200px" m="auto" minHeight="100vh">
      {currency
        ? <>
          <Header currency={currency} list={listForHeader} />
          <Converter currency={currency} title="Currency converter" />
        </>
        : <h2>Sorry, something went wrong</h2>
      }
      
      <GlobalStyle />
    </Box>
  );
};
