import React, { useState } from 'react';

// reference = https://dev.to/fpaghar/donesort-an-array-of-objects-ways-in-javascript-48hl#:~:text=When%20sorting%20an%20array%20of,on%20a%20specific%20numeric%20property.
// reference = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare

function SortDropdown({list, setSortedProducts}){
    const handleSort = (e) => {

        // we need an array to work with for the comparisons
        // wont work on an object
        let sorted = [...list];
        if (e.target.value === "name"){
            sorted.sort((a,b) => (a.title.localeCompare(b.title)));
        }
        else{
            sorted.sort((a,b) => (a.basePrice - b.basePrice));
        }
        console.log(sorted);
        setSortedProducts(sorted);
    }

    return (
        <span className="sort-dropdown">
            <label>Sort by: </label>
            <select id="sort" onChange={handleSort}>
                <option value="baseprice" className="body">Base Price</option>
                <option value="name" className="body">Name</option>
            </select>
        </span>
    );
}

export default SortDropdown