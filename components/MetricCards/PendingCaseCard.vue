<template lang="">
  <div
    class="flex items-center p-3 border border-orange-500 bg-white shadow rounded-lg"
  >
    <div
      class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-200 rounded-full mr-6"
    >
      <svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        stroke-width="3"
        stroke="currentColor"
        fill="none"
        class="h-6 w-6"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="2"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M11.39,19.82,32.1,30.48a.51.51,0,0,0,.45,0L54.21,19.81a.5.5,0,0,0,0-.89L33.72,8.45a2,2,0,0,0-1.82,0L11.4,18.93A.5.5,0,0,0,11.39,19.82Z"
            stroke-linecap="round"
          ></path>
          <path
            d="M10.83,32.23l21.27,11h.45l22.25-11"
            stroke-linecap="round"
          ></path>
          <path
            d="M10.83,44.94l21.27,11h.45l22.25-11"
            stroke-linecap="round"
          ></path>
        </g>
      </svg>
    </div>
    <div class="flex flex-col">
      <span class="block text-xs text-gray-500">Pending Cases</span>
      <div class="flex flex-row">
        <span class="block text-2xl font-bold">20</span>
        <span class="mt-2 ml-2 text-xs">Cases</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'PendingCaseCard',
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
}
</script>
