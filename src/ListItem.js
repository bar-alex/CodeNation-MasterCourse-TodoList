import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import InputText from './InputText';
import { useState } from 'react';


// the item component of the list
const ListItem = (props) => {

  let [editing, setEditing] = useState(false);

    // handle dbl-click -- edit, use evt,target
    // const handleDblClick = (evt) => {
    //   console.log( evt.target );
    //   setEditing( !editing );
    // };

    return (
      // <li className='list-item' onDoubleClick={ (e) => handleDblClick(e) }>
      <li className='list-item' onDoubleClick={ () => props.toggleFunc(props.index) }>

        { 
        ( !editing
          && <p className={ props.itemData.marked ? 'text-crossed' : '' }>{props.itemData.text}</p>
        ) || <InputText 
                dataList={props.dataList} 
                dataHook={props.dataHook} 
                editingSetter={setEditing} 
                />
        }

        { 
         !editing 
          &&  ( ( props.itemData.marked 
                  && <CheckCircleOutlineIcon className="tick-area ticked" onClick={ () => props.toggleFunc(props.index) } />
                ) || <CircleOutlinedIcon className="tick-area unticked button-color" onClick={ () => props.toggleFunc(props.index) } /> 
              )
        }
       
      </li>
    )
  }

export default ListItem



// // the item component of the list
// const ListItem = (props) => {
//   return (
//     <li className='list-item' >
//       <label name='mark'>{props.itemData.text}</label>

//       { props.itemData.marked && 
//         <input type='checkbox' 
//           value={props.itemData.marked} 
//           onClick={ () => props.toggleFunc(props.index) } 
//           checked />
//       }

//       { !props.itemData.marked && 
//         <input type='checkbox' 
//           value={props.itemData.marked} 
//           onClick={ () => props.toggleFunc(props.index) } 
//            />
//       }


//     </li>
//   )
// }
