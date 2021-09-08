<template>
    <div class="flex flex-col items-center justify-center py-10 px-4 lg:px-10 gap-4 bg-star">
        <span class="font-semibold text-lg">Cash or card, you earn Stars</span>
        <span class="text-center text-sm lg:text-base px-5 lg:w-1/2 lg:pb-5">
            No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.
        </span>
        <div class="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row w-full">
            <div class="w-full lg:w-1/5 self-start md:col-span-2 md:py-4 lg:py-6 flex flex-col pl-2 text-lg md:text-2xl">
                <span class="font-semibold">1★ per dollar</span>
                <span class="text-sm lg:text-base">Pay as you go</span>
            </div>
            <div class="card_star">
                <div class="card_star_img">
                    <img src="img/1A.png" alt="">
                </div>
                <div class="card_star_desc">
                    <span class="font-semibold">Scan and pay separately</span>
                    <span class="text-sm lg:text-base text-justify lg:text-left tracking-tighter">
                        Use cash or credit/debit card at the register.
                    </span>
                </div>
            </div>
            <div class="card_star">
                <div class="card_star_img">
                    <img src="img/1B.png" alt="">
                </div>
                <div class="card_star_desc">
                    <span class="font-semibold">Save payment in the app</span>
                    <span class="text-sm lg:text-base text-justify lg:text-left tracking-tighter">
                        Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.
                    </span>
                </div>
            </div>
        </div>
        <hr class="px-5 pb-5 pt-3 border-0 m-0 w-full">
        <div class="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row w-full">
            <div class="w-full lg:w-1/5 self-start md:col-span-2 md:py-4 lg:py-6 flex flex-col pl-2 text-lg md:text-2xl">
                <span class="font-semibold">2★ per dollar</span>
                <span class="text-sm lg:text-base">Add funds in the app</span>
            </div>
            <div class="card_star">
                <div class="card_star_img">
                    <img src="img/2A.png" alt="">
                </div>
                <div class="card_star_desc">
                    <span class="font-semibold">Preload</span>
                    <span class="text-sm lg:text-base text-justify lg:text-left tracking-tighter">
                        To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.
                    </span>
                </div>
            </div>
            <div class="card_star">
                <div class="card_star_img">
                    <img src="img/2B.png" alt="">
                </div>
                <div class="card_star_desc">
                    <span class="font-semibold">Register your gift card</span>
                    <span class="text-sm lg:text-base text-justify lg:text-left tracking-tighter">
                        Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.
                    </span>
                </div>
            </div>
        </div>
        <hr class="px-5 pb-5 pt-3 border-0 m-0 w-full">
        <div class="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row w-full">
            <div class="w-full lg:w-1/5 self-start md:col-span-2 md:py-4 lg:py-6 flex flex-col pl-2 text-lg md:text-2xl">
                <span class="font-semibold">Up to 3★ per dollar</span>
                <span class="text-sm lg:text-base">With Starbucks® Rewards Visa® Card</span>
            </div>
            <div class="card_star">
                <div class="card_star_img">
                    <img src="img/3A.png" alt="">
                </div>
                <div class="card_star_desc lg:col-span-2">
                    <span class="font-semibold">Earn Stars even faster</span>
                    <span class="text-sm lg:text-base text-justify lg:text-left tracking-tighter">
                        Earn Stars on all purchases you make with our 
                        <a href="" class="text-sm lg:text-base underline hover:no-underline"> credit card</a> 
                        cardopens in new window
                        in and outside of Starbucks. Earn 1 Star per $1 when you digitally preload your 
                        Starbucks Card with your Starbucks® Rewards Visa® Card, and earn 2 Stars per $1 
                        when you pay with that preloaded Starbucks Card.
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="postcss" scoped>
.bg-star{
    background-color: #f3f1e7;
}
.card_star{
    @apply flex w-full justify-center px-2 py-3 mb-12;
    @screen lg{
        @apply justify-start w-1/3;
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
        @apply pl-6 pt-3;
    }
        
    }
}
hr::before{
    border-top: 2px solid rgba(0,0,0,.1);
	content: "";
	display: block;
}
</style>