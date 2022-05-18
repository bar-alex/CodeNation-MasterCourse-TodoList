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
import { useEffect, useState } from 'react';
import styled from 'styled-components';

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
  let [todoList, setTodoList] = useState( [] );
  // shows the marked items or not
  let [showMarked, setShowMarked] = useState( true );

  // changes the check status of the item in the list
  const toggleCheckMark = (index) => {
    let newTodoList = todoList.map( (it, idx) => idx === index ? {...it,marked: !it.marked} : {...it} );
    setTodoList( newTodoList );
    // console.log( 'toggleCheckMark', index, newTodoList[index] );
    // save to localStorage
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
  }


  // load todo list from localstorage on mount
  useEffect(() => {
      // getting stored list
      const savedList = localStorage.getItem("todoList");
      const initialListValue = JSON.parse(savedList) || initialDemoList ;
      setTodoList(initialListValue);
      // console.log('loadFromLocalsStorage',initialListValue,initialDemoList);

      // getting stored filter
      const savedShowMarked = localStorage.getItem('showMarkedFilter')
      console.log('savedShowMarked-1',typeof savedShowMarked,savedShowMarked);
      setShowMarked( savedShowMarked!=='false' )
      console.log('savedShowMarked-2', savedShowMarked!=='false');
  },[])


  // useEffect(() => {
  //   localStorage.setItem('showMarkedFilter', showMarked);
  // },[showMarked] )


  // used below for conditional rendering
  const itemsUnmarked = () => todoList.filter( x => !x.marked ).length;
  const itemsMarked = () => todoList.filter( x => x.marked ).length;


  return (
    <div className="App">
      <header className="App-header">
        <p> Todo List created with React. </p>
      </header>

      <main id='main' className='glass-8'>
        { console.log( 'main',showMarked ) }
        <ListHeader  
          showMarked={ showMarked }
          setShowMarked={setShowMarked} 
          todoList = { todoList }
          todoHook = { setTodoList } />

        { (itemsUnmarked()>0 || (itemsMarked()>0 && showMarked))
          && <ListBody>
              { 
              todoList.map( (it,idx) => 
                // either show all or only unmarked ones
                (showMarked || !it.marked)
                && <li className='list-item' key={idx} tabIndex="0">
                    <ListItem
                        index = { idx } 
                        itemData = { it } 
                        toggleFunc = { toggleCheckMark } 
                        /> 
                    </li>
              ) 
              }
          </ListBody>
        }

        { (itemsUnmarked()===0 && !showMarked && itemsMarked()>0)
          && <div>There are no items to display<br/>(but you have {itemsMarked()} marked ones)</div>
        }

        { (itemsUnmarked()===0 && itemsMarked()===0)
          && <div>There are no items to display<br/>Good job!</div>
        }

        <ListFooter 
          todoList = { todoList }
          todoHook = { setTodoList } />

      </main>
    </div>
  );
}

export default App;


const ListBody = styled.ul`
  /* border: 1px solid orange; */
  width: 100%;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  li{
    /* min-height: 3vh; */
    height: 4.5vh;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    position: relative;
    padding: 0px 10px;
    /* border: 1px dotted rgba(128, 128, 128, 0.5);; */ */

    /* :focus-visible */
  }
`