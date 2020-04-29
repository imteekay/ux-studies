import React from 'react';

type TagProps = {
  label: string;
  isVisible: boolean;
};

export const Tag = ({ label, isVisible }: TagProps) => {
  if (!isVisible) return null;

  return <span>{label}</span>;
};

Tag.defaultProps = {
  isVisible: false,
};

export default Tag;
