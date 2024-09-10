<template>
  <div
    class="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg border border-orange-500"
  >
    <div class="flex-grow">
      <div
        class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 h-auto px-4 py-4 text-gray-400 text-3xl font-semibold bg-white rounded-md"
      >
        <AgentAuditCard />
        <AgentAuditCard />
        <AgentAuditCard />
        <AgentAuditCard />
        <AgentAuditCard />
      </div>
      <a href="#" class="text-sm text-center justify-center block underline"
        >See more</a
      >
    </div>
  </div>
</template>
<script>
  import AgentAuditCard from '@/components/MetricCharts/AgentAuditCard.vue';
  export default {
    components: { AgentAuditCard },
    name: 'UnconfirmedAgents',
    setup: () => {},
  };
</script>
