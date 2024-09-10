export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated } = useAuth();

  // Check if the user is authenticated
  if (!isAuthenticated.value) {
    // If not, redirect to the login page
    return navigateTo('/auth');
  }
});
