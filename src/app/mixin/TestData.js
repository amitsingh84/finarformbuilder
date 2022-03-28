export default{
    methods: {
        showDataId(){
            this.$emit('send-data-id',this.elementId)
            //console.log(this.elementId);
            let newtitle=window.document.getElementById('element_setting')
            //console.log(newtitle);
            newtitle.classList.add("active");
          }
    },
}