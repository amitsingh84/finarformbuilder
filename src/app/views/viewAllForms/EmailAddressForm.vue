<template>
    <div>
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
</template>
<script>
export default {
    props:['item']
}
</script>