import logo from "../../assets/icons/logo-abu.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between">
        <img src={logo} alt="abu abdirohman" />
        <ul className="flex justify-evenly">
            <li>Home</li>
            <li>About Me</li>
            <li>Skills</li>
            <li>Portfolio</li>
            <li>Article</li>
            <li>About</li>
        </ul>
    </div>
  )
}

export default Navbar