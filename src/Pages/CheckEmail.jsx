import { GlassCard } from '@/components/ui/glass-card';
import { Sparkles, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function CheckEmailPage() {
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
        </div>

        <GlassCard className='p-8 text-center'>
          <div className='flex justify-center mb-6'>
            <div className='w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-full flex items-center justify-center'>
              <Mail className='w-8 h-8 text-cyan-400' />
            </div>
          </div>

          <h2 className='text-2xl font-bold text-white mb-4'>
            Check your email
          </h2>
          <p className='text-slate-400 mb-6'>
            We've sent you a confirmation link. Please check your email and
            click the link to activate your account.
          </p>

          <div className='text-center'>
            <Link
              to='/login'
              className='text-cyan-400 hover:text-cyan-300 font-medium transition-colors'
            >
              Back to sign in
            </Link>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
