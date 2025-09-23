import { useMutation, useQueryClient } from '@tanstack/react-query';
import { authService } from '../../apis/auth/authService';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export const useSignup = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authService.signup,
    onSuccess: (data) => {
      toast.success('Account created successfully!');
      queryClient.setQueryData(['user'], data.data?.user);
      navigate('/dashboard');
    },
    onError: (error) => {
      const message = error.message || 'Signup failed. Please try again.';
      toast.error(message);
    },
  });
};


export const useSignin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authService.signin,
    onSuccess: (data) => {
      toast.success('Signed in successfully!');
      // Store user data and token if needed
      queryClient.setQueryData(['user'], data.data?.user);

      // Store token in localStorage or handle as per your auth strategy
    //   if (data.data?.token) {
    //     localStorage.setItem('authToken', data.data.token);
    //   }

      navigate('/dashboard');
    },
    onError: (error) => {
      // Optional: Remove this if you want to handle errors only in UI
      const message = error.message || 'Signin failed. Please try again.';
      toast.error(message);
    },
  });
};


export const useSignout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authService.signout,
    onSuccess: () => {
      toast.success('Signed out successfully!');
      // Clear user data and token
      queryClient.setQueryData(['user'], null);
      localStorage.clear();
      navigate('/login');
    },
    onError: (error) => {
      const message = error.message || 'Signout failed. Please try again.';
      toast.error(message);
    },
  });
};