

// import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';
import PlaylistRemoveOutlinedIcon from '@mui/icons-material/PlaylistRemoveOutlined';
// import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import styled from "styled-components";
import ToggleMarked from "./ToggleMarked";


// the header of the list component
const ListHeader = (props) => {

  // console.log('ListHeader',props);

  // used below for conditional rendering
  const itemsUnmarked = () => props.todoList.filter( x => !x.marked ).length;
  // const itemsMarked = () => props.todoList.filter( x => x.marked ).length;

  // deletes all the marked items
  const deleteMarkedItems = () => {
    const newTodoList = props.todoList.filter( x => !x.marked ).map( it => true && {...it} );
    console.log( 'deleteMarkedItems - left:', newTodoList );
    props.todoHook( newTodoList );
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
  }


  return (
    <ListHeaderDiv id='list-header' >

        <DateDiv id='header-date'>
          <p>{ Date().split(' ')[2] }</p>
          <div>
            <p>{  Date().split(' ')[1] }</p>
            <p>{  Date().split(' ')[3] }</p>
          </div>
        </DateDiv>

        <RightDiv>
          <p>{ (new Date()).toLocaleDateString('en-GB', { weekday: 'long' }) }</p>
          <p>{ itemsUnmarked() + ' items' }</p>

          <div>
            <div title="delete all marked items">
              <PlaylistRemoveOutlinedIcon onClick={ deleteMarkedItems }/>
            </div>
            <div title="show all/only unmarked">
              <ToggleMarked 
                showMarked={props.showMarked} 
                setShowMarked={props.setShowMarked} 
                />
            </div>
          </div>

        </RightDiv>

    </ListHeaderDiv>
  );
}

export default ListHeader



const ListHeaderDiv = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 7vh;
    /* flex-grow: 0; */
    border-radius: 5px 5px 0px 0px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 20px;
`;

const DateDiv = styled.div`
    /* border: 1px solid red; */
    width: 140px;
    display: flex;
    flex-wrap: wrap;
    margin-left: 10px;

    >p{
      /* border: 1px solid red; */
      font-size: 2rem;
      font-weight: 500;
      width: 40px;
      padding-right: 5px;
    }

    div p{
      /* border: 1px solid blue; */
      width: 80px;
      align-self: flex-start;
      text-align: left;
    }

`;

const RightDiv = styled.div`
    /* border: 1px solid purple; */
    width: 142px;
    align-self: flex-end;
    display: flex;
    flex-wrap: wrap;
    margin-right: 10px;

    >p{
      /* border: 1px solid purple; */
      width: 80px;
      text-align: left;
    }

    p+p{
      /* border: 1px solid purple; */
      width: 60px;
      text-align: right;
    }

    /* the div with the svg icons and the toggle */
    p+div{
      /* border: 1px solid purple; */
      width: 5.8vw;
      flex-grow: 1;
      display: flex;
      justify-content:space-between;
      align-items: flex-end;
    }
    /* the div surrounding the svg icon */
    p+div>div:first-child{
      /* border: 1px solid red; */
      display: flex;     
      flex-grow: 1;
      justify-content:flex-end;
    }

    /* the svg icons inside */
    p+div svg{
      /* border: 1px solid purple; */
      display: inline-block;
      color: green;

      &:hover{
        transition: color .5s ease;
        color: var(--color-button-action);
      }
    }

    /* the div with the toggle button */
    div+div{
      /* border: 1px solid green; */
      /* width: 100%; */
      display: flex;
      flex-grow: 0;
      justify-content: flex-end;
      align-self: center;
    }
`;