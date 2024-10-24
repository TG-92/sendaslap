import { Accordion } from "react-bootstrap";
import "./Content.module.css";

function Content() {
  return (
    <div className="accbody">
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>What The Slap?!</Accordion.Header>
        <Accordion.Body>
          Dont you just sometimes think you're not living up to your true potential? <br />
          Maybe you're just not living up to your dreams. But remember: <br />
          Never stop letting people not help, just give them the tools they need to help them grow. <br />
          And remember: You're never truly alone. <br />
          - We are literally just -  <br /> 
          -one Hand away - <br />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Are you flapping serious?!</Accordion.Header>
        <Accordion.Body>
          Yes! And we actually have the scientific evidence to support this claim.
          We've been doing this for over 30 years and we've found that people who receive a slap get totally grounded in different ways.
          For instance, people who receive a slap tend to be more focused on their career, their dreams, and their goals.
          Over the Course of 13 centuries we installed the first slapbox in London, England.
          And over the next 12 centuries we've installed slapboxes in every major city in the world.
          We've worked with hundreds of celebrities and we've seen the results. 
          Check out our Website and find your perfect Slap Story!
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default Content;