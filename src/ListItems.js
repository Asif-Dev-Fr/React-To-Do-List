import React from 'react';
import './ListItems.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function ListItems (props) {
    const items = props.items;
    console.log(items);
    const listItems = items.map(value =>{
        return <div className="list" id={value.key}>
            <p>
                <input 
                    type="text" 
                    id={value.key} 
                    value={value.text} 
                    onChange={
                        (e) => {
                            props.setUpdate(e.target.value, value.key)
                        }
                    }
                />
                <span>
                    <FontAwesomeIcon className="faIcons" icon='trash' onClick={() => props.deleteItem(value.key)} />
                </span> 
            </p>
        </div>
    });
    return (
        <div>
            <FlipMove duration={300} easing="ease-in-out">
                    {listItems}
            </FlipMove>     
        </div>
    )
}

export default ListItems;