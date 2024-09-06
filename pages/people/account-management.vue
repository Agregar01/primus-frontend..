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
            <h1 class="text-4xl font-semibold mb-2">Account Management</h1>
          </div>
        </div>

        <section
          class="grid md:grid-cols-1 xl:grid-cols-1 xl:grid-flow-col gap-6"
        >
          Account Management
          <!-- <AgentsListTable /> -->
        </section>
      </main>
    </div>
    <!-- End of Dashboard-->
  </NuxtLayout>
</template>

<script>
  import PCheckbox from '~/components/Filters/PCheckbox.vue';
  import PDate from '~/components/Filters/PDate.vue';
  export default {
    name: 'AccountManagementPage',
    components: {
      PCheckbox,
      PDate,
    },
    setup: () => {
      useHead({
        title: 'Account Management | Primus',
      });

      const sidebarStore = useNavbarStore();
      return { sidebarStore };
    },
  };
</script>

<style>
  .fmtplaceholder {
    font-size: 12px;
  }
  .fmtplaceholder::placeholder {
    font-size: 12px;
  }
</style>
