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
        <form class="space-y-6" @submit.prevent="handleFPassword" method="POST">
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
                v-model="form.email"
                autocomplete="email"
                requiorange
                class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <p
                v-if="validationErrors.email"
                class="text-red-500 text-xs italic"
              >
                {{ validationErrors.email }}
              </p>
            </div>
          </div>

          <div>
            <AuthButton
              v-if="!isLoading"
              :is-loading="false"
              title="Reset Password"
            />
            <AuthButton v-else :is-loading="true" title="Reset Password" />
          </div>
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
<script setup lang="ts">
  import AuthButton from '~/components/Buttons/AuthButton.vue';
  import { ref } from 'vue';
  import { notification } from 'ant-design-vue';
  import { forgetPasswordService } from '~/composables/services';

  useHead({
    title: 'Forgot Password | Primus',
  });

  definePageMeta({
    middleware: 'guest',
  });

  const isLoading = ref(false);
  const form = ref({
    email: '',
  });
  const validationErrors = ref({
    email: '',
  });

  const validateForm = () => {
    let isValid = true;
    validationErrors.value.email = '';

    if (!form.value.email) {
      validationErrors.value.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
      validationErrors.value.email = 'Invalid email address.';
      isValid = false;
    }

    return isValid;
  };

  const handleFPassword = async () => {
    if (!validateForm()) return;

    try {
      isLoading.value = true;

      // Call login service
      const { status, response } = await forgetPasswordService(
        form.value.email
      );

      if (status === 200) {
        // Set user state with the returned data
        navigateTo({
          path: '/auth/reset-password',
          query: { email: form.value.email },
        });
      } else if (status === 401) {
        notification.error({
          message: 'Authentication',
          description: 'Invalid password reset request.',
          placement: 'topRight',
        });
      } else {
        notification.error({
          message: 'Authentication',
          description: `Error: HTTP ${status}. Please try again later.`,
          placement: 'topRight',
        });
      }
    } catch (err) {
      notification.error({
        message: 'Authentication',
        description: 'An unexpected error occurred. Please try again later.',
        placement: 'topRight',
      });
    } finally {
      isLoading.value = false;
    }
  };
</script>
<style lang="css" scoped></style>
