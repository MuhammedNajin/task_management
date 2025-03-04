import React from 'react';
import { Icon } from '../atoms/Icon';

interface TaskActionsProps {
  onEdit?: () => void;
  onDelete: () => void;
}

export const TaskActions: React.FC<TaskActionsProps> = ({ onEdit, onDelete }) => (
  <div className="flex space-x-1 ml-4">
    {onEdit && (
      <Icon
        onClick={onEdit}
        className="text-gray-400 hover:text-gray-500 focus:ring-blue-500"
        ariaLabel="Edit task"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      </Icon>
    )}
    <Icon
      onClick={onDelete}
      className="text-gray-400 hover:text-red-500 focus:ring-red-500"
      ariaLabel="Delete task"
    >
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </Icon>
  </div>
);