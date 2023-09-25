<template>
  <button class="t-button" :class="buttonStyle"><slot /></button>
</template>

<script lang="ts" setup>
import './style/index.less';
import { computed } from 'vue';

defineOptions({
  name: 't-button'
});

type ButtonProps = {
  type?: string;
};

const buttonProps = defineProps<ButtonProps>();
const buttonStyle = computed(() => {
  return { [`t-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
