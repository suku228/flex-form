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
                    ],
                    'key':'0111'
                }
            ],
            children:[
              {
                items: [
                    {
                    "name": "personname",
                    "label": "Person's Name",
                    "type": 'TextField',
                    'key':'01111'
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
                        'key':'011111'
                    }
                ],
                children:[]
              },
              {
                items: [
                    {
                    "name": "personname",
                    "label": "Person's Name",
                    "type": 'TextField',
                    'key':'0111111'
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
                        'key':'01111111'
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
                "type": 'TextField',
                'key':'011111111'
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
                    'key':'0111111111'
                }
            ],
            children:[
              {
                items: [
                    {
                    "name": "personname",
                    "label": "Person's Name",
                    "type": 'TextField',
                    'key':'01111111111'
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
                        'key':'011111111111'
                    }
                ],
                children:[]
              },
              {
                items: [
                    {
                    "name": "personname",
                    "label": "Person's Name",
                    "type": 'TextField',
                    'key':'0111111111111'
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
                        'key':'01111111111111'
                    }
                ],
                children:[
                  {
                    items: [
                        {
                        "name": "personname",
                        "label": "Person's Name",
                        "type": 'TextField',
                        'key':'011111111111111'
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
                        'key':'0111111111111111'
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
