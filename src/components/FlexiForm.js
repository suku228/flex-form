import React from 'react'
import '../App.css'

function FlexiForm(props) {
    const flexiConfigChild = props.flexiConfig;
    
    return (
        <div className="border-box mar10">
            {flexiConfigChild.items.map((element, key)=>{
                return <div>
                    {element.label} :
                    {element.type ==="TextField" && <input type="text" value={element[element['name']]} onChange={(e)=>props.setDynamicVal( element.key, e.target.value )}/>}
                    {element.type ==="DropDown" && <select  value={element[element['name']]} onChange={(e)=>props.setDynamicVal( element.key, e.target.value )}>
                        {
                            element.values.map(dropdown=>
                                <option value={dropdown}>{dropdown}</option>)
                        }
                        </select>}
                    </div>
            })}


            {flexiConfigChild.children.map((child)=>{
               return  <FlexiForm flexiConfig={child} setDynamicVal={props.setDynamicVal}/>
            })}
            
        </div>
    )
}

export default FlexiForm
