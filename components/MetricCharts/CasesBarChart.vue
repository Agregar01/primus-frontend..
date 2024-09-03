<template>
  <div
    class="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg"
  >
    <div class="flex-grow">
      <div
        class="flex flex-col items-start justify-center h-full px-4 py-4 text-gray-400 text-3xl font-semibold bg-white rounded-md border border-orange-500"
      >
        <span class="text-sm text-gray-700">Cases</span>
        <!-- Chart -->
        <Bar :data="chartData" :options="chartOptions" />
      </div>
    </div>
  </div>
</template>
<script>
  import { Bar } from 'vue-chartjs';
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from 'chart.js';
  export default {
    name: 'CasesBarChart',
    components: {
      Bar,
    },
    setup: () => {
      // Register necessary Chart.js components
      ChartJS.register(
        Title,
        Tooltip,
        Legend,
        BarElement,
        CategoryScale,
        LinearScale
      );

      const chartData = {
        labels: ['January', 'February', 'March'],
        datasets: [
          { label: 'Case(s)', backgroundColor: '#fcc6bf', data: [40, 20, 12] },
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
