export const elements = [
  {
      type: "select",
      isRequired: false,
      label: "Dropdown",
      className: "form-control",
      name: "Dropdown",
      access: false,
      multiple: false,
      icon: "../../app/assets/imgs/h.png",
      defalulValueLabel:'Dropdown',
      values: [
        {
          label: "Option 1",
          value: "option-1",
         
        },
        {
          label: "Option 2",
          value: "option-2",
         
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
    type: "textarea",
    name: "Address",
    container: true,
    row: true,
    label:"Address"
  },

  {
    type: "input",
    name: "Heading", 
    label:"Heading",
    description:"Description"
  },

  {
    type: "radio",
    name: "Single Choise",
     label:"Single Choise",
     values:[
        'Male',
        'Female'
      ]
  },

  {
    type: "checkbox",
    name: "Multiple Box",
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
     dateFormate: "mm/dd/yy"
     
  },
  {
    type: "time",
    name: "Time",
     label:"Time",
     
  },
]