import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sparkles, Plus, Settings, LogOut, User, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSignout } from '@/hooks/auth/useAuth';

export function DashboardHeader({ user, profile }) {
  const navigate = useNavigate();

  // Get signout mutation with all states
  const signoutMutation = useSignout();
  const {
    isPending: isSigningOut,
    isError: signoutError,
    error,
  } = signoutMutation;

  const handleSignOut = () => {
    // Trigger the signout mutation
    signoutMutation.mutate();
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleSettingsClick = () => {
    navigate('/settings');
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

    const getFullName = (firstName, lastName) => {
      return `${firstName || ''} ${lastName || ''}`.trim() || 'User';
    };

  return (
    <header className='border-b border-slate-800/50 backdrop-blur-sm'>
      <div className='max-w-7xl mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <Sparkles className='w-8 h-8 text-cyan-400' />
            <h1 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent'>
              Portfolio AI
            </h1>
          </div>

          <div className='flex items-center gap-4'>
            {/* Show error message if signout fails */}
            {signoutError && error && (
              <div className='text-red-400 text-sm bg-red-500/10 px-3 py-1 rounded-md border border-red-500/20'>
                {error.message}
              </div>
            )}

            <Button
              onClick={() => navigate('/builder')}
              disabled={isSigningOut} // Disable during signout
              className='bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white font-medium rounded-xl transition-all duration-200 flex items-center gap-2 disabled:opacity-50'
            >
              <Plus className='w-4 h-4' />
              New Project
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='ghost'
                  className='relative h-10 w-10 rounded-full disabled:opacity-50'
                  disabled={isSigningOut} // Disable during signout
                >
                  <Avatar className='h-10 w-10 border-2 border-cyan-400/20'>
                    <AvatarImage
                      src={user?.photoUrl || '/placeholder.svg'}
                      alt={getFullName(user?.firstName, user?.lastName)}
                    />
                    <AvatarFallback className='bg-slate-800 text-cyan-400'>
                      {user?.firstName || user?.lastName
                        ? getInitials(user.firstName, user.lastName)
                        : user?.emailId
                        ? user.emailId[0].toUpperCase()
                        : 'U'}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className='w-56 bg-slate-800/95 backdrop-blur-sm border-slate-700'
                align='end'
              >
                <div className='flex items-center justify-start gap-2 p-2'>
                  <div className='flex flex-col space-y-1 leading-none'>
                    <p className='font-medium text-white'>
                      {getFullName(user?.firstName, user?.lastName)}
                    </p>
                    <p className='w-[200px] truncate text-sm text-slate-400'>
                      {user?.emailId || 'user@example.com'}
                    </p>
                  </div>
                </div>
                <DropdownMenuSeparator className='bg-slate-700' />
                <DropdownMenuItem
                  className='text-slate-200 focus:bg-slate-700 focus:text-white cursor-pointer disabled:opacity-50'
                  onClick={handleProfileClick}
                  disabled={isSigningOut}
                >
                  <User className='mr-2 h-4 w-4' />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem
                  className='text-slate-200 focus:bg-slate-700 focus:text-white cursor-pointer disabled:opacity-50'
                  onClick={handleSettingsClick}
                  disabled={isSigningOut}
                >
                  <Settings className='mr-2 h-4 w-4' />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator className='bg-slate-700' />
                <DropdownMenuItem
                  className='text-red-400 focus:bg-red-500/10 focus:text-red-400 cursor-pointer disabled:opacity-50'
                  onClick={handleSignOut}
                  disabled={isSigningOut}
                >
                  {isSigningOut ? (
                    <>
                      <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                      Signing out...
                    </>
                  ) : (
                    <>
                      <LogOut className='mr-2 h-4 w-4' />
                      Sign out
                    </>
                  )}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
