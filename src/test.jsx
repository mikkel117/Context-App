import { useGlobal } from 'reactn';

const MyComponent = () => {
  const [ avatar, setAvatar ] = useGlobal('avatar');
  return (
    <img
      alt="Avatar"
      onClick={() => {
        const newAvatar = prompt("Enter your avatar URL:");
        setAvatar(newAvatar);
      }}
      src={avatar}
    />
  );
};