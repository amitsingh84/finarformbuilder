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
  },
  {
    type: "tel",
    name: "Phone Number",
    container: true,
    row: true,
    items: [], 
  },
  {
    type: "input",
    name: "Address",
    container: true,
    row: true,
    items: [], 
  },

  {
    type: "row",
    name: "Label",
    container: true,
    row: true,
    items: [], 
  },

  {
    type: "row",
    name: "Single Choise",
    container: true,
    row: true,
    items: [], 
  },

  {
    type: "row",
    name: "Check Box",
    container: true,
    row: true,
    items: [], 
  },

]