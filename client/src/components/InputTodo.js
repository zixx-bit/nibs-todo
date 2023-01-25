import React, { Fragment, useState } from "react" ;

const InputTodo = () => {
  const [description, setDescription]  = useState("");
  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = {description};
      const response = fetch("http://localhost:5000/todo", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringfy(body)
      });

      window.location = "/";
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  return(
  <Fragment>
   <h1 className="text-center mt-5">Input Todo</h1>
   <form className="d-flex mt-5">
      <input type = "text" className="form-control"
       value={description}
       onChange ={e => setDescription(e.target.value)}
       />
      <button className = "btn btn-success">Add</button>
   </form>
  </Fragment>
  );
};

export default InputTodo;
