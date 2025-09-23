import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useSignin } from '@/hooks/auth/useAuth';

/**
 * LoginPage component.
 *
 * This component renders a login form and handles the authentication process
 * using TanStack Query.
 *
 * @returns {JSX.Element} A JSX element representing the LoginPage component.
 */
export default function LoginPage() {
  const [formData, setFormData] = useState({
    emailId: '',
    password: '',
  });

  // Get mutation object with all states
  const signinMutation = useSignin();

  // Extract states from mutation
  const { isPending, isError, error } = signinMutation;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.emailId.trim()) {
      toast.error('Email is required');
      return;
    }
    if (!formData.password.trim()) {
      toast.error('Password is required');
      return;
    }

    localStorage.clear();

    // Trigger the signin mutation
    signinMutation.mutate(formData);
  };

  return (
    <div className='min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      {/* Background Effects */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse' />
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000' />
      </div>

      <div className='w-full max-w-md relative z-10'>
        <div className='text-center mb-8'>
          <div className='flex items-center justify-center gap-2 mb-4'>
            <Sparkles className='w-8 h-8 text-cyan-400' />
            <h1 className='text-3xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent'>
              Portfolio AI
            </h1>
          </div>
          <p className='text-slate-400'>Sign in to your account</p>
        </div>

        <GlassCard className='p-8'>
          <form onSubmit={handleLogin} className='space-y-6'>
            <div className='space-y-2'>
              <Label htmlFor='emailId' className='text-slate-200'>
                Email
              </Label>
              <Input
                id='emailId'
                name='emailId'
                type='email'
                placeholder='Enter your email'
                value={formData.emailId}
                onChange={handleChange}
                required
                disabled={isPending}
                className='bg-white/10 border-white/20 text-white placeholder:text-slate-300 focus:border-cyan-400 focus:ring-cyan-400/20 disabled:opacity-50'
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='password' className='text-slate-200'>
                Password
              </Label>
              <Input
                id='password'
                name='password'
                type='password'
                placeholder='Enter your password'
                value={formData.password}
                onChange={handleChange}
                required
                disabled={isPending}
                className='bg-white/10 border-white/20 text-white placeholder:text-slate-300 focus:border-cyan-400 focus:ring-cyan-400/20 disabled:opacity-50'
              />
            </div>

            {/* Display error from TanStack Query */}
            {isError && error && (
              <div className='p-3 rounded-lg bg-red-500/10 border border-red-500/20'>
                <p className='text-red-400 text-sm'>{error.message}</p>
              </div>
            )}

            <Button
              type='submit'
              disabled={isPending}
              className='w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white font-medium py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {isPending ? (
                <>
                  <div className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin' />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className='w-4 h-4' />
                </>
              )}
            </Button>
          </form>

          <div className='mt-6 text-center'>
            <p className='text-slate-400 text-sm'>
              Don't have an account?{' '}
              <Link
                to='/signup'
                className='text-cyan-400 hover:text-cyan-300 font-medium transition-colors'
              >
                Sign up
              </Link>
            </p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
