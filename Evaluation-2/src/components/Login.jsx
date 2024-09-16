import "./styles.css";
import { Card,CardBody } from "@chakra-ui/react";

function Signup() {
  const handleSubmit = (e) => {
    alert("form submitted sucessfully");
  };
  return (
    <div>
      <Card maxW="sm">
        <CardBody>
          <form className="form" onSubmit={handleSubmit}>
            <input placeholder="Enter Your Name" className="input" />
            <input
              placeholder="Enter Your email"
              type="email"
              className="input"
            />
            <input
              placeholder="Enter Your password"
              type="password"
              className="input"
            />
            <button>Submit</button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
export default Signup;
