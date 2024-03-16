import React, { useEffect } from 'react'
import useRequest from '../hooks/useRequest'

interface SymbolPricesProps {
  symbol: string;
}

export default function SymbolPrices({ symbol }: SymbolPricesProps) {
  const { isLoading, returnValue } = useRequest('/price/', symbol, 60);

  return (
    <div>
        {isLoading && (
          <p>Data is loading...</p>
        )}

        {!isLoading && (
          <>
            <table>
              <thead>
                <tr>
                  <th>Latest Price</th>
                  <th>Average Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {returnValue?.latest}
                  </td>
                  <td>
                    {returnValue?.average}
                  </td>
                </tr>
              </tbody>
            </table>
            <table style={{ marginTop: "10vh"}}>
              <thead>
                <tr>
                  <th colSpan={2} style={{ textAlign: "left", }}>History</th>
                </tr>
              </thead>
              <tbody>
                {returnValue?.history.map((i: any) => 
                  <tr>
                    <td>{i.date.toLocaleString()}</td>
                    <td>{i.currency} {i.price}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </>
        )}
    </div>
  )
}