import { Link } from "react-router-dom"
export default function LogInAuth() {
    return (
        <div className="flex justify-center">
            <div className="w-1/2 mt-40 flex text-white justify-center">
                <img src="src/assets/Profile-Photo(1).svg" alt="Images du jour" />
                <h1>Login</h1>
            </div>
            <div className="w-1/2 mt-40">
                <div className="text-white">
                    <p>ça se passe maintenat</p>
                </div>
                <div className="">
                    <div className="flex-rows mt-10 justify-center">
                        <p className="text-white">E-mail</p>
                        <input className="w-[50%] mt-2 rounded-3xl h-[45px]" type="mail" /> <br />
                        <p className="text-white mt-2">Password</p>
                        <input className="w-[50%] rounded-3xl h-[45px] mt-5" type="text" />
                    </div>
                </div>
                <div className="mt-5">
                    <button className="bg-blue-500 rounded-3xl h-[45px] w-[50%]">Connexion</button>
                </div>
            </div>
        </div >
    )
}