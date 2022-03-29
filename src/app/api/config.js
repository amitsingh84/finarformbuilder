export const elements = [
  {
      type: "select",
      isRequired: false,
      label: "Select",
      className: "form-control",
      name: "select",
      access: false,
      multiple: false,
      icon: "../../app/assets/imgs/h.png",
      defalulValueLabel:'Select',
      values: [
        {
          label: "Option 1",
          value: "option-1",
          selected: true
        },
        {
          label: "Option 1",
          value: "option-1",
          selected: true
        },
        
      ]
  },
  {
    type: "input",
    name: "name",
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
    name: "Single Box",
     label:"radio",
     values:[
        'Male',
        'Female'
      ]
  },

  {
    type: "checkbox",
    name: "Multiple Box",
     lable:"checkbox",
     values:[
       'one',
       'two',
       'three',
       'four'

     ]
  },

]