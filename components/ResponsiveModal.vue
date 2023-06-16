<script setup lang="ts">
import { XMarkIcon } from "@heroicons/vue/24/solid";
import { onClickOutside } from "@vueuse/core";

const emit = defineEmits(["close"]);
const modal = ref<HTMLElement | null>(null);

defineProps<{
  title: string;
}>();

onClickOutside(modal, () => {
  emit("close");
});
</script>

<template>
  <Teleport to="body">
    <div>
      <div
        class="fixed top-0 left-0 w-screen h-[100dvh] bg-black/50 z-50 flex justify-center items-end laptop:items-end"
      >
        <div
          class="bg-stone-100 dark:bg-stone-900 rounded-t-xl w-full max-w-lg p-4 pb-8 flex flex-col gap-4 text-stone-800 dark:text-stone-200 shadow-2xl dark:shadow-gray-800"
          ref="modal"
        >
          <div class="flex justify-between">
            <h1 class="text-2xl font-bold text-stone-800 dark:text-stone-200">
              {{ title }}
            </h1>
            <XMarkIcon
              class="w-6 h-6 fill-stone-800 dark:fill-stone-200 cursor-pointer"
              @click="emit('close')"
            />
          </div>
          <slot />
        </div>
      </div>
    </div>
  </Teleport>
</template>
