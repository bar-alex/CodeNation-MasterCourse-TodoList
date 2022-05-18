import { useState } from "react";
import styled from 'styled-components'

import InputText from "./InputText";
import AddCircle from "@mui/icons-material/AddCircleOutline";

// import { BiPlusCircle } from "react-icons/bi";

// the footer area of the list
// props: idName, dataList, dataHook
const ListFooter = (props) => {
    let [ editing, setEditing ] = useState( false );

    return (
      <DivFooter>
          
          { 
          ( editing 
            && <InputText 
                  todoList={props.todoList} 
                  todoHook={props.todoHook} 
                  editingSetter={setEditing} 
                  />
          ) || <AddCircle 
                  onClick={ () => setEditing(true) } 
                  />
          }

            {/* <p>This is the footer</p> */}
      </DivFooter>
    );
  }

  
export default ListFooter


const DivFooter = styled.div`
  width: 100%;
  height: 6vh;
  position: relative;
  flex-grow: 0;
  border-radius: 0px 0px 5px 5px;
  /* padding: 0px 10px; */

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  > svg {
    position: absolute;
    margin: auto;
    margin-top: -6vh;
    width: 60px;
    height: 60px;
    /* font-size-adjust: 15; */
    /* font-size: 5rem; */
  
    color: var(--color-button);

    &:hover{
      transition: color .5s ease;
      color: var(--color-button-action);
    }
  }

`
