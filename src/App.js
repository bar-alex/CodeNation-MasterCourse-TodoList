// i'd like to have these
//  - in place edit
//  - focus on the list and navigation by cursor keys
//  - slide left-right (on the header) to switch between day ?
//  - slide on the item, right to mark as done, left to undo last operation (or more) and delete button on the right
//  - hotkey for adding a new item
//  - hotkey to move focus on the header (for left-right slide)
//  - animation for: removing item, making as done, creating new item, slide panel ?

// The structure would be:
//  main
//    list header: div
//    list body: ul
//        item-1: li
//        item-n: li
//    list footer: div



// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import ListFooter from './ListFooter';
import ListHeader from './ListHeader';
import ListItem   from './ListItem';

// initial list of items to play around with
// const initialList = []
const initialDemoList = [
  { text: 'demo task to be completed',
    marked: false,
  },
  { text: 'another demo task to be completed',
    marked: false,
  },
  { text: 'the third demo task is already completed',
    marked: true,
  },
];



const App = () => {
   // itemList holds the items, each item an object with {text,marked}
  let [todoList, setTodoList] = useState( () => {
    // getting stored value
    const saved = localStorage.getItem("todoList");
    const initialValue = JSON.parse(saved);
    return initialValue || initialDemoList;
  } );

  // changes the check status of the 
  const toggleCheckMark = (index) => {
    let newTodoList = todoList.map( (it, idx) => idx === index ? {...it,marked: !it.marked} : {...it} );
    setTodoList( newTodoList );
    console.log( 'toggleCheckMark', index, newTodoList[index] );
    // save to localStorage
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <p> Todo List created with React. </p>
      </header>

      <main id='main' className='glass-8'>

        <ListHeader  
          itemsCount={todoList.length} 
          />

        <ul id='list-body'>
            { 
            todoList.map( (it,idx) => 
              <ListItem key={idx} 
                index = { idx } 
                itemData = { it } 
                toggleFunc = { toggleCheckMark } 
                dataList = { todoList }
                dataHook = { setTodoList }
                /> ) 
            }
        </ul>

        <ListFooter 
          dataList = { todoList }
          dataHook = {  setTodoList }
          />

      </main>

    </div>
  );
}



export default App;
