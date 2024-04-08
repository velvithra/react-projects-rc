import {useState} from 'react'

import dataItem from './data'
import './Accord.css'

export default function Accordian()  {
    const [selected,setSelected]=useState(null);
    const [enablemultiple,setEnablemultiple]=useState(false);
    const [multiple,setMultiple]=useState([]);


    function handleclick(getCurrentId){
       setSelected(getCurrentId === selected ? null: getCurrentId);
    }

    function handleMultiple(getCurrentId){
        let cpymultiple=[...multiple];
        const findIndexofCurrentId=cpymultiple.indexOf(getCurrentId);
        if(findIndexofCurrentId === -1)cpymultiple.push(getCurrentId)
        else cpymultiple.splice(findIndexofCurrentId,1)
      setMultiple(cpymultiple)
    }
    return(
        <>
          <div className="accordian">
            <button onClick={() => setEnablemultiple(!enablemultiple)}>Enable multiple selection</button>
            <div className="accquestion">
                {dataItem && dataItem.length > 0 ? (
                    dataItem.map((datait)=>
                 {
                  <div className="item">
                    <div onClick={
                         enablemultiple
                        ?()=>handleMultiple(datait.id)
                        :()=>handleclick(datait.id)
                        }
                         className="title">
                        <h3>{datait.question}</h3>
                        <span>+</span>
                    </div>
                    { 
                    selected == datait.id  || multiple.indexOf(datait.id) !== -1 ?
                    (
                    <div className='content'>{datait.answer}</div>
                    ) :
                    null
                    }
                    </div>
}))
                  
        
            :(
            <div>No data found</div>
            )
            }
                
            </div>
          </div>
        </>
    );
}