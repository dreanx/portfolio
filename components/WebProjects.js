import Link from 'next/link';

const WebProject = ({ imageSrc, projectLink }) => {
  return (
    
      <span className="hover:opacity-60 transition-opacity p-10 mx-auto md:w-2/3">
        <Link href={projectLink}>
        <img className='' src={imageSrc} alt="Web Project" />
        </Link>
      </span>
    
  );
};

export default WebProject;
