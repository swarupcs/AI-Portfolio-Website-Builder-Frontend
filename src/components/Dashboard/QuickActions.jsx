import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  FileText,
  Palette,
  BarChart3,
  Share2,
  Download,
  Zap,
  Users,
} from 'lucide-react';

export function QuickActions() {
  const actions = [
    {
      title: 'Create New Project',
      description: 'Start from scratch',
      icon: FileText,
      color: 'text-chart-1',
    },
    {
      title: 'Customize Theme',
      description: 'Personalize your style',
      icon: Palette,
      color: 'text-chart-2',
    },
    {
      title: 'View Analytics',
      description: 'Track performance',
      icon: BarChart3,
      color: 'text-chart-3',
    },
    {
      title: 'Share Portfolio',
      description: 'Get your link',
      icon: Share2,
      color: 'text-chart-4',
    },
    {
      title: 'Export Resume',
      description: 'Download PDF',
      icon: Download,
      color: 'text-chart-1',
    },
    {
      title: 'AI Optimization',
      description: 'Improve with AI',
      icon: Zap,
      color: 'text-primary',
    },
  ];

  return (
    <Card className='bg-card/50 border-border'>
      <CardHeader>
        <CardTitle className='text-foreground'>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid grid-cols-1 gap-3'>
          {actions.map((action, index) => (
            <Button
              key={index}
              variant='ghost'
              className='h-auto p-4 justify-start hover:bg-secondary/50 transition-colors'
            >
              <action.icon className={`w-5 h-5 mr-3 ${action.color}`} />
              <div className='text-left'>
                <div className='font-medium text-foreground'>
                  {action.title}
                </div>
                <div className='text-xs text-muted-foreground'>
                  {action.description}
                </div>
              </div>
            </Button>
          ))}
        </div>

        <div className='mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20'>
          <div className='flex items-center space-x-3'>
            <Users className='w-5 h-5 text-primary' />
            <div>
              <h4 className='font-medium text-foreground'>Upgrade to Pro</h4>
              <p className='text-xs text-muted-foreground'>
                Unlock advanced AI features and premium templates
              </p>
            </div>
          </div>
          <Button
            size='sm'
            className='w-full mt-3 bg-primary hover:bg-primary/90'
          >
            Upgrade Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
