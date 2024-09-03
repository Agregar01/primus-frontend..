<template>
  <div
    class="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg"
  >
    <div class="flex-grow">
      <div
        class="flex flex-col items-start justify-center h-full px-4 py-4 text-gray-400 text-3xl font-semibold bg-white rounded-md border border-orange-500"
      >
        <span class="text-sm text-gray-700">Hotzone</span>
        <GoogleMap
          api-key="AIzaSyAqkH7R3KjvMzKP3F0hJkKag-8uyhNKS_0"
          :center="{ lat: 7.9465, lng: 0.1974 }"
          :zoom="6.1"
          style="width: 100%; height: 300px"
        />
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
