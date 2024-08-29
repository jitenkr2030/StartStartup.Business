import apiService from './apiService';

const authService = {
  login: (email, password) => {
    return apiService.post('/auth/login', { email, password });
  },
  signup: (email, password) => {
    return apiService.post('/auth/signup', { email, password });
  },
  logout: () => {
    // Handle logout
  }
};

export default authService;
