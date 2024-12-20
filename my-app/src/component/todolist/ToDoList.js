import { useState } from "react";
import ListShow from "./ListShow";
import ListAdd from "./ListAdd";
import ListCount from "./ListCount";

const ToDoList = () => {
    const [list, setList] = useState([]);

    return ( 
        <div>
            <h3>ToDo List:</h3>

            <ListShow   list={list}/>
            <ListAdd    list={setList}/>
            <ListCount  list={list}/>
            
        </div>
     );
}
 
export default ToDoList;