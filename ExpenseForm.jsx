import React from "react";

const ExpeseForm=()=>{

    const form_for={
        textAlign:"center",
        marginTop:300
    }
    return(
        <>
        <form style={form_for}>
             <label for="">Expense Title</label>
            <input type="text"/>
            <label for=""> Expense Amount</label>
            <input type="text"/>
            <label for="">Expense Date</label>
            <input type="text"/>
            <button> ADD </button>
        </form>
        </>

    )
}

export default ExpeseForm;