import axiosInstance from "@/config/axiosConfig";

export const authService = {
  signup: async (userData) => {
    try {
      const response = await axiosInstance.post('/auth/signup', userData);
      return response.data;
    } catch (error) {
      // Enhanced error handling
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.message ||
        'Signup failed';

      console.error('Signup API Error:', {
        status: error.response?.status,
        message: errorMessage,
        data: error.response?.data,
      });

      // Re-throw with enhanced error info
      throw {
        ...error,
        message: errorMessage,
        status: error.response?.status,
      };
    }
  },

  signin: async (credentials) => {
    try {
      const response = await axiosInstance.post('/auth/signin', credentials);
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.message ||
        'Signin failed';

      console.error('Signin API Error:', {
        status: error.response?.status,
        message: errorMessage,
        data: error.response?.data,
      });

      // Re-throw with enhanced error info
      throw {
        ...error,
        message: errorMessage,
        status: error.response?.status,
      };
    }
  },

  signout: async () => {
    try {
      const response = await axiosInstance.post('/auth/signout');
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.message ||
        'Signout failed';

      console.error('Signout API Error:', {
        status: error.response?.status,
        message: errorMessage,
        data: error.response?.data,
      });

      throw {
        ...error,
        message: errorMessage,
        status: error.response?.status,
      };
    }
  },
};