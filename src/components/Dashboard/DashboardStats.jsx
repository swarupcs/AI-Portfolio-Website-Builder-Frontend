
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Users, Eye, Zap } from 'lucide-react';

export function DashboardStats() {
  const stats = [
    {
      title: 'Active Projects',
      value: '12',
      change: '+2 this week',
      icon: TrendingUp,
      color: 'text-chart-1',
    },
    {
      title: 'Portfolio Views',
      value: '2,847',
      change: '+18% from last month',
      icon: Eye,
      color: 'text-chart-2',
    },
    {
      title: 'AI Generations',
      value: '156',
      change: '+24 today',
      icon: Zap,
      color: 'text-chart-3',
    },
    {
      title: 'Template Uses',
      value: '89',
      change: '+12% this week',
      icon: Users,
      color: 'text-chart-4',
    },
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
      {stats.map((stat, index) => (
        <Card
          key={index}
          className='bg-card/50 border-border hover:bg-card/70 transition-colors'
        >
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium text-muted-foreground'>
              {stat.title}
            </CardTitle>
            <stat.icon className={`w-4 h-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold text-foreground'>
              {stat.value}
            </div>
            <p className='text-xs text-muted-foreground mt-1'>{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
