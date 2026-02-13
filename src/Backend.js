import React from "react";

function Backend(){

    function loadData(){
        fetch("http://localhost:8080/backend")
        .then(res => res.text())
        .then(data => {
            document.getElementById("msg").innerText = data;
        })
        .catch (err => console.error(err));
    }
    return(
        <div>
            <h2> This is Frontend </h2>

            <button onClick= {loadData}> Load Message </button>

            <p id = "msg"> </p>
        </div> 
    )
}
export default Backend