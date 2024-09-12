<template>
  <div
    class="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg"
  >
    <div class="flex-grow">
      <div
        class="flex flex-col items-start justify-center h-full px-1 py-1 text-gray-400 text-3xl font-semibold bg-white rounded-md border border-orange-500"
      >
        <!-- <span class="text-sm text-gray-700">Hotzone</span> -->
        <!-- api-key="AIzaSyAqkH7R3KjvMzKP3F0hJkKag-8uyhNKS_0" -->
        <!-- :center="{ lat: 7.9465, lng: 0.1974 }" -->

        <GoogleMap
          api-key="AIzaSyAqkH7R3KjvMzKP3F0hJkKag-8uyhNKS_0"
          :center="{ lat: 7.9465, lng: 0.1974 }"
          :zoom="6.1"
          style="width: 100%; height: 400px"
        >
          <!-- Add markers based on coordinates -->
          <!-- <MarkerCluster> -->
          <Marker
            v-for="(marker, index) in markers"
            :key="index"
            :options="{
              position: { lat: marker.latitude, lng: marker.longitude },
              icon: marker.icon,
              anchorPoint: 'CENTER',
            }"
          />
          <!-- </MarkerCluster> -->
        </GoogleMap>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { GoogleMap, MarkerCluster, Marker } from 'vue3-google-map';

  const stats = useStatsCase();

  // Array of markers with geocoordinates
  const markers = ref([]);

  watch(
    () => stats.hotzones,
    () => {
      const mkers = [];
      const points = stats.hotzones.forEach((e) => {
        mkers.push({
          latitude: parseFloat(e.latitude),
          longitude: parseFloat(e.longitude),
          icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
        });
      });

      const vpoints = stats.verifierzones.map((e) => {
        mkers.push({
          latitude: parseFloat(e.latitude),
          longitude: parseFloat(e.longitude),
          icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
        });
      });

      markers.value = mkers;
    },
    { immediate: true }
  );
</script>
