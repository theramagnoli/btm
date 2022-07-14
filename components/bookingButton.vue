<template>
  <div class="tablet:w-full">
    <div
      class="fixed bottom-0 tablet:justify-end grid tablet:pb-6 laptop:px-0 w-full"
    >
      <button
        class="border-t-[2px] tablet:border-l-[2px] tablet:border-b-[2px] tablet:rounded-l-lg items-center justify-center p-3 pb-2 tablet:p-2 tablet:pr-[18px] tablet:pb-1 uppercase border-sky-500 text-gray-800 dark:text-gray-200 font-bold transition-all flex backdrop-blur-lg text-lg w-full bg-gray-200/70 dark:bg-black/50"
        @click="toFareharbor()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mr-1 pb-[6px]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <p class="">Book now</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toFareharbor() {
      return !FH.open({ shortname: "boutiquetoursmexico", flow: 278797 });
    },
  },
};
</script>
