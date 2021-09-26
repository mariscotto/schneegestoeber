import React from 'react';
import Door from './DoorEncounter.js';

export default function Calender() {

    var date =  1
    console.log(date);


    //3 types of empty doors: "DoorEncounter.js", "DoorItem.js", "DoorStory.js"; each with different placeholders 
    //3 content arrays:"arrayEncounter", "arrayItem", "arrayStory"; objects with content that can be filled into placeholders
    //1 array "arrayComplete": 24 doors matched together
    //div: for-loop counting up to date, each date corresponding to object listed in "arrayComplete" array
    
    return (
        <div>
            <Door/>
        </div>
    )
}
