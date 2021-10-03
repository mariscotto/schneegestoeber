import React from 'react';
import Door from './DoorStory.js';
import doordata from './doorconfig/doors.json';

export default function Calender() {

    var date =  1
    console.log(doordata);


    //3 types of empty doors: "DoorEncounter.js", "DoorItem.js", "DoorStory.js"; each with different placeholders 
    //3 content arrays:"arrayEncounter", "arrayItem", "arrayStory"; objects with content that can be filled into placeholders
    //1 array "arrayComplete": 24 doors matched together
    //div: for-loop counting up to date, each date corresponding to object listed in "arrayComplete" array

    //json list (all types, enum darin verschiedene Attribute)
    //
    
    return (
        <div>
            <Door/>
        </div>
    )
}
