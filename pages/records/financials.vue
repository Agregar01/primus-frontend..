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
            <h1 class="text-4xl font-semibold mb-2">Financials</h1>
          </div>
        </div>
        <section class="flex flex-col px-3 py-4 bg-gray-100 rounded-sm">
          <div class="flex flex-row gap-10 mb-3">
            <select
              type="text"
              class="focus:ring-none px-2 py-2 outline-none border border-gray-400 rounded-sm w-1/3 fmtplaceholder"
              placeholder="Destination"
            >
              <option class="All">--- Financial Records ---</option>
            </select>
          </div>

          <div class="flex flex-row gap-7 py-2 text-sm mb-2">
            <div class="w-1/3 flex flex-row gap-5">
              <PDate />

              <!-- <span>To</span> -->

              <PDate />
            </div>
          </div>

          <div class="block">
            <button
              class="px-2 py-1 w-[100px] border border-orange-400 text-sm rounded-sm text-orange-400 float-right hover:bg-orange-500 hover:text-white"
            >
              Filter
            </button>
          </div>
        </section>
      </main>
    </div>
    <!-- End of Dashboard-->
  </NuxtLayout>
</template>

<script>
  import PDate from '~/components/Filters/PDate.vue';
  export default {
    name: 'FinancialsPage',
    components: {
      PDate,
    },
    setup: () => {
      useHead({
        title: 'Financials | Primus',
      });

      const sidebarStore = useNavbarStore();
      return { sidebarStore };
    },
  };
</script>
