import React from "react";
import TrashIcon from '@rsuite/icons/Trash';

export default function TodoList({task,allTask,setAllTask}) {
    const {title,description}=task;

    const onHandleDelete=()=>{
        const updatedTaskArr = allTask.filter((t) => t !== task);
        setAllTask(updatedTaskArr);
    }
  return (
    <div className="element-container">
      <div className="element">
        <div className="title">
            <h4>{title}</h4>
        </div>
        <div className="description">
            <p>{description}</p>
        </div>
      </div>
      <div className="dlt-icon">
        <TrashIcon onClick={onHandleDelete} id="icon" color="white" />
      </div>
    </div>
  );
}
