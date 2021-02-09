import React from 'react'
import '../App.css'

function FlexiForm(props) {
    const flexiConfigChild = props.flexiConfig;
    
    return (
        <div className="border-box mar10">
            {flexiConfigChild.items.map((element, key)=>{
                return <div>
                    {element.label} :
                    {element.type ==="TextField" && <input type="text" value={element.name} />}
                    {element.type ==="DropDown" && <select  value={element.name}>
                        {
                            element.values.map(dropdown=>
                                <option value={dropdown}>{dropdown}</option>)
                        }
                        </select>}
                    </div>
            })}


            {flexiConfigChild.children.map((child)=>{
               return  <FlexiForm flexiConfig={child}/>
            })}
            
        </div>
    )
}

export default FlexiForm
