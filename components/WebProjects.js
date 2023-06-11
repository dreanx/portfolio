import Link from 'next/link';

const WebProject = ({ imageSrc, projectLink }) => {
  return (
    <Link href={projectLink}>
      <span>
        <img src={imageSrc} alt="Web Project" />
      </span>
    </Link>
  );
};

export default WebProject;
