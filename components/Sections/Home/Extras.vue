<template>
    <div class="flex flex-col items-center justify-center py-10 px-2 gap-4">
        <span class="font-semibold text-lg">Endless Extras</span>
        <span class="text-center text-sm lg:text-base px-5 lg:w-1/2 lg:pb-5">
            Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.
        </span>
        <div class="flex flex-col lg:flex-row w-full">
            <div class="card_step">
                <div class="card_step_img">
                    <img src="img/1-fun-freebies.jpg" alt="">
                </div>
                <div class="card_step_desc">
                    <span class="font-semibold">Fun freebies</span>
                    <span class="text-sm lg:text-base text-justify lg:text-center tracking-tighter">
                        Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.
                    </span>
                    <a href="" class="text-sm lg:text-base underline hover:no-underline"> Learn more</a>
                </div>
            </div>
            <div class="card_step">
                <div class="card_step_img">
                    <img src="img/2-order-and-pay-ahead.jpg" alt="">
                </div>
                <div class="card_step_desc">
                    <span class="font-semibold">Order & pay ahead</span>
                    <span class="text-sm lg:text-base text-justify lg:text-center tracking-tighter">
                        Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.
                    </span>
                    <a href="" class="text-sm lg:text-base underline hover:no-underline"> Learn more</a>
                </div>
            </div>
            <div class="card_step">
                <div class="card_step_img">
                    <img src="img/3-get-to-free-faster.jpg" alt="">
                </div>
                <div class="card_step_desc">
                    <span class="font-semibold">Get to free faster</span>
                    <span class="text-sm lg:text-base text-justify lg:text-center tracking-tighter">
                        Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.
                    </span>
                    <a href="" class="text-sm lg:text-base underline hover:no-underline"> Learn more</a>
                </div>
            </div>
        </div>
        
    </div>
</template>
<style lang="postcss" scoped>
.card_step{
    @apply flex w-full justify-center px-2;
    @screen lg{
        @apply flex-col items-center text-center;
    }
    &_img {
        @apply w-28 h-28;
    }
    &_desc {
        & a {
            color: rgb(0, 101, 62);
        }
        @apply flex flex-col pl-4 w-2/3 gap-4;
        @screen lg{
        @apply pl-0 pt-3;
    }
        
    }
}
    
</style>