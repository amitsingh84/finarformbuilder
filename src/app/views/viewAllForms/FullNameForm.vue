<template>
     <div class="nameForm">
          
          <p class="nameLabel">
            <label for="">{{ item.label }} <sup v-if="item.isRequired">*</sup></label>
          </p>
          <p v-if="item.instructions" class="subHeading">{{item.instructions}}</p>
          <div class="inputFullNameRow">
            <select name="selectprfix" id="selectTitle" v-if="item.prefix">
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
</template>

<script>
export default {
    props:['item']
}
</script>