import React, { useState } from "react";
import {
  FiChevronRight,
  FiChevronDown,
  FiFolder,
  FiFile,
} from "react-icons/fi";

interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
}

interface TreeViewProps {
  data: TreeNode[];
}

const TreeViewItem: React.FC<{ node: TreeNode; level: number }> = ({
  node,
  level,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="ml-4">
      <div className="flex items-center py-1">
        {node.children && node.children.length > 0 ? (
          <button onClick={handleToggle} className="mr-1">
            {isOpen ? <FiChevronDown /> : <FiChevronRight />}
          </button>
        ) : (
          <span className="mr-5" />
        )}
        {node.children && node.children.length > 0 ? (
          <FiFolder className="mr-1 text-yellow-500" />
        ) : (
          <FiFile className="mr-1 text-gray-500" />
        )}
        <span>{node.name}</span>
      </div>
      {isOpen && node.children && (
        <div className="ml-4">
          {node.children.map((childNode) => (
            <TreeViewItem
              key={childNode.id}
              node={childNode}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function TreeView({ data }: TreeViewProps) {
  return (
    <div className="border rounded-lg p-4">
      {data.map((node) => (
        <TreeViewItem key={node.id} node={node} level={0} />
      ))}
    </div>
  );
}
