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
          Sign in to your account
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" @submit.prevent="handleLogin" method="POST">
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
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Password</label
              >
              <div class="text-sm">
                <nuxt-link
                  class="font-semibold text-orange-400 hover:text-orange-500"
                  to="/auth/forget-password"
                  >Forgot password?</nuxt-link
                >
              </div>
            </div>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                v-model="form.password"
                autocomplete="current-password"
                requiorange
                class="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <p
                v-if="validationErrors.password"
                class="text-red-500 text-xs italic"
              >
                {{ validationErrors.password }}
              </p>
            </div>
          </div>

          <div>
            <AuthButton v-if="!isLoading" :is-loading="false" title="Sign In" />
            <AuthButton v-else :is-loading="true" title="Sign In" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
  import AuthButton from '~/components/Buttons/AuthButton.vue';
  import { useAuth } from '~/composables/useAuth';

  import { ref } from 'vue';
  import { notification } from 'ant-design-vue';

  useHead({
    title: 'Sign In | Primus',
  });

  definePageMeta({
    middleware: 'guest',
  });

  const form = ref({
    email: '',
    password: '',
    client: 'PRIMUS',
  });

  const isLoading = ref(false);
  const errorMessage = ref('');
  const validationErrors = ref({
    email: '',
    password: '',
  });

  // validate form
  const validateForm = () => {
    let isValid = true;
    validationErrors.value.email = '';
    validationErrors.value.password = '';

    if (!form.value.email) {
      validationErrors.value.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
      validationErrors.value.email = 'Invalid email address.';
      isValid = false;
    }

    if (!form.value.password) {
      validationErrors.value.password = 'Password is required.';
      isValid = false;
    } else if (form.value.password.length < 6) {
      validationErrors.value.password =
        'Password must be at least 6 characters.';
      isValid = false;
    }

    return isValid;
  };

  const { login } = useAuth();

  const handleLogin = async () => {
    if (!validateForm()) return;

    try {
      isLoading.value = true;
      errorMessage.value = '';

      // Call login service
      const { status, response } = await loginService(form.value);

      if (status === 200) {
        // Set user state with the returned data
        login(response?.accountDetails);
        navigateTo('/');
      } else if (status === 401) {
        errorMessage.value = 'Invalid credentials. Please try again.';

        notification.error({
          message: 'Authentication',
          description: errorMessage.value,
          placement: 'topRight',
        });
      } else {
        errorMessage.value = `Error: HTTP ${status}. Please try again later.`;
        notification.error({
          message: 'Authentication',
          description: errorMessage.value,
          placement: 'topRight',
        });
      }
    } catch (err) {
      errorMessage.value =
        'An unexpected error occurred. Please try again later.';
      notification.error({
        message: 'Authentication',
        description: errorMessage.value,
        placement: 'topRight',
      });
    } finally {
      isLoading.value = false;
    }
  };
</script>
<style lang="css" scoped></style>
