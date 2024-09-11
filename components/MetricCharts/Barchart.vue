<template>
  <div>
    <ApexChart type="bar" :options="chartOptions" :series="chartSeries" />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import ApexChart from 'vue3-apexcharts';
  import { useStatsCase } from '#imports';

  // Bar chart data and options
  const chartOptions = ref({
    chart: {
      id: 'bar-chart',
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '60%',
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
    title: {
      text: 'Monthly Sales Data',
      align: 'left',
    },
  });

  const { cases } = useStatsCase();

  const chartSeries = ref([
    {
      name: 'Sales',
      data: cases,
    },
  ]);
</script>

<style scoped>
  /* Add any styling specific to your chart here */
</style>
