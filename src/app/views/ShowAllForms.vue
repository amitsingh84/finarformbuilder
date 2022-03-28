<template>
  <div class="showAllForms">
    <div class="closeBtn" >

      <img @click="closePage" src="../../assets/imgs/close.png" alt="">
      </div>
      <form @submit.prevent="SubmitData">
      <div class="previewFromBlockStyle" >
    <div class="perviewBlockSection" v-for="item of items" :key="item.id">
      <!-- {{item.name}} -->
      <div v-if="item.name == 'name'">
        <div class="nameForm">
          
          <p class="nameLabel" :style="`text-align:${item.align}`">
            <label for="">{{ item.label }}</label>
          </p>
          <div class="inputFullNameRow">
            <select name="selectprfix" id="selecttitle" v-if="item.prefix">
              <option value="mr">Mr</option>
              <option value="mrs">Mrs</option>
            </select>
            <input
              class="input cursorPointerStyle"
              name="first name"
              placeholder="First Name"
              id="fname"
              type="text"
              
              :required=item.isRequired
            />
            <input
              type="text"
              name="last name"
              id="lname"
              placeholder="Last Name"
                
              class="cursorPointerStyle"
              :required=item.isRequired
            />
          </div>
        </div>
      </div>
      <div v-else-if="item.name == 'heading'">Heading</div>
      <div v-else-if="item.name == 'Email Address'">email</div>
      <div v-else>Number</div>
    </div>
    <button type="submit">Submit</button>
    </div>
    </form>
  </div>
</template>
<script>
export default {
  props: ["items"],
methods: {
    closePage(){
        this.$emit('close-page')
        //console.log('close');
    },
SubmitData(){
  console.log(this.items);
}
},
};
</script>
<style scoped>
.closeBtn img {
    width: 34px;
    background: #fff;
    padding: 10px;
    cursor: pointer;
    filter: invert(1);
}
.closeBtn {
    text-align: right;
}
.previewFromBlockStyle {
    padding: 17px;
    border: 1px solid;
    margin: 17px;
    border-radius: 7px;
}

p.nameLabel {
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 4px;
}

.inputFullNameRow {
    display: flex;
    gap: 17px;
}

.inputFullNameRow input {
    flex: 1;
    height: 48px;
    border-radius: 7px;
    border: 1px solid #000;
    padding-left: 10px;
}
.perviewBlockSection{
 
    margin: 17px 0;
 
}
</style>