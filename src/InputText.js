import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useEffect } from 'react';
import styled from 'styled-components';


const InputText = (props) => {

    // binds input's Esc and Enter to cancel and save actions 
    const handleKey = (evt) => {
        if( [13,27].indexOf( evt.keyCode )>-1 ){
            evt.preventDefault()
            //console.log( evt );
            if( evt.keyCode === 27 ) 
                cancelEdit()
            if( evt.keyCode === 13 ) {
                console.log(' where is eln? ', evt.target.value.indexOf('\n')  );   
                saveEdit( evt.target )
            }
        }
    }
    
    const cancelEdit = () => props.editingSetter(false)
    
    const saveEdit = ( inputElement ) => {
        console.log( 'saveEdit', inputElement.value, props.todoList, Array.isArray(props.todoList) );
        
        // slipt the text in lines if a bloc of multiple lines is pasted
        const inputTodoList = inputElement.value.split('\n').filter( x => !!x ).map( x => true && { text: x, marked: false, } );
        console.log(inputTodoList);

        // new item added to list
        const newTodoList = Array.isArray(props.todoList) 
            ? [...props.todoList,  ...inputTodoList ]
            : [ ...inputTodoList ] ;

            // newTodoList = Array.isArray(props.todoList) 
        //     ? [...props.todoList,  { text: inputElement.value, marked: false,} ]
        //     : [ { text: inputElement.value, marked: false,} ] ;

        // execute the set function
        props.todoHook( newTodoList );

        inputElement.value = '';
        
        // save to localStorage
        localStorage.setItem('todoList', JSON.stringify(newTodoList));
    }

    // sets focus on the input box
    useEffect( () => {
        document.getElementById('input-text').focus()
    },[])

    
    return (
        <InputFormStyled id='input-form' action='#' tabIndex="-1"
            onClick={ (e) => e.target.firstChild.focus() }>
            <input id='input-text' 
                type='text' placeholder="enter task" autoComplete="off"
                name='taskText' tabIndex="0"
                onKeyDownCapture={ handleKey }
                onClick={ (e) => e.target.focus() }
                />
            <CancelOutlinedIcon 
                id='input-cancel'
                className='button-color' 
                onClick={ () => cancelEdit() } 
                />
        </InputFormStyled>
    );
}


export default InputText



const InputFormStyled = styled.form`
    /* border: 1px solid blue; */
    align-self: stretch;
    width: 100%;
    display: flex;
    justify-content: stretch;
    align-items: center;    
    flex-grow: 1;
    /* margin: 2px 1px; */
    /* position: relative; */
    padding: 0px 10px;

    > input {
        /* align-self: center; */
        height: 4vh;
        flex-grow: 2;
        padding-left: 3px;
        font-family: Ubuntu, Cantarell, helvetica neue, sans-serif;
        font-size: 1rem;
        /* position: absolute; */
        z-index: -1;

        &::placeholder{
            color: gray;
            opacity: .6;
        }

        /* &::after{ */
            /* content: ' '; */
            /* position: absolute; */
            /* background: white; */
            /* opacity: 1; */
            /* width:100%; */
            /* bottom: 2px; */
            /* margin: auto 10px; */
            /* border: 1px solid purple; */
        /* } */
    }    

    > svg {
        /* border: 1px solid red; */
        flex-grow: 0;
        /* align-self: stretch; */
        width:26px;
        height:26px;
        /* top: -1px; */
        /* font-size: 2em; */
        color: var(--color-button);

        &:hover{
            transition: color .5s ease;
            color: var(--color-button-action);
        }
    }

`