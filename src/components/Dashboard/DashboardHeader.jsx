import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Bell,
  Search,
  Plus,
  Settings,
  User,
  LogOut,
  CreditCard,
  HelpCircle,
} from 'lucide-react';
import { useSignout } from '@/hooks/auth/useAuth';

export function DashboardHeader({ userData }) {

  const { firstName, lastName, emailId, photoUrl } = userData || {};

  const fullName = `${firstName || ''} ${lastName || ''}`.trim();
  const initials = fullName
    .split(' ')
    .map((name) => name.charAt(0).toUpperCase())
    .join('')
    .slice(0, 2);

    const { mutate: signout, isLoading, isError, error, data } = useSignout();



  function handleLogout() {
    // Implement logout functionality here
    // console.log('Logging out...');

    signout(); 
  }
  return (
    <header className='border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50'>
      <div className='container mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-8'>
            <div className='flex items-center space-x-3'>
              <div className='w-8 h-8 bg-primary rounded-lg flex items-center justify-center'>
                <span className='text-primary-foreground font-bold text-sm'>
                  PB
                </span>
              </div>
              <h1 className='text-xl font-semibold text-foreground'>
                Portfolio Builder
              </h1>
            </div>
            <nav className='hidden md:flex items-center space-x-6'>
              <a
                href='#'
                className='text-foreground hover:text-primary transition-colors'
              >
                Dashboard
              </a>
              <a
                href='#'
                className='text-muted-foreground hover:text-primary transition-colors'
              >
                Projects
              </a>
              <a
                href='#'
                className='text-muted-foreground hover:text-primary transition-colors'
              >
                Templates
              </a>
              <a
                href='#'
                className='text-muted-foreground hover:text-primary transition-colors'
              >
                Analytics
              </a>
            </nav>
          </div>

          <div className='flex items-center space-x-4'>
            <div className='relative hidden sm:block'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4' />
              <Input
                placeholder='Search projects...'
                className='pl-10 w-64 bg-secondary/50 border-border'
              />
            </div>
            <Button size='sm' className='bg-primary hover:bg-primary/90'>
              <Plus className='w-4 h-4 mr-2' />
              New Project
            </Button>
            <Button variant='ghost' size='sm'>
              <Bell className='w-4 h-4' />
            </Button>
            <Button variant='ghost' size='sm'>
              <Settings className='w-4 h-4' />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='ghost'
                  className='relative h-8 w-8 rounded-full'
                >
                  <Avatar className='w-8 h-8'>
                    <AvatarImage src='/diverse-user-avatars.png' />
                    <AvatarFallback>{initials}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-56' align='end' forceMount>
                <DropdownMenuLabel className='font-normal'>
                  <div className='flex flex-col space-y-1'>
                    <p className='text-sm font-medium leading-none'>
                      {fullName}
                    </p>
                    <p className='text-xs leading-none text-muted-foreground'>
                      {emailId}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className='mr-2 h-4 w-4' />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className='mr-2 h-4 w-4' />
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className='mr-2 h-4 w-4' />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HelpCircle className='mr-2 h-4 w-4' />
                  <span>Support</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className='mr-2 h-4 w-4' />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
