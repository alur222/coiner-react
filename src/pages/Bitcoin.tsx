import React from 'react';
import SymbolPrices from '../components/SymbolPrices';

export default function Bitcoin() {
  return (
    <div style={{ width: "fit-content", margin: "auto"}}>
      <h1>BTC </h1>
      <SymbolPrices symbol="bitcoin" />
    </div>
  );
}
