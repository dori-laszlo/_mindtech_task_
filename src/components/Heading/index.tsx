import React from 'react';

interface HeadingProps {
  text: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ text, className }) => (
  <h1 className={className}>{text}</h1>
);

export default Heading;
