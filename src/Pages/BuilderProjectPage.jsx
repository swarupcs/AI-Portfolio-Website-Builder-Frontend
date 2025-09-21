

import { AIBuilder } from '@/components/Builder/AIBuilder';
import { useNavigate } from 'react-router-dom';


export default function BuilderProjectPage({
  params,
}) {
//   const { projectId } = await params;

  const navigate = useNavigate();

  const user = {};

//   const {
//     data: { user },
//     error,
//   } = await supabase.auth.getUser();
//   if (error || !user) {
//     redirect('/auth/login');
//   }

  // Get project data
//   const { data: project } = await supabase
//     .from('projects')
//     .select('*')
//     .eq('id', projectId)
//     .eq('user_id', user.id)
//     .single();

const project = null;

  if (!project) {
    navigate('/dashboard');
  }

  return <AIBuilder user={user} project={project} />;
}
