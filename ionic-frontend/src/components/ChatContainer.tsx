import './ExploreContainer.css';


interface ChatContainerProps {
  name: string | undefined;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ name }) => {
  var hello:string = name ?? "Hello";
  return (
    <div className="container">
    </div>
  );
};

export default ChatContainer;
