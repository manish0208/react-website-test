import "./Style.css";

const Home = (props) => {
    return(
        <div>
            <h1> {props.name} {props.intro} page</h1>
            <ul>
              <li> I am <b>{props.name}</b>, coming from Tilda, in the Raipur district. </li>

              <li> I did my SSLC in government high school in my village and I did my HSC in AGM Hr. Secondary school in Eragudi. </li>

              <li> Now, I have completed BE {props.course} in SSTC at Bhliai.</li>

              <li> I completed my project, design and fabrication of an industrial trolley.</li>

              <li> My hobbies are travelling, hearing songs and reading interesting facts (Books).</li>

              <li> My strengths are easily adapted to anyone and I easily control my emotions at any situation.</li>

              <li> My short-term goal is to give rest to my parents.</li>

              <li> My long-term goal is to become a good web developer.</li>
            </ul>
        </div>
    )
}

export default Home;