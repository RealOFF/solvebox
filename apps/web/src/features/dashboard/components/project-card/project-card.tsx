type ProjectProps = {
  title: string;
  description: string;
};

export function ProjectCard({ title, description }: ProjectProps) {
  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-lg">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
