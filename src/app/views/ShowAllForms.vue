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
            <label for="">{{ item.label }} <sup v-if="item.isRequired">*</sup></label>
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
      <div v-else-if="item.name == 'Email Address'">
        <div class="emailForm">
          
          <p class="nameLabel" :style="`text-align:${item.align}`">
            <label for="">{{ item.label }} <sup v-if="item.isRequired">*</sup></label>
          </p>
          <div class="inputFullNameRow">
            <select name="selectprfix" id="selecttitle" v-if="item.prefix">
              <option value="mr">Mr</option>
              <option value="mrs">Mrs</option>
            </select>
            <input
              class="input cursorPointerStyle"
              name="first name"
              placeholder="Enter Email"
              id="email"
              type="email"
              :required=item.isRequired
            />
             
          </div>
        </div>

      </div>
      <div v-else-if="item.name == 'Phone Number'">
         <div class="nameForm">
          
          <p class="nameLabel" :style="`text-align:${item.align}`">
            <label for="">{{ item.label }} <sup v-if="item.isRequired">*</sup></label>
          </p>
          <div class="inputFullNameRow">
             
            <input
              class="input cursorPointerStyle"
              name="Enter Number"
              placeholder="Enter Number"
              id="number"
              type="tel"
              
              :required=item.isRequired
            />
             
          </div>
        </div>
      </div>
      <div v-else-if="item.name == 'Address'">
         <div class="nameForm">
          
          <p class="nameLabel" :style="`text-align:${item.align}`">
            <label for="">{{ item.label }} <sup v-if="item.isRequired">*</sup></label>
          </p>
          <div class="inputFullNameRow">
             <textarea class="input cursorPointerStyle"
              name="Enter Number"
              placeholder="Enter Number"
              id="number"
              :required=item.isRequired
               rows="4" 
               style="width:100%"></textarea>
           
             
          </div>
        </div>
      </div>
      <div v-else-if="item.name == 'Heading'">
         <div class="nameForm">
          






          <div class="nameLabel" :style="`text-align:${item.align}`">
            <h1 for="">{{ item.label }} <sup v-if="item.isRequired">*</sup></h1>
          <p>{{item.description}}</p>
          </div>
          
        </div>
      </div>
       <div v-else-if="item.name == 'select'">
         <div class="nameForm">
          
          <p class="nameLabel" :style="`text-align:${item.align}`">
            <label for="">{{ item.label }} <sup v-if="item.isRequired">*</sup></label>
          </p>
          <div >
            <select >
<option selected >
          {{
            item.defalulValueLabel == "Select"
              ? "Select"
              : item.defalulValueLabel
          }}
        </option>
            <option v-for="(itemm,index) in item.values" :key="index" value="1" :hidden="item.defalulValueLabel==itemm.value">
           {{itemm.value }}
          </option>
            </select>
           
             
          </div>
        </div>
      </div>
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
    overflow-y: scroll;
    height: calc(100vh - 188px);
}
.previewFromBlockStyle::-webkit-scrollbar{
  width: 0;
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