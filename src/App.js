
import { Button} from "rsuite";
import 'rsuite/dist/rsuite.min.css';
import "./App.css";
import TodoList from "./Components/TodoList";
import {  useEffect, useState } from "react";


function App() {
  
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [allTask,setAllTask]=useState([]);

  // useEffect(() => {
  //   const storedTitle = sessionStorage.getItem("todoTitle");
  //   const storedDescription = sessionStorage.getItem("todoDescription");
  //   if (storedTitle && storedDescription) {
  //     setTitle(storedTitle);
  //     setDescription(storedDescription);
  //   }
  // }, []);
  

  const HandleOnTitleChange=ev=>{
      setTitle(ev.target.value);
  }

  const HandleOnDescChange=ev=>{
    setDescription(ev.target.value);
  }


  const HandleOnAddClick=()=>{
    if(title.length===0 && description.length===0){
      // Alert.error("Add something in input box")
      return; 
    }
    
    let newTask={
      title:title,
      description:description,
    }
  
    let updatedTaskArr=[...allTask];
    updatedTaskArr.push(newTask);
    setAllTask(updatedTaskArr);
    setTitle("");
    setDescription("");
    localStorage.setItem('taskList',JSON.stringify(updatedTaskArr))
  }

  useEffect(()=>{
    const data=JSON.parse(localStorage.getItem('taskList'));
    console.log(data);
    if(data){
      setAllTask(data);
    }
  },[])

  return (
    <div className="body">
      <div>
        <h3 className="heading">My To-Do List</h3>
      </div>

      <div className="container">
        <div className="input-container">
          <div className="title-container">
            <div>
              <label htmlFor="title">Title</label>
            </div>
            <div>
              <input
                id="title"
                type="text"
                placeholder="Enter Title of your Activity..."
                onChange={HandleOnTitleChange}
                value={title}
              ></input>
            </div>
          </div>
          <div className="description-container">
            <div>
              <label htmlFor="description">Description</label>
            </div>
            <div>
              <input
                id="description"
                type="text"
                placeholder="Enter Description of your Activity..."
                onChange={HandleOnDescChange}
                value={description}
              ></input>
            </div>
          </div>
          <div>
            <Button id="add-btn" block color="red" size="lg" appearance="primary" onClick={HandleOnAddClick} >Add</Button>
          </div>
        </div>
      </div>
      <div className="list-container">
        {allTask.map((task,index)=><TodoList allTask={allTask} setAllTask={setAllTask} key={index} task={task}/>)}
      </div>
    </div>
  );
}

export default App;
