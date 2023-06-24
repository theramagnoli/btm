<script setup lang="ts">
import { XMarkIcon } from "@heroicons/vue/24/solid";
import { onClickOutside } from "@vueuse/core";

const emit = defineEmits(["close"]);
const modal = ref<HTMLElement | null>(null);

const props = defineProps<{
  title: string;
  isOpen: boolean;
}>();

onClickOutside(modal, () => {
  emit("close");
});
</script>

<template>
    <Teleport to="body">
      <Transition name="page" duration="100">
        <div v-if="isOpen" class="fixed top-0 left-0 w-screen h-[100dvh] bg-stone-200/70 dark:bg-black/70 z-40 flex justify-center items-end filter backdrop-blur-md">
            <Transition name="page" duration="500">
            <div
              class="bg-stone-100 dark:bg-stone-900 rounded-t-sm laptop:rounded-sm w-full max-w-lg p-4 flex flex-col gap-4 text-stone-800 dark:text-stone-200 shadow-2xl dark:shadow-gray-800 pb-10 tablet:pb-32"
              ref="modal"
            >
              <div class="flex justify-between">
                <h1 class="text-2xl font-bold text-stone-800 dark:text-stone-200">
                  {{ title }}
                </h1>
                <button class="p-1 bg-stone-600 bg-opacity-0 hover:bg-opacity-10 rounded-full aspect-square transition-all flex justify-center items-center active:scale-75">
                  <XMarkIcon
                      class="w-5 h-5 fill-stone-800 dark:fill-stone-200 cursor-pointer"
                      @click="emit('close')"
                  />
                </button>

              </div>
              <slot />
            </div>
            </Transition>
          </div>

      </Transition>
    </Teleport>
</template>


<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
</style>