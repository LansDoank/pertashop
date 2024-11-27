const Logo = (props) => {
  const { img, children } = props;
  return (
    <div className="logo">
      <img className="w-[10%] mr-24" src={img} alt="Pertamina"></img>
      <h1 className="font-[open sans] font-bold text-xl">{children}</h1>
    </div>
  );
};

export default Logo;
