// import { ref } from "vue";

// export default {
//     setup() {
//         const date = ref(new Date());
//         const time = ref(new Date());
//         const dayMonthYear = (date) => {
//             const day = date.getDate();
//             const month = date.getMonth() + 1;
//             const year = date.getFullYear();
//             return `${year}/${month}/${day}`;
//         }
       
//         return {
//              date, time,dayMonthYear
//         }
//     },
//     data() {
//         return {

//             date:'',
//             dayMonthYear:''
//         }
//     },

//     methods: {
//     },
//     // computed: {
//     //     dateFormateStyle() {
//     //         if (this.item.dateFormate == 'mm/dd/yy') {
//     //             return this.dayMonthYear
//     //         }
//     //     }
//     // }
// }