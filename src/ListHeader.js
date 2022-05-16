// the header of the list component
const ListHeader = (props) => {
    return (
      <div id='list-header'>
          <p>This is the header. There are {props.itemsCount} items.</p>
      </div>
    );
  }

  export default ListHeader
  