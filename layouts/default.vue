<template>
  <div class="flex bg-white min-h-screen" x-data="{panel:false, menu:true}">
    <!-- Modal (overlay and dialog) -->
    <div
      v-if="sidebarStore.isLoggoutOpen"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div
        class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center"
      >
        <h2 class="text-lg font-semibold mb-4">
          Are you sure you want to logout?
        </h2>
        <div class="space-x-4">
          <!-- Cancel Button -->
          <button
            @click="sidebarStore.closeLoggout()"
            class="px-4 py-2 bg-gray-300 rounded-md"
          >
            Cancel
          </button>
          <!-- Logout Button -->
          <button
            @click="logoutAction()"
            class="px-4 py-2 bg-red-600 text-white rounded-md"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
    <!-- Start of SideBar -->
    <PSideBar :is-open="sidebarStore.isOpen" />
    <!-- End of SideBar -->

    <!-- Start of Dashboard -->
    <slot />
    <!-- End of Dashboard-->
  </div>
</template>

<script setup>
  import PSideBar from '~/components/PSideBar.vue';
  import { useAuth } from '~/composables/useAuth';

  const sidebarStore = useNavbarStore();
  const { logout } = useAuth();

  // Handle logout logic (you can replace this with actual logic)
  const logoutAction = () => {
    // alert('Hello logout');
    // logout();
    navigateTo('/auth');
  };
</script>
