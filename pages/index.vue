<template>
  <div>
    <NavBanner />
    <Steps />
    <Extras />
    <Stars />
  </div>
</template>

<script>
import Steps from "@/components/Sections/Home/Steps.vue";
import Extras from "@/components/Sections/Home/Extras.vue";
import NavBanner from '@/components/NavBar/NavBanner.vue';
import Stars from '@/components/Sections/Home/Stars.vue'
export default {
  components: {
    Steps,
    Extras,
    NavBanner,
    Stars
  },
};
</script>
