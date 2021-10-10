import React, {Component} from 'react'
import doors from './doorconfig/doors.json'
import DoorStory from './DoorStory.js'
import DoorItem from './DoorItem.js'
import DoorEncounter from './DoorEncounter.js'

class Calender extends Component {
    render() {
        return (
            <div>
                {doors.map((doorDetail, index) =>{
                    return <h1>{doorDetail.title}</h1>
                })}

            </div>
        )
    }
}
export default Calender