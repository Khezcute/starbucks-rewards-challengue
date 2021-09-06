<template>
  <div>
    <NavBanner />
    <Steps />
    <Extras />
  </div>
</template>

<script>
import Steps from "@/components/Sections/Home/Steps.vue";
import Extras from "@/components/Sections/Home/Extras.vue";
import NavBanner from '@/components/NavBar/NavBanner.vue';
export default {
  components: {
    Steps,
    Extras,
    NavBanner
  },
};
</script>
