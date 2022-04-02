import { FaEdit } from "react-icons/fa";
import student from "../assets/img/student.jpg";
import "./student.css"

function StudentProfil():JSX.Element {

    return (
        <>
            <div className="row">
                <div className="col-xl-3 col-lg-3 col-sm-12 col-xs-12 d-flex flex-column align-items-center information p-3 mt-3 profil">
                    <img src={student} className="photo" alt="pdp"/>
                    <div className="name mt-2">
                        <h3>Damian Lillard</h3>
                    </div>
                    <div className="data mt-2">
                        <p className="data-item"><b>Filière : </b> Informatique de Gestion Genie Logiciel et Intelligence Artificielle (IGGLIA *)</p>
                        <p className="data-item"><b>Numero : </b> ***</p>
                        <p className="data-item"><b>Numero Matricule : </b> ****/**</p>
                        <p className="data-item"><b>Né(e) le : </b> ** **** ****</p>
                        <p className="data-item"><b>À : </b> ********</p>
                        <p className="data-item"><b>Adresse : </b> Zone 51</p>
                        <p className="data-item"><b>Téléphone : </b> +261*********</p>
                        <p className="data-item"><b>Email : </b> ********@gmail.com</p>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-6 col-sm-12 col-xs-12 information mt-3">
                    <h3 className="d-flex justify-content-center mt-3">Vos publications</h3>
                    <div className="mt-2">
                        <input type="text" placeholder="Écrivez quelque chose..." className="field"/>
                    </div>
                    <div className="mt-2">
                        <div className="publication mt-1">
                            <div className="d-flex justify-content-end"><FaEdit/></div>
                            <p className="date">30min</p>
                            <p className="detail">Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>
                            <div className="viewers d-flex">
                                <div className="reacts">0</div>
                                <div className="comments">0</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="publication mt-1">
                            <div className="d-flex justify-content-end"><FaEdit/></div>
                            <p className="date">hier</p>
                            <p className="detail">Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>
                            <div className="viewers d-flex">
                                <div className="reacts">2</div>
                                <div className="comments">6</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="publication mt-1">
                            <div className="d-flex justify-content-end"><FaEdit/></div>
                            <p className="date">30 Avril 2022</p>
                            <p className="detail">Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>
                            <div className="viewers d-flex">
                                <div className="reacts">5</div>
                                <div className="comments">12</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-12 col-xs-12 information mt-3">
                    <h3 className="d-flex justify-content-center mt-3">ISPM Blog</h3>
                </div>
            </div>
        </>
    );
}

export default StudentProfil;