// composables/useAuth.ts
export const useAuth = () => {
  // Define a state for the user
  const user = useState('user', () => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Function to log in the user (for example, after an API call)
  const login = (userData: any) => {
    user.value = userData;
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Function to log out the user
  const logout = () => {
    user.value = null;
    localStorage.removeItem('user');
  };

  // Function to check if the user is authenticated
  const isAuthenticated = computed(() => !!user.value);

  return {
    user,
    login,
    logout,
    isAuthenticated,
  };
};
