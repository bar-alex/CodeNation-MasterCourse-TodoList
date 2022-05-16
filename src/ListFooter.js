import { useState } from "react";
import InputText from "./InputText";
import AddCircle from "@mui/icons-material/AddCircleOutline";

// import { BiPlusCircle } from "react-icons/bi";

// the footer area of the list
// props: idName, dataList, dataHook
const ListFooter = (props) => {
    let [ editing, setEditing ] = useState( false );

    return (
      <div id='list-footer'>
          
          { 
          ( editing 
            && <InputText 
                  dataList={props.dataList} 
                  dataHook={props.dataHook} 
                  editingSetter={setEditing} 
                  />
          ) || <AddCircle 
                  id='button-add' 
                  className='button-color' 
                  onClick={ () => setEditing(true) } 
                  />
          }

            <p>This is the footer</p>
      </div>
    );
  }

  
  export default ListFooter


//   <button id='button-add' onClick={ () => setEditing(true) }>
//   {/* <span className="material-symbols-outlined"> add_circle </span> */}
//   <AddCircle />
//   {/* <BiPlusCircle /> */}
// </button>
