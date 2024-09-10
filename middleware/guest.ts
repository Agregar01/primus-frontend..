export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated } = useAuth();

  // If the user is authenticated, prevent access to the login page
  if (isAuthenticated.value) {
    // Redirect to the dashboard or another appropriate page
    return navigateTo('/');
  }
});
