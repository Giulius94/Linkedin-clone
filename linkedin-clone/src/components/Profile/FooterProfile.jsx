import React from 'react'

export default function FooterProfile() {
    return (
        <>
            <footer className='mt-5'>
                <div className="container fontFooter">
                    <div className="row">
                        <ul className="col-2 list-unstyled ulFooter">
                            <li><a href=''>Informazioni </a></li>
                            <li><a href=''> Linee guida della community </a></li>
                            <li><a href=''> Privacy e condizioni </a></li>
                            <li><a href=''>Sales Solutions </a></li>
                            <li><a href=''> Centro sicurezza </a></li>
                        </ul>
                        <ul className="col-2 list-unstyled ulFooter">
                            <li><a href=''> Accessibilità </a></li>
                            <li><a href=''> Carriera </a></li>
                            <li><a href=''> Opzioni per gli annunci pubblicitari </a></li>
                            <li><a href=''> Mobile </a></li>
                        </ul>
                        <ul className="col-2 list-unstyled ulFooter">
                            <li><a href=''> Soluzioni di marketing </a></li>
                            <li><a href=''> Pubblicità </a></li>
                            <li><a href=''> Piccole Imprese </a></li>
                        </ul>
                        <ul className="col-3 list-unstyled">
                            <li className="d-flex">
                                <i class="bi bi-question-circle-fill text-dark fs-3"></i>
                                <div>
                                    <span className='ms-2 fw-bold text-decoration-none'><a href='' className='text-decoration-none text-dark'> Domande? </a></span>
                                    <p className='ms-2'> Visita il nostro Centro assistenza. </p>
                                </div>
                            </li>
                            <li className="d-flex ">
                                <i class="bi bi-gear-fill text-dark fs-3"></i>
                                <div>
                                    <span className='ms-2 fw-bold'> <a href='' className='text-decoration-none text-dark'>Gestisci il tuo account e la tua privacy </a></span>
                                    <p className='ms-2'> Vai alle impostazioni </p>
                                </div>
                            </li>
                            <li className="d-flex">
                                <i class="bi bi-shield-shaded text-dark fs-3"></i>
                                <div>
                                    <span className='ms-2 fw-bold'><a href='' className='text-decoration-none text-dark'> Trasparenza sui contenuti consigliati </a></span>
                                    <p className='ms-2'> Scopri di più sui contenuti consigliati. </p>
                                </div>
                            </li>
                        </ul>
                        <div className="col-3 list-unstyled px-5">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Italiano</option>
                                <option value="1">English</option>
                                <option value="2">Español</option>
                                <option value="3">Français</option>
                                <option value="4">Deutsch</option>
                                <option value="5">Português</option>
                                <option value="6">中文 (Chinese)</option>
                                <option value="7">日本語 (Japanese)</option>
                                <option value="8">العربية (Arabic)</option>
                                <option value="9">हिन्दी (Hindi)</option>
                                <option value="10">Русский (Russian)</option>
                            </select>
                        </div>
                    </div>
                    <p>
                        LinkedIn Corporation © 2024
                    </p>
                </div>

            </footer>
        </>
    )
}
