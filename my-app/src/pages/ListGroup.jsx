import '../css/listgroup.css'

import { useState } from "react";



function ListGroup() {
    let items = ['Kathmandu', 'Bhaktapur', 'Lalitpur', 'Pokhara', 'Biratnagar', 'Butwal', 'Dharan', 'Birgunj'];

    let [selectedIndex, setSelectedIndex] = useState(-1);


    return (
        <>
            <h1 className="text-center" >List Group</h1>
            {items.length === 0 && <p className="text-center">No items found</p>}

            <ul className="list-group "  >
                {items.map((item, index) => (
                    <li
                        className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                        key={item}
                        onClick={() => { setSelectedIndex(index); }}>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
