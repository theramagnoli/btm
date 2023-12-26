<script setup lang="ts">
import { XMarkIcon } from "@heroicons/vue/16/solid";
import { onClickOutside } from "@vueuse/core";

const emit = defineEmits(["close"]);
const modal = ref<HTMLElement | null>(null);

defineProps<{
  title?: string;
  isOpen: boolean;
  blurBackground?: boolean;
}>();

onClickOutside(modal, () => {
  emit("close");
});
</script>

<template>
  <Teleport to="body">
    <Transition name="fade" duration="50">
      <div
        v-if="isOpen"
        class="fixed top-0 left-0 w-screen h-[100dvh] z-40 flex justify-center items-end laptop:items-center filter bg-stone-100/70 dark:bg-stone-950/70"
        :class="{
          'backdrop-blur-[60px]': blurBackground,
        }"
      >
        <Transition name="fade" duration="100">
          <div
            class="relative bg-stone-100 dark:bg-stone-950 rounded-t-md laptop:rounded-md w-full max-w-lg p-5 flex flex-col gap-4 text-stone-950 dark:text-stone-100 drop-shadow-[0px_10px_25px_rgba(0,0,0,0.2)] dark:drop-shadow-[0px_10px_25px_rgba(255,255,255,0.2)] pb-10 laptop:pb-6"
            ref="modal"
          >
            <button
              class="hidden absolute -top-10 right-0 p-1 bg-stone-100 dark:bg-stone-950 rounded-md laptop:flex justify-center items-center size-8 transition-all duration-300 ease-in-out"
              @click="emit('close')"
            >
              <XMarkIcon
                class="size-5 fill-stone-950 dark:fill-stone-100 duration-300 ease-in-out cursor-pointer"
              />
            </button>
            <slot />
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
