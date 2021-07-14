
import './style.css';
import k from './images/proj1.jpg';
import kk from './images/proj2.jpg';
import kkk from './images/proj3.jpg';
import kkkk from './images/proj4.jpg';

function Project() {
  return (
    <section id="projects">
    <h2 class="text-important">Projects</h2>
    <div class="projects-container">
   
      <div class="project-card">
        <img src={k} alt="project" />
        <h3>Project 1</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
          aliquam.
        </p>
        <p><a href="k.com">Github Link</a></p>
      </div>
    
      <div class="project-card">
        <img src={kk} alt="project" />
        <h3>Project 2</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
          aliquam.
        </p>
        <p><a href="kk.com">Github Link</a></p>
      </div>
  
      <div class="project-card">
        <img src={kkk} alt="project" />
        <h3>Project 3</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
          aliquam.
        </p>
        <p><a href="kkk.com">Github Link</a></p>
      </div>
   
      <div class="project-card">
        <img src={kkkk} alt="project" />
        <h3>Project 4</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
          aliquam.
        </p>
        <p><a href="kkkk.com">Github Link</a></p>
      </div>
    </div>
  </section>
  );
}

export default Project;
