import { GlassCard } from '@/components/ui/glass-card';
import { Badge } from '@/components/ui/badge';
import { Clock, Edit, Globe, Plus } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';



export function RecentActivity({ projects }) {
  // Generate activity items from projects
  const activities = projects.slice(0, 5).map((project) => ({
    id: project.id,
    type: project.is_published ? 'published' : 'updated',
    projectName: project.name,
    timestamp: project.updated_at,
  }));

  const getActivityIcon = (type) => {
    switch (type) {
      case 'published':
        return <Globe className='w-4 h-4 text-green-400' />;
      case 'updated':
        return <Edit className='w-4 h-4 text-cyan-400' />;
      default:
        return <Plus className='w-4 h-4 text-purple-400' />;
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'published':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'updated':
        return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      default:
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
    }
  };

  return (
    <div className='space-y-6'>
      <h2 className='text-2xl font-bold text-white'>Recent Activity</h2>

      <GlassCard className='p-6'>
        {activities.length === 0 ? (
          <div className='text-center py-8'>
            <Clock className='w-8 h-8 text-slate-400 mx-auto mb-3' />
            <p className='text-slate-400'>No recent activity</p>
          </div>
        ) : (
          <div className='space-y-4'>
            {activities.map((activity) => (
              <div
                key={`${activity.id}-${activity.timestamp}`}
                className='flex items-start gap-3 p-3 rounded-lg hover:bg-slate-800/30 transition-colors'
              >
                <div className='flex-shrink-0 mt-1'>
                  {getActivityIcon(activity.type)}
                </div>
                <div className='flex-1 min-w-0'>
                  <div className='flex items-center gap-2 mb-1'>
                    <Badge
                      variant='outline'
                      className={`text-xs ${getActivityColor(activity.type)}`}
                    >
                      {activity.type}
                    </Badge>
                  </div>
                  <p className='text-white font-medium truncate'>
                    {activity.projectName}
                  </p>
                  <p className='text-slate-400 text-sm'>
                    {formatDistanceToNow(new Date(activity.timestamp))} ago
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </GlassCard>

      <GlassCard className='p-6'>
        <h3 className='text-lg font-semibold text-white mb-4'>Quick Actions</h3>
        <div className='space-y-3'>
          <button className='w-full text-left p-3 rounded-lg hover:bg-slate-800/30 transition-colors group'>
            <div className='flex items-center gap-3'>
              <Plus className='w-4 h-4 text-cyan-400' />
              <span className='text-slate-200 group-hover:text-white'>
                Create new project
              </span>
            </div>
          </button>
          <button className='w-full text-left p-3 rounded-lg hover:bg-slate-800/30 transition-colors group'>
            <div className='flex items-center gap-3'>
              <Globe className='w-4 h-4 text-green-400' />
              <span className='text-slate-200 group-hover:text-white'>
                Publish a draft
              </span>
            </div>
          </button>
        </div>
      </GlassCard>
    </div>
  );
}
