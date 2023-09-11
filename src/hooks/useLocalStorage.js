import { useState } from "react";

function savedValue(key, initialValue) {
    
}
export default function useLocalstorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);
  return [value, setValue];
}
