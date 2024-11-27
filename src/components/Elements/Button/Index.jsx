import './Index.css'

const Button = (props) => {
    const {children} = props
  return <button id='button'>{children}</button>;
};

export default Button;
