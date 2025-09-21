
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Globe,
  Edit,
  MoreVertical,
  Copy,
  Trash2,
  ExternalLink,
  Plus,
  Sparkles,
} from 'lucide-react';

import { formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';



export function ProjectsGrid({ projects }) {
  if (projects.length === 0) {
    return (
      <div className='space-y-6'>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-bold text-white'>Your Projects</h2>
        </div>

        <GlassCard className='p-12 text-center'>
          <div className='flex flex-col items-center gap-4'>
            <div className='w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-full flex items-center justify-center'>
              <Sparkles className='w-8 h-8 text-cyan-400' />
            </div>
            <div>
              <h3 className='text-xl font-semibold text-white mb-2'>
                No projects yet
              </h3>
              <p className='text-slate-400 mb-6'>
                Create your first AI-powered portfolio website
              </p>
              <Button
                asChild
                className='bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white font-medium rounded-xl'
              >
                <Link href='/builder' className='flex items-center gap-2'>
                  <Plus className='w-4 h-4' />
                  Create Your First Project
                </Link>
              </Button>
            </div>
          </div>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold text-white'>Your Projects</h2>
        <Button
          asChild
          variant='outline'
          className='border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent'
        >
          <Link href='/builder'>
            <Plus className='w-4 h-4 mr-2' />
            New Project
          </Link>
        </Button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {projects.map((project) => (
          <GlassCard
            key={project.id}
            className='p-6 group hover:scale-[1.02] transition-all duration-200'
          >
            <div className='flex items-start justify-between mb-4'>
              <div className='flex-1'>
                <h3 className='text-lg font-semibold text-white mb-1'>
                  {project.name}
                </h3>
                <p className='text-slate-400 text-sm line-clamp-2'>
                  {project.description || 'No description'}
                </p>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='opacity-0 group-hover:opacity-100 transition-opacity'
                  >
                    <MoreVertical className='w-4 h-4' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='bg-slate-800/95 backdrop-blur-sm border-slate-700'>
                  <DropdownMenuItem className='text-slate-200 focus:bg-slate-700'>
                    <Edit className='mr-2 h-4 w-4' />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem className='text-slate-200 focus:bg-slate-700'>
                    <Copy className='mr-2 h-4 w-4' />
                    Duplicate
                  </DropdownMenuItem>
                  {project.is_published && (
                    <DropdownMenuItem className='text-slate-200 focus:bg-slate-700'>
                      <ExternalLink className='mr-2 h-4 w-4' />
                      View Live
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem className='text-red-400 focus:bg-red-500/10'>
                    <Trash2 className='mr-2 h-4 w-4' />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className='flex items-center gap-2 mb-4'>
              <Badge
                variant={project.is_published ? 'default' : 'secondary'}
                className={
                  project.is_published
                    ? 'bg-green-500/20 text-green-400 border-green-500/30'
                    : 'bg-slate-700 text-slate-300'
                }
              >
                {project.is_published ? (
                  <>
                    <Globe className='w-3 h-3 mr-1' />
                    Published
                  </>
                ) : (
                  'Draft'
                )}
              </Badge>
              <Badge
                variant='outline'
                className='border-slate-600 text-slate-400'
              >
                {project.template_type}
              </Badge>
            </div>

            <div className='flex items-center justify-between text-sm text-slate-400'>
              <span>
                Updated {formatDistanceToNow(new Date(project.updated_at))} ago
              </span>
              <Button
                asChild
                size='sm'
                className='bg-slate-800 hover:bg-slate-700 text-white'
              >
                <Link to={`/builder/${project.id}`}>
                  <Edit className='w-3 h-3 mr-1' />
                  Edit
                </Link>
              </Button>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
