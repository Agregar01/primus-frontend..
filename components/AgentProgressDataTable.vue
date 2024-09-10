<template>
  <div class="container flex flex-col mx-auto p-0">
    <div class="mb-4">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search agents, case, status..."
        class="w-1/3 float-right px-2 py-0 border border-orange-200 rounded shadow-sm focus:outline-none focus:no-ring fmtplaceholder"
      />
    </div>

    <div class="overflow-x-auto">
      <table class="w-full bg-white border border-gray-200">
        <thead>
          <tr class="bg-gray-200">
            <th
              class="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider"
            >
              Agent
            </th>
            <th
              class="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider"
            >
              Case ID
            </th>
            <th
              class="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider"
            >
              Destination
            </th>

            <th
              class="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider"
            >
              Verifications
            </th>

            <th
              class="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-if="data.length > 0"
            v-for="item in paginatedData"
            :key="item.email"
            class="border-b"
          >
            <td
              class="px-6 py-4 whitespace-nowrap font-medium text-xs text-gray-900"
            >
              {{ item.name }}
            </td>
            <td
              class="px-6 py-4 whitespace-nowrap text-xs text-gray-500 underline cursor-pointer"
            >
              {{ item.caseId }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
              {{ item.address }}
            </td>

            <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
              <span
                class="bg-blue-400 px-2 text-xs text-white rounded-lg py-1"
                >{{ item.verifications }}</span
              >
              <!-- {{ item.address }} -->
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
              <span
                v-if="item.status == 'Pending'"
                class="bg-red-500 px-2 py-1 rounded-full text-xs text-white"
                >{{ item.status }}</span
              >

              <span
                v-if="item.status == 'In Progress'"
                class="bg-blue-500 px-2 py-1 rounded-full text-xs text-white"
                >{{ item.status }}</span
              >

              <span
                v-if="item.status == 'Completed'"
                class="bg-green-500 px-2 py-1 rounded-full text-xs text-white"
                >{{ item.status }}</span
              >
            </td>
          </tr>
          <tr v-else>
            <td colspan="5">
              <p class="text-xs text-center py-2 text-black">
                No records found.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination Controls -->
    <div class="mt-4 flex justify-between items-center text-sm">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 bg-orange-500 text-white rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 bg-orange-500 text-white rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';

  // Sample data
  //   const data = ref([]);
  const data = ref([
    {
      name: 'John Doe',
      caseId: 'EMPV19-18382',
      address: 'Adenta',
      verifications: 'ADDRESS, ASSET',
      status: 'Pending',
    },
    {
      name: 'Jane Smith',
      caseId: 'EMPV19-18383',
      address: 'Madina',
      verifications: 'HR, ASSET',
      status: 'Completed',
    },
    {
      name: 'Alice Johnson',
      caseId: 'EMPV19-18384',
      address: 'Achimota',
      verifications: 'ADDRESS',
      status: 'In Progress',
    },
    {
      name: 'Robert Brown',
      caseId: 'EMPV19-18385',
      address: 'Agingano',
      verifications: 'ADDRESS',
      status: 'In Progress',
    },
    {
      name: 'Michael Clark',
      caseId: 'EMPV19-18386',
      address: 'East Legon',
      verifications: 'ADDRESS',
      status: 'Completed',
    },
    {
      name: 'Chris Evans',
      caseId: 'EMPV19-18387',
      address: 'Teshie Nugua',
      verifications: 'ADDRESS, ASSET',
      status: 'In Progress',
    },
    {
      name: 'Natalie Portman',
      caseId: 'EMPV19-18388',
      address: 'Labadi',
      verifications: 'ASSET',
      status: 'In Progress',
    },
    // Add more data as needed
  ]);

  const searchQuery = ref('');
  const currentPage = ref(1);
  const rowsPerPage = ref(5);

  const filteredData = computed(() => {
    if (!searchQuery.value) return data.value;

    return data.value.filter((item) => {
      return Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });
  });

  const totalPages = computed(() => {
    return Math.ceil(filteredData.value.length / rowsPerPage.value);
  });

  const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * rowsPerPage.value;
    const end = start + rowsPerPage.value;
    return filteredData.value.slice(start, end);
  });

  const prevPage = () => {
    if (currentPage.value > 1) currentPage.value -= 1;
  };

  const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value += 1;
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
