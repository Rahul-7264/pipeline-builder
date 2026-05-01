import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace('customOutput-', 'output_')
  );

  const [outputType, setOutputType] = useState(
    data?.outputType || 'Text'
  );

  return (
    <div style={{
      width: 220,
      border: '1px solid black',
      borderRadius: '8px',
      padding: '10px',
      background: '#fff'
    }}>
      
      {/* INPUT HANDLE */}
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
      />

      {/* TITLE */}
      <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>
        Output
      </div>

      {/* CONTENT */}
      <label>
        Name:
        <input
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
        />
      </label>

      <label>
        Type:
        <select
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="Image">Image</option>
        </select>
      </label>

    </div>
  );
};