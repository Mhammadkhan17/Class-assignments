const JsonTodos = async ({ params }) => {

    const url = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const response = await url.json();
  
    return (
      <main>
        <h1 className="text-4xl text-center">
          Dynamic Route <br />
          {response.id}
        </h1>
        <br />
        <h1 className="text-5xl text-center">{response.title}</h1>
        <br />
        <h1 className="text-5xl text-center">{response.body}</h1>
      </main>
    );
  };
  
  export default JsonTodos;
  