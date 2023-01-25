import React, { Fragment, useState } from "react";

 const EditTodo = ({ todo  }) => {
   const[description, setDescription] = useState(todo.description);

   const updateDescription = async e => {
     e.preventDefault();
     try {
       const body = { description };
       const response = await fetch( `http://localhost:5000/todo/${todo.todo_id}`, {
         method: "PUT",
         header: { "Content-Type": "application/json" },
         body: JSON.stringfy(body)
       }
     );
     console.log(response);
     } catch (err) {
       console.error(err.message);
     }
   }
   // console.log(todo);
   return( <Fragment>

<button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
  Edit
</button>


<div class="modal fade" id={`id${todo.todo_id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit todo</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <input type= "text" className = "form-control" value={description}
       onChange={ e => setDescription(e.target.value)}
       />
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-warning"
      onClick = {e => updateDescription(e)}
      >Edit</button>

        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
   </Fragment>
   )
 };

 export default EditTodo;
