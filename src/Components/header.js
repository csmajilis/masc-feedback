
import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import Logo from '../Assets/logo__1_-removebg-preview.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from '../container/App.module.css';

const Header = (props) => {

  return (
    <div>
 <Container className={classes.container} fluid={true}>

<Row className={classes.Rows}>

<Col className={classes.Columns}>
<img src={Logo} alt="not-found" className={classes.image}/>
<h3 className={classes.name}>MASC Feedback</h3>
</Col>

</Row>

 </Container>
    </div>
  );
}

export default Header;