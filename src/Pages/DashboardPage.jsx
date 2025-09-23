import { DashboardHeader } from "@/components/Dashboard/DashboardHeader";
import { ProjectsGrid } from "@/components/Dashboard/ProjectGrid";
import { ProjectTemplates } from "@/components/Dashboard/ProjectTemplates";
import { RecentActivity } from "@/components/Dashboard/RecentActivity";
import { StatsCards } from "@/components/Dashboard/StatsCards";
import { selectIsAuthenticated, selectUser } from "@/features/auth/authSlice";
import { useSelector } from 'react-redux';

// Mock user data
const mockUser = {
  id: 'user-123456',
  email: 'john.doe@example.com',
  created_at: '2024-01-15T10:30:00Z',
  updated_at: '2024-09-20T14:22:00Z',
  email_verified: true,
  phone: null,
  user_metadata: {
    avatar_url:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    full_name: 'John Doe',
  },
};

// Mock profile data
const mockProfile = {
  id: 'user-123456',
  email: 'john.doe@example.com',
  full_name: 'John Doe',
  avatar_url:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  bio: 'Full-stack developer passionate about building great user experiences',
  location: 'San Francisco, CA',
  website: 'https://johndoe.dev',
  github_username: 'johndoe',
  twitter_username: 'johndoe',
  created_at: '2024-01-15T10:30:00Z',
  updated_at: '2024-09-20T14:22:00Z',
  subscription_tier: 'pro',
  total_projects: 12,
  total_deployments: 45,
};

// Mock projects data
const mockProjects = [
  {
    id: 'proj-001',
    user_id: 'user-123456',
    name: 'E-commerce Platform',
    description: 'Modern e-commerce solution with React and Node.js',
    status: 'active',
    tech_stack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github_url: 'https://github.com/johndoe/ecommerce-platform',
    demo_url: 'https://ecommerce-demo.johndoe.dev',
    created_at: '2024-08-15T09:00:00Z',
    updated_at: '2024-09-20T16:45:00Z',
    is_featured: true,
    deployment_status: 'deployed',
    last_deployment: '2024-09-20T16:45:00Z',
    view_count: 1247,
    star_count: 23,
  },
  {
    id: 'proj-002',
    user_id: 'user-123456',
    name: 'Task Management App',
    description: 'Collaborative task management with real-time updates',
    status: 'active',
    tech_stack: ['Vue.js', 'Express', 'MongoDB', 'Socket.io'],
    github_url: 'https://github.com/johndoe/task-manager',
    demo_url: 'https://tasks.johndoe.dev',
    created_at: '2024-07-10T14:30:00Z',
    updated_at: '2024-09-18T11:22:00Z',
    is_featured: false,
    deployment_status: 'deployed',
    last_deployment: '2024-09-18T11:22:00Z',
    view_count: 892,
    star_count: 15,
  },
  {
    id: 'proj-003',
    user_id: 'user-123456',
    name: 'Weather Dashboard',
    description: 'Beautiful weather app with location-based forecasts',
    status: 'active',
    tech_stack: ['React', 'TypeScript', 'Tailwind CSS'],
    github_url: 'https://github.com/johndoe/weather-dashboard',
    demo_url: 'https://weather.johndoe.dev',
    created_at: '2024-06-22T08:15:00Z',
    updated_at: '2024-09-15T13:33:00Z',
    is_featured: false,
    deployment_status: 'deployed',
    last_deployment: '2024-09-15T13:33:00Z',
    view_count: 654,
    star_count: 8,
  },
  {
    id: 'proj-004',
    user_id: 'user-123456',
    name: 'Portfolio Website',
    description: 'Personal portfolio showcasing projects and skills',
    status: 'active',
    tech_stack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    github_url: 'https://github.com/johndoe/portfolio',
    demo_url: 'https://johndoe.dev',
    created_at: '2024-05-18T12:00:00Z',
    updated_at: '2024-09-12T09:18:00Z',
    is_featured: true,
    deployment_status: 'deployed',
    last_deployment: '2024-09-12T09:18:00Z',
    view_count: 2156,
    star_count: 42,
  },
  {
    id: 'proj-005',
    user_id: 'user-123456',
    name: 'Blog Platform',
    description: 'Content management system for bloggers',
    status: 'development',
    tech_stack: ['Nuxt.js', 'Supabase', 'Tailwind CSS'],
    github_url: 'https://github.com/johndoe/blog-platform',
    demo_url: null,
    created_at: '2024-09-01T10:45:00Z',
    updated_at: '2024-09-19T15:27:00Z',
    is_featured: false,
    deployment_status: 'building',
    last_deployment: null,
    view_count: 0,
    star_count: 2,
  },
  {
    id: 'proj-006',
    user_id: 'user-123456',
    name: 'Chat Application',
    description: 'Real-time messaging app with file sharing',
    status: 'paused',
    tech_stack: ['React', 'Firebase', 'Material-UI'],
    github_url: 'https://github.com/johndoe/chat-app',
    demo_url: 'https://chat.johndoe.dev',
    created_at: '2024-04-12T16:20:00Z',
    updated_at: '2024-08-30T14:55:00Z',
    is_featured: false,
    deployment_status: 'deployed',
    last_deployment: '2024-08-30T14:55:00Z',
    view_count: 423,
    star_count: 7,
  },
];

export default function DashboardPage() {
  // Simulate loading state - in a real app, you might want to add this
  // const [isLoading, setIsLoading] = useState(true);

  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  console.log('user', user);

  // Mock function to handle project creation
  const handleProjectCreated = () => {
    // In a real app, this would refetch data or update state
    console.log('Project created! Refreshing...');
    window.location.reload();
  };

  const hasProjects = mockProjects && mockProjects.length > 0;

  // Show loading or redirect if not authenticated
  if (!isAuthenticated || !user) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center'>
        <div className='text-white'>Loading...</div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      {/* Background Effects */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse' />
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500' />
      </div>

      <div className='relative z-10'>
        <DashboardHeader user={user} profile={mockProfile} />

        <main className='max-w-7xl mx-auto px-6 py-8'>
          <div className='space-y-8'>
            <StatsCards projects={mockProjects} />

            {!hasProjects ? (
              <ProjectTemplates
                userId={user._id}
                onProjectCreated={handleProjectCreated}
              />
            ) : (
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <div className='lg:col-span-2'>
                  <ProjectsGrid projects={mockProjects} />
                </div>
                <div className='lg:col-span-1'>
                  <RecentActivity projects={mockProjects} />
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
