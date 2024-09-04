// plugins/primevue.js

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Paginator from 'primevue/paginator';
import Tag from 'primevue/tag';

// import 'primevue/resources/themes/saga-blue/theme.css'; // Theme
// import 'primevue/resources/primevue.min.css'; // Core CSS
// import 'primeicons/primeicons.css'; // Icons
// import 'primeflex/primeflex.css'; // PrimeFlex CSS (optional)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue);

  // Register components globally if needed
  // nuxtApp.vueApp.component('Button', Button);
  // nuxtApp.vueApp.component('DataTable', DataTable);
  // nuxtApp.vueApp.component('Column', Column);
  // nuxtApp.vueApp.component('InputText', InputText);
  // nuxtApp.vueApp.component('Paginator', Paginator);
});
