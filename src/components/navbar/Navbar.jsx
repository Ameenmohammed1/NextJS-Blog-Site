import Links from "./link/Links"

const Navbar = ({}) => {
  return <div className="w-[100%] h-[10vh] flex justify-between items-center px-[50px]">
    <div className="text-[1.5rem] font-medium">Blog Store</div>
    <div className="">
       <Links/>
    </div>
  </div>
}

export default Navbar