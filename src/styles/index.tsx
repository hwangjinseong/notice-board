import Global from "./global";

interface PropsType {
  children: React.ReactNode;
}

const StyleProvider = ({ children }: PropsType) => {
  return (
    <div>
      <Global />
      {children}
    </div>
  );
};

export default StyleProvider;
