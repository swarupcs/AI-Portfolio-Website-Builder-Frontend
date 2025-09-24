import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Wand2, RefreshCw } from 'lucide-react';

export function AIPromptGenerator() {
  const suggestions = [
    'Modern minimalist designer',
    'Tech startup founder',
    'Creative photographer',
    'Marketing professional',
  ];

  return (
    <Card className='bg-card/50 border-border'>
      <CardHeader>
        <CardTitle className='flex items-center space-x-2 text-foreground'>
          <Sparkles className='w-5 h-5 text-primary' />
          <span>AI Portfolio Generator</span>
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div>
          <label className='text-sm font-medium text-muted-foreground mb-2 block'>
            Describe your ideal portfolio
          </label>
          <Textarea
            placeholder="I'm a creative designer who specializes in brand identity and digital experiences. I want a modern, clean portfolio that showcases my work with bold typography and minimal aesthetics..."
            className='bg-secondary/30 border-border resize-none'
            rows={4}
          />
        </div>

        <div>
          <label className='text-sm font-medium text-muted-foreground mb-2 block'>
            Quick suggestions
          </label>
          <div className='flex flex-wrap gap-2'>
            {suggestions.map((suggestion, index) => (
              <Badge
                key={index}
                variant='secondary'
                className='cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors'
              >
                {suggestion}
              </Badge>
            ))}
          </div>
        </div>

        <div className='flex space-x-2'>
          <Button className='flex-1 bg-primary hover:bg-primary/90'>
            <Wand2 className='w-4 h-4 mr-2' />
            Generate Portfolio
          </Button>
          <Button variant='outline' size='icon'>
            <RefreshCw className='w-4 h-4' />
          </Button>
        </div>

        <div className='text-xs text-muted-foreground'>
          ✨ AI will create a custom portfolio based on your description
        </div>
      </CardContent>
    </Card>
  );
}
