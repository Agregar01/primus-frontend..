<template>
  <div
    class="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg"
    :class="class"
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
<script setup>
  import { watch } from 'vue';
  import { Bar } from 'vue-chartjs';
  import { useStatsCase } from '#imports';

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from 'chart.js';

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );

  const dashboardStats = useStatsCase();
  const chartData = ref(null);
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  const stats = dashboardStats;
  const currentMonthCount = new Date().getMonth();
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  let limit = 12;
  if (currentMonthCount + 1 > 12) {
    limit = 12;
  } else {
    limit = currentMonthCount + 1;
  }
  const displayMonths = months.slice(0, limit);

  chartData.value = {
    labels: displayMonths,
    datasets: [{ label: 'Case(s)', backgroundColor: '#fcc6bf', data: [] }],
  };

  watch(
    () => stats.cases,
    () => {
      chartData.value = {
        labels: displayMonths,
        datasets: [
          { label: 'Case(s)', backgroundColor: '#fcc6bf', data: stats.cases },
        ],
      };
    },
    { immediate: true }
  );
</script>
