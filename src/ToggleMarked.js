import styled from "styled-components";

const ToggleMarked = (props) => {
    // console.log('ToggleMarked',props);

    const handleClick = (evt) => {
        // console.log('handleClick-events?', evt.target.checked);
        const checkedValue = evt.target.checked;
       
        props.setShowMarked( checkedValue ) ;
        localStorage.setItem('showMarkedFilter', checkedValue);

        // console.log('handleClick', checkedValue );
        // console.log('handleClick', props.showMarked );


    }

    const handleOnChange = () => {};

    return (
        <LabelSwitch>
            <input type="checkbox"
                name='chk'
                checked={ props.showMarked }
                tabIndex="-1"
                // defaultChecked={props.showMarked}
                onClick={ handleClick }
                onChange={ handleOnChange }
                />
            <span className="slider round"></span>
        </LabelSwitch>
    )
}


export default ToggleMarked


// this was a real pain to port :'( 
const LabelSwitch = styled.label`
    position: relative;
    display: inline-block;
    width: 30px;
    height: 16px;

    &>input{
        opacity: 0;
        width: 0;
        height: 0;
    }

    &>input:checked+span{
        background-color: green;        
    }

    &>input:checked+span:before {
        -webkit-transform: translateX(15px);
        -ms-transform: translateX(15px);
        transform: translateX(15px);
    }

    &>span{
        border-radius: 5px;

        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(204, 204, 204, 0.7);
        -webkit-transition: 0.4s;
        transition: 0.4s;
        
        &:before{
            border-radius: 30%;

            position: absolute;
            content: "";
            height: 12px;
            width: 12px;
            left: 2px;
            bottom: 2px;
            background-color: white;
            -webkit-transition: 0.4s;
            transition: 0.4s;        
        }
    }
    
`