<template>
  <div
    class="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg"
  >
    <div class="flex-grow">
      <div
        class="flex flex-col items-start justify-center h-full px-4 py-4 text-gray-400 text-3xl font-semibold bg-white rounded-md border border-orange-500"
      >
        <span class="text-sm text-gray-700">Analytics</span>
        <!-- Chart -->
        <Line :data="chartData" :options="chartOptions" />
      </div>
    </div>
  </div>
</template>
<script>
  import { Line } from 'vue-chartjs';
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  export default {
    name: 'CasesLineChart',
    components: {
      Line,
    },
    setup: () => {
      // Register necessary Chart.js components
      ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );

      const chartData = {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: 'Empverify',
            backgroundColor: '#15A34A',
            data: [40, 39, 10, 40, 39, 80, 40],
          },
          {
            label: 'Validar',
            backgroundColor: '#777',
            data: [10, 23, 99, 34, 39, 80, 40],
          },
        ],
      };

      const chartOptions = {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
      };

      return { chartData, chartOptions };
    },
  };
</script>
