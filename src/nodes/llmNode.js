import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {
  const [model, setModel] = useState(data?.model || 'gpt-3.5');

  return (
    <div style={{
      width: 220,
      border: '1px solid black',
      borderRadius: '8px',
      padding: '10px',
      background: '#fff'
    }}>
      
      {/* LEFT HANDLES */}
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{ top: '30%' }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{ top: '70%' }}
      />

      {/* TITLE */}
      <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>
        LLM
      </div>

      {/* CONTENT */}
      <label>
        Model:
        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
        >
          <option value="gpt-3.5">GPT-3.5</option>
          <option value="gpt-4">GPT-4</option>
        </select>
      </label>

      {/* RIGHT HANDLE */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
      />
    </div>
  );
};