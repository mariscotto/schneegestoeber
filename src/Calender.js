import React, {Component} from 'react'
import doors from './doorconfig/doors.json'
import DoorStory from './DoorStory.js'
import DoorItem from './DoorItem.js'
import DoorEncounter from './DoorEncounter.js'
    
    var today = new Date(),
    date =  today.getDate()

class Calender extends Component {
    render() {
        var list = doors.slice(0, date).map((door, index) =>{
                   
            return door.doorType === 1 ?
                 <DoorStory key={index} title={door.title} shorttitle={door.shorttitle} contentmain={door.contentmain} roll={door.roll} contentadditional1={door.contentadditional1} contentadditional2={door.contentadditional2} contentadditional3={door.contentadditional3} contentadditional4={door.contentadditional4}/>
             : door.doorType === 2 ?
                 <DoorItem key={index} title={door.title} shorttitle={door.shorttitle} contentmain={door.contentmain} image={door.image}/>
             : door.doorType === 3 ?
                 <DoorEncounter key={index} title={door.title} shorttitle={door.shorttitle} contentmain={door.contentmain} contentadditional={door.contentadditional}/>
             :
             <DoorStory />
         })
        return list
    }
}
export default Calender

      /* 
                          return door.doorType === 1 ?
                        <DoorStory key={index} title={door.title} shorttitle={door.shorttitle} contentmain={door.contentmain} roll={door.roll} contentadditional1={door.contentadditional1} contentadditional2={door.contentadditional2} contentadditional3={door.contentadditional3} contentadditional4={door.contentadditional4}/>
                    :
                    door.doorType === 2 ?
                         <DoorItem key={index} title={door.title} shorttitle={door.shorttitle} contentmain={door.contentmain} image={door.image}/>
                    :
                    door.doorType === 3 ?
                        <DoorEncounter key={index} title={door.title} shorttitle={door.shorttitle} contentmain={door.contentmain} contentadditional={door.contentadditional}/>
                })}

              "title":"title7",
        "shorttitle":"7",
        "contentmain":"contentencounter",
        "contentadditional":"content+"

              "title":"title2",
        "shorttitle":"2",
        "contentmain":"contentitem", 
        "image":"thisisaniamge"


              "title":"title1",
        "shorttitle":"1",
        "contentmain":"contentstory",
        "roll":"Dexterity saving throw", 
        "contentadditional1":"content+",
        "contentadditional2":"content+",
        "contentadditional3":"content+",
        "contentadditional4":"content+"

   React.useEffect(() => { 
      for (var i=1;i<date+1;i++) {
        if(doorType ===1) {
          DoorStory.js fill with doors.json[i]
          new file: DoorStory+shorttitle+js
          html+=<DoorName / >
        }
        if(doorType ===2) {
          DoorItem.js fill with doors.json[i]
          new file: DoorItem+shorttitle+js
          html+=<DoorName / >
        }
        if(doorType ===3) {
          DoorEncounter.js fill with doors.json[i]
          new file: DoorEncounter+shorttitle+js
          html+=<DoorName / >
        }
      }
Until the current day is reached (with an increment of 1 starting from 1)
         Take the json file, see if "doorType" is 1, 2, or 3
         If it's 1: take the DoorStory.js template and add the json Eigenschaften in there. Create a new file to the folder "doors" called DoorStory+shorttitle.
         If it's 2: take the DoorItem.js template and add the json Eigenschaften in there. Create a new file to the folder "doors" called DoorItem+shorttitle.
         If it's 3: take the DoorEncounter.js template and add the json Eigenschaften in there. Create a new file to the folder "doors" called DoorEncounter+shorttitle.
        And add the tag to the variable html
  }, []) 
  */