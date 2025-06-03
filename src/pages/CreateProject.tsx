import { ProjectCreateForm } from "@/components/ProjectCreateForm";
import { Toaster } from "@/components/ui/toaster";

export default function CreateProjectPage() {
  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Create a New Project</h1>
        <p className="text-muted-foreground mb-8">
          Get started by creating a new project. Fill out the form below with your project details.
        </p>
        <ProjectCreateForm />
      </div>
      <Toaster />
    </div>
  );
}