import { Link } from "react-router-dom"

const Navbar = () => {
    return <section className="bg-slate-800 text-white w-1/6 h-full flex justify-center items-center">
        <div className="w-full h-2/5 flex flex-col items-center justify-evenly">
            <ul className="h-full flex flex-col items-center justify-evenly">
                <li><Link to="/">Problema 1</Link></li>
                <li><Link to="/two">Problema 2</Link></li>
                <li><Link to="/three">Problema 3</Link></li>
                
            </ul>
        </div> 
    </section>
}

export default Navbar