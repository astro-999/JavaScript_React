import '../css/listgroup.css'
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";



function ListGroup() {
    let items = ['Kathmandu', 'Bhaktapur', 'Lalitpur', 'Pokhara', 'Biratnagar', 'Butwal', 'Dharan', 'Birgunj'];

    let [selectedIndex, setSelectedIndex] = useState(-1);


    return (
        <div class = 'p-3 mb-2 bg-success-subtle text-success-emphasis'  style={{width: '400px', margin: '20px auto', borderRadius: '5px'}}>
            <h2 className="text-center"  class="text-primary" >List Group</h2>
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
        </div>
    );
}

export default ListGroup;
