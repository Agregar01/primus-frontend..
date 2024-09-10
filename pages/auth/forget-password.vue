<template>
  <div>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm mt-20">
        <img
          class="mx-auto h-10 w-auto"
          src="https://res.cloudinary.com/empverify/image/upload/v1709014551/MicrosoftTeams-image_helqhy.png"
          alt="Primus - Agregar"
        />
        <h2
          class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
        >
          Forgot your password?
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Email address</label
            >
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                requiorange
                class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div><AuthButton :is-loading="false" title="Reset Password" /></div>
        </form>
        <center>
          <br />
          <nuxt-link
            to="/auth/"
            class="justify-center my-5 font-semibold text-sm text-orange-400 hover:text-orange-500"
            >Back to login</nuxt-link
          >
        </center>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import AuthButton from '~/components/Buttons/AuthButton.vue';

  export default {
    name: 'LoginPage',
    components: {
      AuthButton,
    },
    setup() {
      useHead({
        title: 'Forgot Password | Primus',
      });
    },
  };
</script>
<style lang="css" scoped></style>
