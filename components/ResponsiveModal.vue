<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/16/solid';
import { onClickOutside } from '@vueuse/core';

const emit = defineEmits(['close']);
const modal = ref<HTMLElement | null>(null);

defineProps<{
  title?: string;
  isOpen: boolean;
  blurBackground?: boolean;
}>();

onClickOutside(modal, () => {
  emit('close');
});
</script>

<template>
  <Teleport to="body">
    <Transition name="fade" duration="50">
      <div
        v-if="isOpen"
        class="fixed left-0 top-0 z-40 flex h-[100dvh] w-screen items-end justify-center bg-stone-100/70 filter laptop:items-center dark:bg-stone-950/70"
        :class="{
          'backdrop-blur-[60px]': blurBackground,
        }"
      >
        <Transition name="fade" duration="100">
          <div
            class="mb:pt-5 relative flex w-full max-w-lg flex-col gap-4 rounded-t-[30px] bg-stone-100 p-5 pb-10 pt-8 text-stone-950 drop-shadow-[0px_10px_25px_rgba(0,0,0,0.2)] laptop:rounded-[30px] laptop:pb-6 dark:bg-stone-950 dark:text-stone-100 dark:drop-shadow-[0px_10px_25px_rgba(255,255,255,0.2)]"
            ref="modal"
          >
            <button
              class="absolute -top-10 right-0 hidden size-8 items-center justify-center rounded-full bg-stone-100 laptop:flex dark:bg-stone-950"
              @click="emit('close')"
            >
              <XMarkIcon
                class="size-5 cursor-pointer fill-stone-950 duration-300 ease-in-out dark:fill-stone-100"
              />
            </button>
            <slot />
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
