<template>
  <div class="showAllForms">
      <button @click="closePage">close</button>
    <div v-for="item of items" :key="item.id">
      <!-- {{item.name}} -->
      <div v-if="item.name == 'name'">
        <div>
          <p>
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
              readonly
            />
            <input
              type="text"
              name="last name"
              id="lname"
              placeholder="Last Name"
              readonly
              class="cursorPointerStyle"
            />
          </div>
        </div>
      </div>
      <div v-else-if="item.name == 'heading'">Heading</div>
      <div v-else-if="item.name == 'Email Address'">email</div>
      <div v-else>Number</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["items"],
methods: {
    closePage(){
        this.$emit('close-page')
        console.log('close');
    }
},
};
</script>
