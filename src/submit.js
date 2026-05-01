// submit.js

import { useStore } from './store';

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const handleSubmit = () => {
    const numNodes = nodes.length;
    const numEdges = edges.length;

    // Track connected nodes
    const connectedNodeIds = new Set();

    edges.forEach((edge) => {
      connectedNodeIds.add(edge.source);
      connectedNodeIds.add(edge.target);
    });

    // Check if all nodes are connected
    const allConnected = nodes.every((node) =>
      connectedNodeIds.has(node.id)
    );

    if (!allConnected) {
      alert("❌ Some nodes are NOT connected properly");
    } else {
      alert(`✅ Pipeline is valid

Nodes: ${numNodes}
Edges: ${numEdges}`);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
      }}
    >
      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};