<template>
    <div class="h-16 px-4 w-full flex items-center justify-between">
        <IconLogo class="w-10 h-10" />
        <IconBurger class="w-8 h-8" />
    </div>
</template>
<script>
import IconBurger from '@/components/Icons/IconBurger.vue'
import IconLogo from '@/components/Icons/IconLogo.vue'
export default {
    components:{
        IconBurger,
        IconLogo
    }
}
</script>