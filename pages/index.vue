<template>
  <div class="flex bg-white min-h-screen" x-data="{panel:false, menu:true}">
    <!-- Start of SideBar -->
    <SideBar :is-open="sidebarStore.isOpen" />
    <!-- End of SideBar -->

    <!-- Start of Dashboard -->
    <div
      class="flex-grow text-gray-800"
      :class="sidebarStore.isOpen ? 'lg:ml-72' : ''"
    >
      <main class="p-6 sm:p-10 space-y-6">
        <div class="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-">
          <div class="mr-8 cursor-pointer" @click="sidebarStore.toggle()">
            <svg
              class="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <div class="mr-6">
            <h1 class="text-4xl font-semibold mb-2">Dashboard</h1>
          </div>
          <!-- <div class="flex flex-wrap items-start justify-end -mb-3">
            <button
              class="inline-flex px-5 py-3 text-blue-600 hover:text-blue-700 focus:text-blue-700 hover:bg-blue-100 focus:bg-blue-100 border border-blue-600 rounded-md mb-3"
            >
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
              Manage dashboard
            </button>
            <button
              class="inline-flex px-5 py-3 text-white bg-blue-600 hover:bg-purple-700 focus:bg-blue-700 rounded-md ml-6 mb-3"
            >
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Create new dashboard
            </button>
          </div> -->
        </div>
        <section class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          <GrowthCard count="22" />
          <AllCaseCard count="100" />
          <PendingCaseCard count="46" />
          <AgentCard count="35" />
        </section>
        <section
          class="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-flow-col gap-6"
        >
          <CasesBarChart />

          <CasesLineChart />
        </section>

        <section
          class="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-flow-col gap-6"
        >
          <Hotzone />

          <UnconfirmedAgents />
        </section>
      </main>
    </div>
    <!-- End of Dashboard-->
  </div>
</template>

<script>
  import SideBar from '~/components/SideBar.vue';
  import GrowthCard from '~/components/MetricCards/GrowthCard.vue';
  import AllCaseCard from '~/components/MetricCards/AllCaseCard.vue';
  import PendingCaseCard from '~/components/MetricCards/PendingCaseCard.vue';
  import AgentCard from '~/components/MetricCards/AgentCard.vue';
  import CasesBarChart from '~/components/MetricCharts/CasesBarChart';
  import CasesLineChart from '~/components/MetricCharts/CasesLineChart';
  import Hotzone from '~/components/MetricCharts/Hotzone';
  import UnconfirmedAgents from '~/components/MetricCharts/UnconfirmedAgents';

  export default {
    name: 'IndexPage',
    components: {
      SideBar,
      GrowthCard,
      AllCaseCard,
      PendingCaseCard,
      AgentCard,
      CasesBarChart,
      CasesLineChart,
      Hotzone,
      UnconfirmedAgents,
    },
    setup: () => {
      useHead({
        title: 'Dashboard | Primus',
      });

      const sidebarStore = useNavbarStore();
      return { sidebarStore };
    },
  };
</script>
