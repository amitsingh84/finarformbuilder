<template>
    <div class="responseForm">
         <controller-header />
    <response-side-nav/>
    <dashboard-slot>

    </dashboard-slot>
    </div>
</template>

<script>
import DashboardSlot from '../components/DashboardSlot.vue'
import ResponseSideNav from '../components/ResponseSideNav.vue'
import ControllerHeader from './ControllerHeader.vue'
export default {
  components: { ControllerHeader,  DashboardSlot, ResponseSideNav },
    
}
</script>