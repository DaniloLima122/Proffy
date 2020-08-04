import React from 'react';

import whatsappicon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

export default function TeacherItem() {

    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars2.githubusercontent.com/u/31545128?s=460&u=2c1e279b6d728d05c70b90a9739ba86f2448bf22&v=4" alt="Dan" />
            <div>
                <strong>Danilo Lima</strong>
                <span>Matemática</span>
            </div>
        </header>

        <p>
            Entusiasta das melhores tecnologias Front-end
            <br />
            <br />
            Apaixonado por Desenvolvimento Web, Design de Interface e experiência de usuário e desde os 15 neste mundo incrível da tecnologia
        </p>



        <footer>
            <p>Preço/hora
                <strong>R$ 70,00</strong>
            </p>
            <button type="button">
                <img src={whatsappicon} alt="Whatsapp" />
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}
