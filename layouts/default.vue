<template>
  <div class="flex bg-white min-h-screen" x-data="{panel:false, menu:true}">
    <!-- Start of SideBar -->
    <PSideBar :is-open="sidebarStore.isOpen" />
    <!-- End of SideBar -->

    <!-- Start of Dashboard -->
    <slot />
    <!-- End of Dashboard-->
  </div>
</template>

<script>
  import PSideBar from '~/components/PSideBar.vue';

  export default {
    components: {
      PSideBar,
    },
    setup: () => {
      const sidebarStore = useNavbarStore();
      return { sidebarStore };
    },
  };
</script>
