import React from 'react';

type TagProps = {
  label: string;
  isVisible: boolean;
};

export const Tag = ({ label, isVisible }: TagProps) => {
  if (!isVisible) return null;

  return <div>{label}</div>;
};

Tag.defaultProps = {
  isVisible: false,
};

export default Tag;
