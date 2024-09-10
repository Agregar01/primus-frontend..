<template>
  <NuxtLayout>
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
  </NuxtLayout>
</template>

<script>
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

      definePageMeta({
        middleware: 'auth',
      });

      const sidebarStore = useNavbarStore();
      return { sidebarStore };
    },
  };
</script>
