<template>
  <div class="relative">
    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
      <!-- SVG Icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 text-gray-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M6 2a1 1 0 100 2h8a1 1 0 100-2H6zM3 7a1 1 0 011-1h12a1 1 0 011 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm1 2v7a1 1 0 001 1h10a1 1 0 001-1V9H4z"
        />
      </svg>
    </span>

    <input
      type="date"
      format="dd/mm/yyyy"
      class="pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
</template>
<script>
  export default {
    name: 'PDate',
  };
</script>
