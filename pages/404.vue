<template>
  <div
    class="m-auto flex min-h-[calc(100vh-380px)] flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-[120px] text-stone-900 laptop:max-w-5xl laptop:pt-[100px] dark:text-stone-200"
  >
    <h1 class="mt-6 text-center text-8xl">404</h1>
    <div class="mx-auto mt-3 flex max-w-3xl flex-col gap-4 text-center">
      <p class="text-2xl font-bold">
        The page you were looking for does not exist.
      </p>
      <p>
        Where you looking for an specific tour?
        <NuxtLink
          to="/tours"
          class="cursor-pointer text-emerald-800 opacity-80 transition-all duration-300 ease-in-out hover:opacity-100 dark:text-emerald-200"
        >
          Here you can see all our available tours.
        </NuxtLink>
      </p>
      <p>
        For a custom tour, please contact us. Else, you can return to the
        <NuxtLink
          to="/"
          class="cursor-pointer text-emerald-800 opacity-80 transition-all duration-300 ease-in-out hover:opacity-100 dark:text-emerald-200"
        >
          home page.
        </NuxtLink>
      </p>
    </div>
  </div>
</template>
