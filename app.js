const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
const todo = [
    {
        id: 1,
        title: "Learn Express",
        completed: false
    },
    {
        id: 2,
        title: "Finish homeword",
        completed: false
    },
    {
        id: 3,
        title: "Buy groceries",
        completed: true
    },
    {
        id: 4,
        title: "Go to the gym",
        completed: false
    }
];
app.get('/todo',(req,res)=>{
 if (req.url === '/todo') 
    res.status(200).json(todo);
else {
    res.status(404).json("Unable to get the todos in the list");
}
})
app.post('/todo',(req,res)=>{
    if (req.url === '/todo') {
          const newTodo = {
        id: todo.length + 1,
        title : req.body.title,
        completed : req.body.completed

    }
    todo.push(newTodo);
    res.status(200).json(`Adding a new todo successfully done. ${newTodo}`);

    } else {
        res.status(404).send("Failed to add a new todo");
    }
   
})
app.put('/todo/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const index = todo.findIndex(t => t.id === id );
    if (index === -1) {
        res.status(404).send("To do is not found");
    }
       else {
        todo[index] =  ({
            id: todo[index].id,
            title: req.body.title,
            completed: req.body.completed
        })
        res.json({
            message: "todo updated sucessfully",
            todo: todo[index]
        })
         
       }  
})
app.delete('/todo/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const index = todo.findIndex(t => t.id === id);
    if (index === 1){
        res.status(404).send('Todo not found');
    } else {
        const deletetoDo = todo.splice(index,1)[0];
        res.json({
            message: "To do deleted successfully",
            deletetoDo,
            todo: todo[index]
        })
    }
})
app.listen(PORT,()=>{
    console.log('Server running on port 3000');
})