<template>
  <div
    class="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg"
    :class="class"
  >
    <div class="flex-grow">
      <div
        class="flex flex-col items-start justify-center h-full px-4 py-4 text-gray-400 text-3xl font-semibold bg-white rounded-md border border-orange-500"
      >
        <!-- <span class="text-sm text-gray-700">Cases</span> -->
        <!-- Chart -->
        <ApexChart
          width="500"
          type="bar"
          :options="chartOptions"
          :series="chartSeries"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
  import { watch } from 'vue';
  import ApexChart from 'vue3-apexcharts';
  import { useStatsCase } from '#imports';

  const props = defineProps({
    isloaded: false,
  });

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
      },
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    title: {
      text: 'Cases',
      align: 'left',
    },
  });

  const stats = useStatsCase();

  const chartSeries = ref([
    {
      name: 'Sales',
      data: stats.cases,
    },
  ]);

  watch(
    () => stats.cases,
    () => {
      chartSeries.value = [
        {
          name: 'Case(s)',
          data: stats.cases,
        },
      ];
    },
    { immediate: true }
  );
</script>
