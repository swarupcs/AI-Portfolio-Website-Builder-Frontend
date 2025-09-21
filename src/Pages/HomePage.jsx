import { GlassCard } from '@/components/ui/glass-card';
import { AnimatedButton } from '@/components/ui/animated-button';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Code, Eye, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function HomePage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-background via-background to-muted/20'>
      {/* Floating background elements */}
      <div className='fixed inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float' />
        <div
          className='absolute top-3/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float'
          style={{ animationDelay: '2s' }}
        />
        <div
          className='absolute top-1/2 left-3/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float'
          style={{ animationDelay: '4s' }}
        />
      </div>

      {/* Header */}
      <header className='relative z-10 p-6'>
        <nav className='max-w-7xl mx-auto flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <div className='w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center'>
              <Sparkles className='w-5 h-5 text-white' />
            </div>
            <span className='font-space-grotesk font-bold text-xl'>
              PortfolioAI
            </span>
          </div>
          <div className='flex items-center gap-4'>
            <Link to='/auth/login'>
              <Button variant='ghost'>Sign In</Button>
            </Link>
            <Link to='/auth/signup'>
              <AnimatedButton glow>Get Started</AnimatedButton>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className='relative z-10 max-w-7xl mx-auto px-6 py-20'>
        <div className='text-center space-y-8'>
          <div className='space-y-4'>
            <h1 className='font-space-grotesk font-bold text-5xl md:text-7xl bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent'>
              Build Stunning Portfolios
              <br />
              <span className='text-4xl md:text-6xl'>with AI Magic</span>
            </h1>
            <p className='font-dm-sans text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
              Create professional portfolios in minutes using our AI-powered
              builder. No coding required, just describe your vision and watch
              it come to life.
            </p>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link to='/auth/signup'>
              <AnimatedButton size='lg' glow className='text-lg px-8 py-6'>
                Start Building <ArrowRight className='ml-2 w-5 h-5' />
              </AnimatedButton>
            </Link>
            <Button
              variant='outline'
              size='lg'
              className='text-lg px-8 py-6 glass bg-transparent'
            >
              View Examples
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className='grid md:grid-cols-3 gap-8 mt-20'>
          <GlassCard className='p-8 text-center space-y-4 hover:scale-105 transition-transform duration-300'>
            <div className='w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto'>
              <Zap className='w-8 h-8 text-white' />
            </div>
            <h3 className='font-space-grotesk font-bold text-2xl'>
              AI-Powered
            </h3>
            <p className='font-dm-sans text-muted-foreground leading-relaxed'>
              Describe your vision and our AI creates beautiful, professional
              portfolios tailored to your style.
            </p>
          </GlassCard>

          <GlassCard className='p-8 text-center space-y-4 hover:scale-105 transition-transform duration-300'>
            <div className='w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto'>
              <Code className='w-8 h-8 text-white' />
            </div>
            <h3 className='font-space-grotesk font-bold text-2xl'>
              Full Control
            </h3>
            <p className='font-dm-sans text-muted-foreground leading-relaxed'>
              Edit code directly with our built-in editor. See changes instantly
              with live preview.
            </p>
          </GlassCard>

          <GlassCard className='p-8 text-center space-y-4 hover:scale-105 transition-transform duration-300'>
            <div className='w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto'>
              <Eye className='w-8 h-8 text-white' />
            </div>
            <h3 className='font-space-grotesk font-bold text-2xl'>
              Live Preview
            </h3>
            <p className='font-dm-sans text-muted-foreground leading-relaxed'>
              Watch your portfolio come to life in real-time as you make changes
              and adjustments.
            </p>
          </GlassCard>
        </div>
      </main>
    </div>
  );
}
