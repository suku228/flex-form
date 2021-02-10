import React from 'react'

function useFlexiData() {
    return {
        items: [
            {
            "name": "personname",
            "label": "Person's Name",
            "type": 'TextField',
            "key":'0'
            },
            {
            "name": "states",
            "label": "Person's state",
            "type": "DropDown",
            "values": [
                    "Maharashtra",
                    "Kerala",
                    "Tamil Nadu"
                ],
             "key":'01'
            }
        ],
        children:[
          {
            items: [
                {
                "name": "personname",
                "label": "Person's Name",
                "type": 'TextField',
                'key':'011'
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
}

export default useFlexiData
