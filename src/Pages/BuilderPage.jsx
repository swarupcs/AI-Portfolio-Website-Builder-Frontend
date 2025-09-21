import { AIBuilder } from "@/components/Builder/AIBuilder";



export default function BuilderPage() {


//   const {
//     data: { user },
//     error,
//   } = await supabase.auth.getUser();
//   if (error || !user) {
//     redirect('/auth/login');
//   }


const user = {};
  return <AIBuilder user={user} />;
}
