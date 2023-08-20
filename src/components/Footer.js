import UseOnline from "../utils/UseOnline";

const Footer = () => {
  const isOnline = UseOnline();

  return <div data-testid="online-status">{isOnline ? "✅" : "🛑"}</div>;
};

export default Footer;
