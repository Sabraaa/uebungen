import { useState, useEffect } from "react";
import axios from "axios";


function App() {
    const [data, setData]=useState('')
     useEffect(() => {
       axios
         .get("https://reqres.in/api/users?page=2")
         .then((res) => {
           setData(res.data.data);
         })
         .catch((err) => {
           console.log(err);
         });
     }, []);
   
     return (
       <div>
         <h1>halo</h1>
         {data.map((d)=>{
           return <p>
             {d.email}
           </p>
         })}
       </div>
     );
   }