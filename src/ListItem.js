import styled from 'styled-components';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';


// the item component of the list
const ListItem = (props) => {

    // handle dbl-click -- edit, use evt,target
    // const handleDblClick = (evt) => {
    //   console.log( evt.target );
    //   setEditing( !editing );
    // };

    return (
      // <li className='list-item' onDoubleClick={ (e) => handleDblClick(e) }>
      <ItemDiv 
        marked={ props.itemData.marked }
        onDoubleClick={ () => props.toggleFunc(props.index) }
        >

        <p>{props.itemData.text}</p>

          {
            ( props.itemData.marked
              && <CheckCircleOutlineIcon onClick={ () => props.toggleFunc(props.index) }/>
            ) || <CircleOutlinedIcon onClick={ () => props.toggleFunc(props.index) }/>
          }

      </ItemDiv>
    )
  }

export default ListItem


const ItemDiv = styled.div`
  /* border: 1px solid red; */
  min-height: 3vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* align-items: stretch; */
  position: relative;
  flex-grow: 1;
  /* border: 1px dotted rgba(128, 128, 128, 0.5); */

  p{
    /* border: 1px solid purple; */
    margin: 0px, 5px;
    padding: 0px 3px;

    /* text-decoration: line-through */
    ${ (props) => props.marked && `
      text-indent: 5px;
      font-style: italic;
      color: grey;` 
    }
  }
  

  svg{
    /* border: 1px solid purple; */
    font-size: 1.6rem;
    align-self: center;
    color: ${ (props) => (props.marked ? `green;` : `rgba(128, 128, 128, 0.5);`) }
  }  
`
