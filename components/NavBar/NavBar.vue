<template>
    <div class="navbar">
        <div class="flex items-center h-full">
            <IconLogo class="navbar_logo" />
            <div class="navbar_menu">
                <span>Menu</span>
                <span>Rewards</span>
                <span>Gift Cards</span>
            </div>  
        </div>
        <div class="flex items-center lg:w-1/4">
            <button @click="showMenu = !showMenu">
                <IconBurger class="w-8 h-8 lg:hidden" />
            </button>
            <div class="navbar_btn">
                <button class="hover:text-sb-primary">Find a Store</button>
                <button class="navbar_btn_item ml-6 hover:bg-black hover:bg-opacity-5">Sign In</button>
                <button class="navbar_btn_item bg-black text-white hover:bg-opacity-80">Join now</button>
            </div>
        </div>
        <div
            @click="showMenu = !showMenu"
            :class="showMenu ? 'block top-pos bg-opacity-40' : 'hidden bg-opacity-0'"
            class="fixed z-10 bg-black inset-0 w-full h-full transition duration-300 ease-in-out" />
        <SideMenu
            class="top-pos"
            :class="showMenu ? 'sidebar' : 'sidebar-close'"
            @close="showMenu = !showMenu"
        />
    </div>
</template>
<script>
import IconBurger from '@/components/Icons/IconBurger.vue'
import IconLogo from '@/components/Icons/IconLogo.vue'
import SideMenu from '@/components/SideBar/SideMenu.vue'
export default {
    components:{
        IconBurger,
        IconLogo,
        SideMenu
    },
    data() {
        return {
            showMenu: false
        }
    },
}
</script>
<style lang="postcss" scoped>
.navbar {
    height: 4rem;
    @apply px-4 w-full flex items-center justify-between z-30 sticky top-0 bg-white shadow-xl;
    @screen md {
        height: 5.175rem;
        @apply px-10;
    }
    @screen lg {
        height: 6.3rem;
    }
    &_logo {
        @apply w-8 h-8;
        @screen md {
            @apply w-14 h-14;
        }
    }
    &_menu {
        @apply hidden;
        & span {
            @apply flex items-center justify-center h-full text-sm text-center tracking-widest uppercase;
            &:hover{
                @apply text-sb-primary;
            }
            &:active, &:focus{
                box-shadow: inset 0 -6px #008248;
            }
        }
        @screen lg {
            @apply flex gap-6 h-full ml-8 font-bold;
        }
    }
    &_btn{
        @apply hidden w-full items-center justify-between text-sm;
        @screen lg {
            @apply flex;
        }
        &_item{
            @apply px-4 py-1 border border-black rounded-full;
        }
    }
}
.top-pos{
    top: 4rem;
    @screen md {
        top: 5.175rem;
    }
}
.sidebar {
  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  visibility: visible;
  transform: translateX(0);
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
}
.sidebar-close {
  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  visibility: hidden;
  transform: translateX(100%);
  -webkit-transform: translateX(100%);
  -moz-transform: translateX(100%);
}
</style>