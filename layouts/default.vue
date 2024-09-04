<template>
  <div class="flex bg-white min-h-screen" x-data="{panel:false, menu:true}">
    <!-- Start of SideBar -->
    <SideBar :is-open="sidebarStore.isOpen" />
    <!-- End of SideBar -->

    <!-- Start of Dashboard -->
    <slot />
    <!-- End of Dashboard-->
  </div>
</template>

<script>
  import SideBar from '~/components/SideBar.vue';

  export default {
    // name: 'DashboardLayout',
    components: {
      SideBar,
    },
    setup: () => {
      // useHead({
      //   title: 'Dashboard | Primus',
      // });

      const sidebarStore = useNavbarStore();
      return { sidebarStore };
    },
  };
</script>
