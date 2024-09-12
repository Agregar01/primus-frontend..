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
    verifierzones: [],
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
          this.totalPendingCases = response.pendingCases;
          this.cases = response.allCases;
          this.empverify = response.empverify.data;
          this.other = response.others.data;
          this.validar = response.validar.data;
        })
        .catch((err) => {
          // error
          console.log('err', err);
        })
        .finally(() => {
          this.loading = false;
        });
    },

    async fetchHotzones() {
      this.loading = true;
      this.error = null;
      await getDashboardHotzones()
        .then((dt) => {
          const response = dt.response;
          this.hotzones = response.cases;
          this.verifierzones = response.verifiers;
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
