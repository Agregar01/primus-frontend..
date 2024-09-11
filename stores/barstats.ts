import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBarStats = defineStore('chartData', () => {
  const chartData = ref({
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales Data',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        data: [10, 20, 30, 40, 50, 60],
      },
    ],
  });

  const updateChartData = (newData: any) => {
    chartData.value.datasets[0].data = newData;
  };

  return {
    chartData,
    updateChartData,
  };
});
