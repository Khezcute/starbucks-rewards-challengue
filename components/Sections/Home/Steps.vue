<template>
    <div class="flex flex-col items-center justify-center py-10 px-2 gap-4">
        <span class="font-semibold text-lg lg:text-3xl">Getting started is easy</span>
        <span class="text-center text-sm lg:text-base">Earn Stars and get rewarded in a few easy steps.</span>
        <div class="flex flex-col lg:flex-row w-full">
            <div class="card_step lg:hidden">
                <div class="card_step_number">1</div>
                <div class="card_step_desc">
                    <span class="font-semibold pb-3">Download the Starbucks® app</span>
                    <span class="text-sm text-justify tracking-tighter">
                        <a href="" class="underline hover:no-underline"> Join in the app</a> to get access to the full range of Starbucks® Rewards benefits. You can also 
                        <a href="" class="underline hover:no-underline"> join online</a>.
                    </span>
                </div>
            </div>
            <div class="card_step hidden lg:flex">
                <div class="card_step_number">1</div>
                <div class="card_step_desc">
                    <span class="font-semibold pb-3">Create an account</span>
                    <span class="text-sm lg:text-base text-justify lg:text-center tracking-tighter">
                        To get started,
                        <a href="" class="underline hover:no-underline"> join now</a> You can also
                        <a href="" class="underline hover:no-underline">  join in the app</a>
                        to get access to the full range of Starbucks® Rewards benefits.
                    </span>
                </div>
            </div>
            <div class="flex card_step">
                <div class="card_step_number">2</div>
                <div class="card_step_desc">
                    <span class="font-semibold pb-3">Order and pay how you’d like</span>
                    <span class="text-sm lg:text-base text-justify lg:text-center tracking-tighter">
                        Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways.
                        <a href="" class="underline hover:no-underline"> Learn how</a>.
                    </span>
                </div>
            </div>
            <div class="flex card_step">
                <div class="card_step_number">3</div>
                <div class="card_step_desc">
                    <span class="font-semibold pb-3">Earn Stars, get Rewards</span>
                    <span class="text-sm lg:text-base text-justify lg:text-center tracking-tighter">
                        As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!
                    </span>
                </div>
            </div>
        </div>
        
    </div>
</template>
<style lang="postcss" scoped>
.card_step{
    @apply w-full justify-center;
    @screen lg{
        @apply flex-col items-center text-center;
    }
    &_number {
        @apply flex items-center justify-center font-semibold text-2xl text-sb-primary border-2 border-sb-primary w-12 h-12 rounded-full;
    }
    &_desc {
        & a {
            color: rgb(0, 101, 62);
        }
        @apply flex flex-col pl-4 w-3/4;
        @screen lg{
            @apply pt-3 pl-0;
        }
    }
}
    
</style>