<template>
  <div
    class="flex items-center p-3 border border-orange-500 bg-white shadow rounded-lg"
  >
    <div
      class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6"
    >
      <svg
        aria-hidden="true"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    </div>
    <div class="flex flex-col">
      <span class="block text-xs text-gray-500">Ground Verifiers</span>
      <div class="flex flex-row">
        <span class="block text-2xl font-bold">{{ count }}</span>
        <span class="mt-2 ml-2 text-xs">Agents</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'AgentCard',
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
}
</script>
