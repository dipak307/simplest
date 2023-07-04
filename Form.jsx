import React, { useState } from "react";


const Form=()=>{

    const [Cchange,setCchange]=useState();
    const [name,setName]=useState();

    const [Schange,setSchange]=useState();
    const [Sname,setSname]=useState();

    const fChange=(e)=>{
        setCchange(e.target.value);
        
    }
    const sChange=(e)=>{
        setSchange(e.target.value)
    }
    
    const Submit=(e)=>{
        e.preventDefault();
     setName(Cchange);
     setSname(Schange);
    }


     
    const form_for={
        textAlign:"center",
        marginTop:300
    }
    return(
    <>
<div style={form_for}>
<form>
<h1> Hellow {name}  {Sname} </h1>
<label>First Name : </label>
<input type="text" placeholder="Enter Your First Name" onChange={fChange} value={name}/>
<label>Last Name : </label>
<input type="text" placeholder="Enter Your Last Name" onChange={sChange} value={Sname}/>
<input type="submit" onClick={Submit}/>
</form>
</div>
   </>
    )
}

export default Form;