import { useEffect, useState } from 'react';
import Queue from './utils/Queue';
import Stack from './utils/Stack';


function App() {
  const [queueContent, setQueueContent] = useState("");
  const [stackContent, setStackContent] = useState("");
  
  useEffect(()=>{
  
  //colas
  const queue = new Queue();
  queue.enqueue(1);
  console.log(queue);

  //fila
  const stack = new Stack();
  stack.push(10);
  
  setQueueContent(queue.printQueue());
  setStackContent(stack.printStack());

  },[]);
  
  return (
    <>
      <div>
          <h1>Queue</h1>
          <p>{queueContent}</p>
      </div>

      <div>
          <h1>Stack</h1>
          <p>{stackContent}</p>
      </div>
    
    </>
  );
}

export default App;