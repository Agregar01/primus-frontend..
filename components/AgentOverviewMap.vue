<template>
  <div
    class="flex flex-col items-start justify-center h-full text-gray-400 text-3xl font-semibold bg-white"
  >
    <!-- <span class="text-sm text-gray-700">Hotzone</span> -->
    <GoogleMap
      api-key="AIzaSyAqkH7R3KjvMzKP3F0hJkKag-8uyhNKS_0"
      :center="{ lat: 7.9465, lng: 0.1974 }"
      :zoom="7"
      class="w-full h-[600px]"
    />

    <div
      class="flex flex-col bg-[#e4e4e4] w-[200px] px-3 py-3 mx-[50px] bottom-[100px] rounded absolute opacity-80 right-[50px] text-xs text-black"
    >
      <div class="flex flex-row justify-between mb-2">
        <span>Verifiers:</span>
        <span>200</span>
      </div>
      <div
        class="flex flex-row justify-between mb-2 pb-2 border-b border-black"
      >
        <span>Requests:</span>
        <span>30</span>
      </div>
      <div class="flex flex-row justify-between mb-2">
        <span>Available Verifiers:</span>
        <span>100</span>
      </div>
      <div class="flex flex-row justify-between mb-2">
        <span>Busy Verifiers:</span>
        <span>50</span>
      </div>
      <div class="flex flex-row justify-between mb-2">
        <span>On Case:</span>
        <span>20</span>
      </div>
      <div class="flex flex-row justify-between mb-2">
        <span>No GPS:</span>
        <span>30</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const locations = [
    { lat: 5.6037, lng: -0.187, title: 'Accra' }, // Accra, Ghana
    { lat: 6.691, lng: -1.6308, title: 'Kumasi' }, // Kumasi, Ghana
    { lat: 9.4008, lng: -0.8393, title: 'Tamale' }, // Tamale, Ghana
    { lat: 4.8998, lng: -1.7577, title: 'Takoradi' }, // Takoradi, Ghana
    // Add more locations as needed
  ];
</script>
