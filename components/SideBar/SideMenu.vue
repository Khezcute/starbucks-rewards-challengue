<template>
    <div class="flex flex-col z-20 bg-white h-full w-3/4 fixed bottom-0 right-0 py-5 lg:hidden overflow-hidden m-0">
        <div class="flex flex-col gap-2 w-full text-lg md:text-xl">
            <span class="px-5 py-3">Menu</span>
            <span class="px-5 py-3">Rewards</span>
            <span class="px-5 py-3">Gift Cards</span>
            <hr class="px-5 pb-5 pt-3 border-0 m-0">
        </div>
        <div class="grid grid-cols-2 mr-4 md:mt-0 md:w-2/4">
            <button class="w-24 md:w-28 text-sm md:text-base px-4 py-1 border border-black rounded-full ml-6 hover:bg-black hover:bg-opacity-5">Sign In</button>
            <button class="w-24 md:w-28 text-sm md:text-base px-4 py-1 border border-black rounded-full bg-black text-white hover:bg-opacity-80">Join now</button>
            <button class="hover:text-sb-primary text-sm md:text-base py-4">Find a Store</button>
        </div>
    </div>
</template>
<style lang="postcss" scoped>
hr::before{
    border-top: 2px solid rgba(0,0,0,.1);
	content: "";
	display: block;
}
</style>