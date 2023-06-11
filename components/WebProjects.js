import Link from 'next/link';

const WebProject = ({ imageSrc, projectLink }) => {
  return (
    <Link href={projectLink}>
      <span className="hover:opacity-60 transition-opacity">
        <img className='p-10 mx-auto md:w-2/3' src={imageSrc} alt="Web Project" />
      </span>
    </Link>
  );
};

export default WebProject;
