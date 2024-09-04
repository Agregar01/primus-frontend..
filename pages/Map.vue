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
            <h1 class="text-4xl font-semibold mb-2">Map</h1>
          </div>
        </div>
        <section class="grid w-full">
          <AgentOverviewMap />
        </section>
        <section class="grid md:grid-cols-1 lg:grid-cols-4 gap-3">
          <div
            class="flex flex-col md:col-span-3 md:row-span-2 bg-white shadow rounded-lg"
          >
            <div class="flex-grow">
              <div
                class="flex flex-col items-start justify-center h-full px-2 py-2 text-gray-400 text-3xl font-semibold bg-white rounded-md border border-orange-500"
              >
                <AgentProgressDataTable />
              </div>
            </div>
          </div>

          <!-- 2nd -->

          <div
            class="flex flex-col md:col-span-1 md:row-span-2 bg-white shadow rounded-lg"
          >
            <div class="flex-grow">
              <div
                class="flex flex-col items-start h-full px-2 py-2 text-gray-400 text-3xl font-semibold bg-white rounded-md border border-orange-500"
              >
                <ClientRequestList />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    <!-- End of Dashboard-->
  </NuxtLayout>
</template>

<script>
  import { ref, onMounted } from 'vue';
  import AgentOverviewMap from '~/components/AgentOverviewMap.vue';
  import AgentProgressDataTable from '~/components/AgentProgressDataTable.vue';
  import ClientRequestList from '~/components/ClientRequestList.vue';
  export default {
    name: 'IndexPage',
    components: {
      AgentOverviewMap,
      AgentProgressDataTable,
      ClientRequestList,
    },
    setup: () => {
      useHead({
        title: 'Map | Primus',
      });

      const sidebarStore = useNavbarStore();
      return {
        sidebarStore,
      };
    },
  };
</script>
