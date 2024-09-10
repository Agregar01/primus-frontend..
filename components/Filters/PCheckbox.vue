<template>
  <div class="text-sm">
    <label class="inline-flex items-center space-x-2">
      <input type="checkbox" class="hidden peer" />
      <span
        class="w-5 h-5 border-2 border-gray-300 rounded-md flex items-center justify-center transition-colors peer-checked:bg-gray-600 peer-checked:border-gray-600"
      >
        <!-- Icon for checked state -->
        <svg
          class="w-4 h-4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12l5 5L20 7" />
        </svg>
      </span>
      <span class="text-gray-700">{{ title }}</span>
    </label>
    <!-- <input type="checkbox" />
    <span class="ml-2">{{ title }}</span> -->
  </div>
</template>

<script>
  export default {
    name: 'PCheckBox',
    props: {
      title: {
        type: String,
        required: true,
      },
    },
  };
</script>
