import { useState, useEffect } from "react";

const useQuery = (request) => {
  const [response, setResponse] = useState({});

  useEffect(()=>{
 request.then((fetchResponse)=>
    setResponse(fetchResponse.data)
    ) 
  }, [])

  return {response};
};
export default useQuery;
