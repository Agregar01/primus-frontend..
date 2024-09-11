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
<script setup>
  import { watch } from '#imports';
  import { Line } from 'vue-chartjs';
  import { useStatsCase } from '#imports';
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

  // const chartData = {
  //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  //   datasets: [
  //     {
  //       label: 'Empverify',
  //       backgroundColor: '#15A34A',
  //       data: [40, 39, 10, 40, 39, 80, 40],
  //     },
  //     {
  //       label: 'Validar',
  //       backgroundColor: '#777',
  //       data: [10, 23, 99, 34, 39, 80, 40],
  //     },
  //   ],
  // };

  chartData.value = {
    labels: displayMonths,
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

  watch(
    () => stats.loading,
    () => {
      chartData.value = {
        labels: displayMonths,
        datasets: [
          {
            label: 'Empverify',
            backgroundColor: '#15A34A',
            data: stats.empverify,
          },
          {
            label: 'Validar',
            backgroundColor: '#777',
            data: stats.validar,
          },
          {
            label: 'Other',
            backgroundColor: '#6442ed',
            data: stats.other,
          },
        ],
      };
    },
    { immediate: true }
  );
</script>
