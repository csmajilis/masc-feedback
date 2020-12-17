import React,{useEffect} from 'react'
// import { Container, Col, Row } from 'reactstrap';
import sal from 'sal.js'
import "sal.js/dist/sal.css";
import classes from '../container/App.module.css'



const Home = () => {
    useEffect(sal, []);
    return(
<div className={classes.Home}> 

<div className={classes.headingpara}>

<h1 className={classes.mainhead}
  data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease-out-bounce"
  data-sal-duration="1200"
>Join with <span style={{color: "#4885ed"}}>G</span><span style={{color: "#db3236"}}>o</span><span style={{color: "#f4c20d"}}>o</span><span style={{color: "#4885ed"}}>g</span><span style={{color: "#3cba54"}}>l</span><span style={{color: " #db3236"}}>e</span> account!</h1>
<p className={classes.para}
data-sal="slide-left"
data-sal-delay="300"
data-sal-easing="ease-out-bounce"
data-sal-duration="1200"
>Lorem ipsum, dolor sit amet consectetur<br/>
 adipisicing elit. Totam dolores doloribus aperiam,<br/>
 illo minima ab aut amet repellat sunt veritatis porro saepe dolor, minus dignissimos.</p>
    <div className={classes.buttons}
    data-sal="slide-down"
    data-sal-delay="300"
    data-sal-easing="ease-out-bounce"
    data-sal-duration="1200"
    >

<button className={classes.button}>Signup</button>
<button className={classes.button2}>Signin</button>
        
    </div>
</div>


</div>
    )
}



export default Home