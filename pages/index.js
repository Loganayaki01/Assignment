import React from "react";
import {App} from "../src/index";
 const Index=({data})=>{
    console.log({data})
    return(
        
        <App data={data}/>
    )};

export async function getServerSideProps() {
    
    const res = await fetch(
       `https://c3iodqkv0e.execute-api.ap-south-1.amazonaws.com/branches`
     )
     const data = await res.json();
     console.log(data);
      return { props: { data } };
     
   }

export default Index;
