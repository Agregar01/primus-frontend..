export const useNavbarStore = defineStore('navbarStore', {
  state: () => ({
    isOpen: true,
    isLoggoutOpen: false,
  }),

  actions: {
    toggle() {
      this.isOpen = !this.isOpen;
    },

    openSidebar() {
      this.isOpen = true;
    },

    closeSidebar() {
      this.isOpen = false;
    },

    openLoggout() {
      this.isLoggoutOpen = true;
    },

    closeLoggout() {
      this.isLoggoutOpen = false;
    },
  },
});
