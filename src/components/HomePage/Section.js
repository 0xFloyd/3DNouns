import classes from './Section.module.css';
import { Container, Row } from 'react-bootstrap';

const Section = (props) => {
  const { fullWidth, className, children } = props;
  return (
    <div className={`${classes.container} ${className} tw-bg-white`}>
      <Container fluid={fullWidth ? true : 'lg'}>
        <Row className="align-items-center">{children}</Row>
      </Container>
    </div>
  );
};
export default Section;
