export const elements = [
  {
    type: "select",

    label: "Dropdown",
    className: "form-control",
    name: "Dropdown",
    icon: `fa-solid fa-circle-chevron-down`,
    defalulValueLabel: "Dropdown",
    values: [
      {
        value: "Select Option 1",
      },
      {
        value: "Select Option 2",
      },
    ],
  },
  {
    type: "input",
    name: "Full Name",
    prefix: false,
    isRequired: false,
    label: "Full Name",
    icon: `fa-solid fa-circle-user`,
  },
  {
    type: "email",
    name: "Email Address",
    container: true,
    items: [],
    label: "Email Address",
    placeholder: "Email Address",
    icon: `fa-solid fa-envelope`,
  },
  {
    type: "text",
    name: "Text Box",
    label: "Text Box",
    icon: `fa-solid fa-font`,
  },
  {
    type: "tel",
    name: "Phone Number",
    container: true,
    row: true,
    label: "Phone Number",
    icon: `fa-solid fa-phone`,
  },
  {
    type: "text",
    name: "Address",
    label: "Address",
    addressOptions: "Universal",
    icon: `fa-solid fa-map-location-dot`,
  },

  {
    type: "input",
    name: "Heading",
    label: "Heading",
    description: "Description",
    icon: `fa-solid fa-heading`,
  },

  {
    type: "radio",
    name: "Single Selection",
    label: "Single Selection",
    values: ["Male", "Female"],
    icon: `fa-solid fa-circle-dot`,
  },

  {
    type: "checkbox",
    name: "Multiple Selection",
    label: "checkbox",
    values: ["CheckBox One", "checkBox Two"],
    icon: `fa-solid fa-square-check`,
  },
  {
    type: "textarea",
    name: "Message",
    label: "Message",
    icon: `fa-solid fa-text-height`,
  },
  // {
  //   type: "date",
  //   name: "Date & Time",
  //   label: "Date",
  //   dateFormat: "mm/dd/yy",
  //   isTimeActive: false,
  //   timeFormat: "12 Hour",
  //   icon: `fa-solid fa-calendar-days`,
  // },
];

export const levelData = [
  {
    type: "email",
    name: "Email Address",
    id: "defaultLevel",
    container: true,
    label: "Email Address",
    delete:'inActive'
  },
  
  {
    type: "tel",
    name: "Phone Number",
    container: true,
    row: true,
    label: "Phone Number",
    id: "numberLevle",
     delete:'inActive'
  },
  {
    type: "text",
    name: "Address",
    label: "Address",
    addressOptions: "Universal",
    id: "addressLevel",
     delete:'inActive'
  },
];
