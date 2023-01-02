<template>
  <div class="container-div px-4">
    <h1>404: Page not found</h1>
    <div class="paragraph-div mt-3">
      <p>The page you are looking for does not exists.</p>
      <p>
        Where you looking for an specific tour?
        <nuxt-link
          to="/tours"
          class="bg-gray-200 dark:bg-gray-900 rounded-sm p-1 shadow-md dark:shadow-gray-900/60"
        >
          Here you can see all our available tours.
        </nuxt-link>
      </p>
      <p>
        For a costume tour, please contact us. Else, you can return to the
        <nuxt-link
          to="/"
          class="bg-gray-200 dark:bg-gray-900 rounded-sm p-1 shadow-md dark:shadow-gray-900/60"
        >
          home page.
        </nuxt-link>
      </p>
    </div>
  </div>
</template>
