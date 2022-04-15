export default{
    methods: {
        showDataId(){
            this.$emit('show-data-id',this.elementId)
            //console.log(this.elementId);
            let newtitle=window.document.getElementById('element_setting')
            //console.log(newtitle);
            newtitle.classList.add("active");
          }
    },
}