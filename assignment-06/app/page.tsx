import Link from "next/link";

export default async function HomePage() {
  
  const url = await fetch("https://jsonplaceholder.typicode.com/posts");
  const response = await url.json();

  return (
    <main>
      <table className="border-collapse border border-slate-500 w-full text-left">
        
        <thead>
          <tr>
            <th className="border border-slate-600 px-4 py-2">UserID</th>
            <th className="border border-slate-600 px-4 py-2">ID</th>
            <th className="border border-slate-600 px-4 py-2">Title</th>
            <th className="border border-slate-600 px-4 py-2">Body</th>
          </tr>
        </thead>
        
        <tbody>
          {response.map((post: any) => (
            <tr key={post.id}>
              <td className="border border-slate-700 px-4 py-2">{post.userId}</td>
              <td className="border border-slate-700 px-4 py-2">
                
                <Link href={`${post.id}`} className="text-blue-600 hover:underline">
                  {post.id}
                </Link>
              </td>
              <td className="border border-slate-700 px-4 py-2">{post.title}</td>
              <td className="border border-slate-700 px-4 py-2">{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
