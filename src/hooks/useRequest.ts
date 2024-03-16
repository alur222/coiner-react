import { useCallback, useEffect, useState } from "react"

const OPTIONS = {
  headers: {
    "Content-Type": "application/json",
  }
}

export default function useRequest(endpoint: string, symbol: string, minutes: number): {
  isLoading: boolean
  returnValue: any
} {
  const [isLoading, setIsLoading] = useState(true);
  const [returnValue, setReturnValue] = useState();
  
  const fetchData = useCallback(async () => {
    setIsLoading(true);
    
    return fetch(`${endpoint}${symbol}?minutes=${minutes || 60}`, { ...OPTIONS }).then((res: any) => {
      if (res.ok) return res.json().then(setReturnValue);
      return res.json().then((json: any) => Promise.reject(json));
    }).finally(() => setIsLoading(false))

  }, [symbol, minutes, endpoint]);
  
  useEffect(() => {
    fetchData();
  }, [fetchData])

  // return states
  return { isLoading, returnValue };
}