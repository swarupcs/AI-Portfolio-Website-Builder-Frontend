import { GlassCard } from '@/components/ui/glass-card';
import { Globe, Eye, Zap, TrendingUp } from 'lucide-react';

export function StatsCards({ projects }) {
  const publishedProjects = projects.filter((p) => p.is_published).length;
  const totalProjects = projects.length;
  const totalViews = projects.reduce((sum, p) => sum + (p.views || 0), 0);

  const stats = [
    {
      title: 'Total Projects',
      value: totalProjects,
      icon: Zap,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
    },
    {
      title: 'Published',
      value: publishedProjects,
      icon: Globe,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
    },
    {
      title: 'Total Views',
      value: totalViews.toLocaleString(),
      icon: Eye,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
    },
    {
      title: 'Success Rate',
      value:
        totalProjects > 0
          ? `${Math.round((publishedProjects / totalProjects) * 100)}%`
          : '0%',
      icon: TrendingUp,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
    },
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
      {stats.map((stat) => (
        <GlassCard key={stat.title} className='p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-slate-400 text-sm font-medium'>{stat.title}</p>
              <p className='text-2xl font-bold text-white mt-1'>{stat.value}</p>
            </div>
            <div className={`p-3 rounded-xl ${stat.bgColor}`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
          </div>
        </GlassCard>
      ))}
    </div>
  );
}
