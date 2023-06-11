import Link from 'next/link';

const WebProject = ({ imageSrc, projectLink }) => {
  return (
    <Link href={projectLink}>
      <span>
        <img className='w-80 p-5' src={imageSrc} alt="Web Project" />
      </span>
    </Link>
  );
};

export default WebProject;
