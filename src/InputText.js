import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useEffect } from 'react';


const InputText = (props) => {

    // binds input's Esc and Enter to cancel and save actions 
    const handleKey = (evt) => {
        if( [13,27].indexOf( evt.keyCode )>-1 ){
            evt.preventDefault()
            //console.log( evt );
            if( evt.keyCode === 27 ) 
                cancelEdit()
            if( evt.keyCode === 13 )
                saveEdit( evt.target, props.editingIndex || 0 )
        }
    }
    
    const cancelEdit = () => props.editingSetter(false)
    
    const saveEdit = ( inputElement, editingIndex ) => {
        console.log( 'saveEdit', inputElement.value );
        
        let newTodoList = !editingIndex 
            // new item added to list
            ? [...props.dataList,  { text: inputElement.value, marked: false,} ]
            // editing item for the index in props
            : props.dataList.map( (it, idx) => idx!==editingIndex ? {...it} : {...it,text: inputElement.value} )

        props.dataHook( newTodoList )

        inputElement.value = '';
        
        // save to localStorage
        localStorage.setItem('todoList', JSON.stringify(newTodoList));
    }

    // sets focus on the input box
    useEffect( () => {
        document.getElementById('input-text').focus()
    })

    
    return (
        <form id='input-form' action='#'>
            <input id='input-text' 
                type='text' name='taskText' 
                placeholder="enter task" autoComplete="off"
                onKeyDownCapture={ handleKey }
                />
            <CancelOutlinedIcon 
                id='input-cancel'
                className='button-color' 
                onClick={ () => cancelEdit() } 
                />
        </form>
    );
}


export default InputText

