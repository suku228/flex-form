import logo from './logo.svg';
import './App.css';
import FlexiForm from './components/FlexiForm';
import React, {useState} from 'react'

function App() {
  const initState = {
    items: [
        {
        "name": "personname",
        "label": "Person's Name",
        "type": 'TextField'
        },
        {
        "name": "states",
        "label": "Person's state",
        "type": "DropDown",
        "values": [
                "Maharashtra",
                "Kerala",
                "Tamil Nadu"
            ]
        }
    ],
    children:[
      {
        items: [
            {
            "name": "personname",
            "label": "Person's Name",
            "type": 'TextField'
            },
            {
            "name": "states",
            "label": "Person's state",
            "type": "DropDown",
            "values": [
                    "Maharashtra",
                    "Kerala",
                    "Tamil Nadu"
                ]
            }
        ],
        children:[
          {
            items: [
                {
                "name": "personname",
                "label": "Person's Name",
                "type": 'TextField'
                },
                {
                "name": "states",
                "label": "Person's state",
                "type": "DropDown",
                "values": [
                        "Maharashtra",
                        "Kerala",
                        "Tamil Nadu"
                    ]
                }
            ],
            children:[]
          },
          {
            items: [
                {
                "name": "personname",
                "label": "Person's Name",
                "type": 'TextField'
                },
                {
                "name": "states",
                "label": "Person's state",
                "type": "DropDown",
                "values": [
                        "Maharashtra",
                        "Kerala",
                        "Tamil Nadu"
                    ]
                }
            ],
            children:[]
          }
        ]
      },
      {
        items: [
            {
            "name": "personname",
            "label": "Person's Name",
            "type": 'TextField'
            },
            {
            "name": "states",
            "label": "Person's state",
            "type": "DropDown",
            "values": [
                    "Maharashtra",
                    "Kerala",
                    "Tamil Nadu"
                ]
            }
        ],
        children:[
          {
            items: [
                {
                "name": "personname",
                "label": "Person's Name",
                "type": 'TextField'
                },
                {
                "name": "states",
                "label": "Person's state",
                "type": "DropDown",
                "values": [
                        "Maharashtra",
                        "Kerala",
                        "Tamil Nadu"
                    ]
                }
            ],
            children:[]
          },
          {
            items: [
                {
                "name": "personname",
                "label": "Person's Name",
                "type": 'TextField'
                },
                {
                "name": "states",
                "label": "Person's state",
                "type": "DropDown",
                "values": [
                        "Maharashtra",
                        "Kerala",
                        "Tamil Nadu"
                    ]
                }
            ],
            children:[
              {
                items: [
                    {
                    "name": "personname",
                    "label": "Person's Name",
                    "type": 'TextField'
                    },
                    {
                    "name": "states",
                    "label": "Person's state",
                    "type": "DropDown",
                    "values": [
                            "Maharashtra",
                            "Kerala",
                            "Tamil Nadu"
                        ]
                    }
                ],
                children:[]
              }
            ]
          }
        ]
      }
    ]
  }

  const [flexiConfig, setFlexiConfig] = useState(initState);
  
  const onSubmit = ()=>{
    console.log(flexiConfig)
  }
  return (
    <div className="App">
      <header >
        <FlexiForm flexiConfig={flexiConfig}/>
        <button onClick={onSubmit}>Submit</button>
      </header>
    </div>
  );
}

export default App;
