import { Handle, Position } from 'reactflow';

export const BaseNode = ({
  id,
  title,
  children,
  inputs = true,
  outputs = true,
  style = {}
}) => {
  return (
    <div
      style={{
        width: 220,
        minHeight: 100,
        border: '1px solid #333',
        borderRadius: 10,
        padding: 10,
        background: '#ffffff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        fontSize: 12,
        ...style
      }}
    >
      {/* 🔹 Title */}
      <div style={{ marginBottom: 8, fontWeight: 'bold' }}>
        {title}
      </div>

      {/* 🔹 Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        {children}
      </div>

      {/* 🔹 Input Handle */}
      {inputs && (
        <Handle
          type="target"
          position={Position.Left}
          id={`${id}-input`}
        />
      )}

      {/* 🔹 Output Handle */}
      {outputs && (
        <Handle
          type="source"
          position={Position.Right}
          id={`${id}-output`}
        />
      )}
    </div>
  );
};