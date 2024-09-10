<template>
  <div class="flex flex-col p-0">
    <!-- <div class="mb-4">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search agents, case, status..."
        class="w-1/3 float-right px-2 py-0 border border-orange-200 rounded shadow-sm focus:outline-none focus:no-ring fmtplaceholder"
      />
    </div> -->

    <div class="overflow-x-auto">
      <table class="w-full bg-white border border-gray-200">
        <thead>
          <tr class="bg-blue-100">
            <th
              class="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider"
            >
              Verifier ID
            </th>
            <th
              class="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider"
            >
              Full Name
            </th>

            <th
              class="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider"
            >
              Email
            </th>

            <th
              class="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider"
            >
              Phone
            </th>

            <th
              class="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider"
            >
              Onboarding Date
            </th>
            <th
              class="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              class="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider"
            >
              Action
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
              class="px-6 py-4 whitespace-nowrap text-xs text-gray-500 bg-gray-50 cursor-pointer"
            >
              {{ item.verifierId }}
            </td>
            <td
              class="px-6 py-4 whitespace-nowrap font-medium text-xs text-gray-900"
            >
              {{ item.name }}
            </td>

            <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
              {{ item.email }}
            </td>

            <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
              {{ item.phone }}
              <!-- {{ item.address }} -->
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
              {{ item.onboardingDate }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
              <span
                v-if="item.status == 'Inactive'"
                class="bg-red-500 px-2 py-1 rounded-full text-xs text-white"
                >{{ item.status }}</span
              >
              <span
                v-if="item.status == 'Active'"
                class="bg-green-500 px-2 py-1 rounded-full text-xs text-white"
                >{{ item.status }}</span
              >
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
              <img
                src="/static/more.png"
                class="mx-auto cursor-pointer w-[18px]"
              />
              <!-- {{ item.address }} -->
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
      verifierId: 'VER192-182-23',
      name: 'John Doe',
      email: 'james.walter@mail.com',
      phone: '+1-2444-2234-2',
      onboardingDate: '12 June, 2024',
      status: 'Active',
    },
    {
      verifierId: 'VER192-182-23',
      name: 'John Doe',
      email: 'james.walter@mail.com',
      phone: '+1-2444-2234-2',
      onboardingDate: '12 June, 2024',
      status: 'Active',
    },
    {
      verifierId: 'VER192-182-23',
      name: 'John Doe',
      email: 'james.walter@mail.com',
      phone: '+1-2444-2234-2',
      onboardingDate: '12 June, 2024',
      status: 'Active',
    },
    {
      verifierId: 'VER192-182-23',
      name: 'John Doe',
      email: 'james.walter@mail.com',
      phone: '+1-2444-2234-2',
      onboardingDate: '12 June, 2024',
      status: 'Inactive',
    },
    {
      verifierId: 'VER192-182-23',
      name: 'John Doe',
      email: 'james.walter@mail.com',
      phone: '+1-2444-2234-2',
      onboardingDate: '12 June, 2024',
      status: 'Active',
    },
    // Add more data as needed
  ]);

  const searchQuery = ref('');
  const currentPage = ref(1);
  const rowsPerPage = ref(20);

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
