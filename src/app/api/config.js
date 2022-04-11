export const elements = [
  {
      type: "select",
      isRequired: false,
      label: "Dropdown",
      className: "form-control",
      name: "Dropdown",
      icon: "../../app/assets/imgs/h.png",
      defalulValueLabel:'Dropdown',
      values: [
        {
         
          value: "Choose Option 1",
         
        },
        {
           value: "Choose Option 2",
         
        },
        
      ]
  },
  {
    type: "input",
    name: "Full Name",
    container: true,
    row: true, 
    prefix: false,
    isRequired: false,
    label:"Full Name",
  },
  {
    type: "email",
    name: "Email Address",
    container: true,
    items: [], 
    label:"Email Address",
    placeholder:"Email Address"
  },
  {
    type: "tel",
    name: "Phone Number",
    container: true,
    row: true,
    label:"Phone Number"
  },
  {
    type: "text",
    name: "Address",
    container: true,
    row: true,
    label:"Address",
    addressOptions:"Universal"
  },

  {
    type: "input",
    name: "Heading", 
    label:"Heading",
    description:"Description"
  },

  {
    type: "radio",
    name: "Single Choice",
     label:"Single Choice",
     values:[
        'Male',
        'Female'
      ]
  },

  {
    type: "checkbox",
    name: "Multiple Choice",
     label:"checkbox",
     values:[
       'one',
       'two',
       'three',
       'four'

     ]
  },
  {
    type: "textarea",
    name: "Message",
     label:"Message",
     
  },
  {
    type: "date",
    name: "Date",
     label:"Date",
     dateFormat: "mm/dd/yy",
     isTimeActive: false,
     timeFormat:'12 Hour'
  },
  {
    type: "time",
    name: "Time",
     label:"Time",
     
  },
]