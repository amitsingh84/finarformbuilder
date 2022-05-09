<template>
  <div class="dataSubjectSideNav">
    <ul id="controllerUL">
  <li><span class="plus">Controller1</span>
    <ul class="nested">
      <li><a href="#">Application Form</a></li>
      <li><a href="#">Vaccination Form</a></li>
      <li><a href="#">Health Form </a><img src="../../../assets/imgs/new.png" /></li>  
    </ul>
  </li>
<li><span class="plus">Controller2</span>
    <ul class="nested">
      <li><a href="#">Application Form</a></li>
      <li><a href="#">Vaccination Form</a></li>
      <li><a href="#">Health Form</a></li>  
    </ul>
  </li>
</ul>
  </div>
</template>
<script>

export default {
  
  mounted:function()
  {

var toggler = document.getElementsByClassName("plus");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("minus");
  });
}

  }
};

</script>
<style scoped>
.dataSubjectSideNav {
  background-color: var(--primary-color);
  height: 100vh;
  position: fixed;
  left: 0;
  top: 80px;
  width: 21rem;
}
ul, #controllerUL {
  list-style-type: none;
  
}
li,li a{
  font-size: 14px;
  color:var(--extra-color);
  margin-left:10px;
}

#controllerUL {
  margin: 0;
  padding:0px;
  line-height:40px;
}
.plus {
  cursor: pointer;
  -webkit-user-select: none; /* Safari 3.1+ */
  -moz-user-select: none; /* Firefox 2+ */
  -ms-user-select: none; /* IE 10+ */
  user-select: none;
  color: #fff;
  font-size: 14px;
  font-family: roboto-slab;
  font-weight: bold;
}

.plus::before {
  content: "\2795";
  color: #fff;
  display: inline-block;
  margin-right: 6px;
  
}

.minus::before {
content: "\2796";
}

.nested {
  display: none;
}

.active {
  display: block;
}
</style>
