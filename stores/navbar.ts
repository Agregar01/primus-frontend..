export const useNavbarStore = defineStore('navbarStore', {
  state: () => ({
    isOpen: true,
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
  },
});
