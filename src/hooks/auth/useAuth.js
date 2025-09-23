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
