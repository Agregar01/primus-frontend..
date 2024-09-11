export const useStatsCase = defineStore('stats', {
  state: () => ({
    loading: false,
    error: null,
    totalCases: 0,
    totalClients: 0,
    totalPendingCases: 0,
    totalVerifiers: 0,
    empverify: [],
    validar: [],
    other: [],
    cases: [],
    analytics: [],
    hotzones: [],
    agents: [],
  }),

  actions: {
    async fetchStats() {
      this.loading = true;
      this.error = null;
      await getDashboardStats()
        .then((dt) => {
          // response
          const response = dt.response;
          this.totalClients = response.totalClients;
          this.totalCases = response.totalCases;
          this.totalVerifiers = response.totalVerifiers;
          this.cases = response.allCases;
          this.empverify = response.empverify.data;
          this.other = response.others.data;
          this.validar = response.validar.data;

          console.log('success', this);
        })
        .catch((err) => {
          // error
          console.log('err', err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
});
