import React, { useEffect, useState } from 'react'
import "./about.css"
import hang from "../../images/kindpng_3265329.png"
import face from "../../images/kindpng_22382.png"
import teach from "../../images/kindpng_327146.png"
import surf from "../../images/kindpng_1141006.png"
import img1 from "../../images/v1.jpg"
import { Link } from 'react-router-dom'


function About() {

   const [ttl1, setTtl1] = useState("titulo1");
   const [pr1 ,setPr1] = useState("parrafo1")
   const [ttl2, setTtl2] = useState("titulo2");
   const [pr2 ,setPr2] = useState("parrafo2")
   const [btn , setBtn] = useState("about-Button")

  useEffect(()=>{
    setTimeout(()=>{
      setTtl1("titulo1-active")
    },500)
  },[])
  useEffect(()=>{
    setTimeout(()=>{
     setPr1("parrafo1-active")
    },800)
  },[])
  useEffect(()=>{
    setTimeout(()=>{
      setTtl2("titulo2-active")
    },1100)
  },[])
  useEffect(()=>{
    setTimeout(()=>{
     setPr2("parrafo2-active")
    },1400)
  },[])
  useEffect(()=>{
    setTimeout(()=>{
     setBtn("aboutButton-active")
    },1600)
  },[])

  return (
    <div className='aboutContainer'>
      <div className='contenedor'>
        <div className='nosotros'>
          <div><h1 className={ttl1}>SOBRE NOSOTROS</h1></div>
          <div><p className={pr1}>Mar del Plata Surf School surgió hace 15 años respondiendo al interés de niños, jóvenes, padres que necesitaban de un lugar para el aprendizaje de este deporte, equipado con instructores idóneos, materiales adecuados para su enseñanza y todas las medidas de seguridad requeridas.
          Por estos motivos la escuela comenzó a difundir este deporte y su filosofía de vida enseñando a aquellos que se interesaban en esta disciplina y el contacto con la naturaleza.</p>
          <h1 className={ttl2}>INSCRIPCIONES</h1>
          <p className={pr2}>Te podes inscribir online en la Mar del Plata Surf School.
             Lo único que necesitás hacer es llenar la Ficha de Inscripción que será recibida por nosotros y procederemos a llamarte una vez recibida, para darte toda la info.</p>  
          </div>
          <Link to={"/services"}><button className={btn}>INSCRIBIRME</button> /</Link>
        </div>

        <div className="imagen">
            
        </div>
      </div>
        <div className="skills">
            <div className='boxesContainer'>
                <div className='boxes'>
                <img src={hang} alt="" />
                <p>8</p>
                <p>AÑOS DE TRABAJO</p>
                </div>
                <div className='boxes'>
                <img src={face} alt="" />
                <p>5800</p>
                <p>CLIENTES FELICES</p>
                </div>
                <div className='boxes'>
                <img src={teach} alt="" />
                <p>3500</p>
                <p>LECCIONES</p>
                </div>
                <div className='boxes'>
                <img src={surf} alt="" />
                <p>11300</p>
                <p>OLAS SURFEADAS</p>
                </div>
            </div>
     
        </div>
        
    </div>
  )
}

export default About