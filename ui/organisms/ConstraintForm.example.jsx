import { ConstraintForm, ConstraintField } from "react-atomic-organism";
import { Button } from "react-atomic-molecule";

const ConstraintFormExample = () => {
  let form;
  return (
    <ConstraintForm ref={el=>form=el} onSubmit={(e)=>{
      alert("Make a submit.");
      return false;
    }}>
      <ConstraintField
        atom="input"
        label="Native check"
        name="name"
        placeholder="Your Name"
        required
      />
      <ConstraintField
        atom="input"
        label="Custom check"
        name="name"
        placeholder="Your Name (Custom)"
        onValidate={({el, setState})=>{
          if (!el.value.length) {
            setState("you need provide content");
            return false;
          }
        }}
      />
      <Button type="submit">Native Submit</Button>
      <Button type="button" onClick={()=>{
        form.submit();
      }}>Simulate Submit</Button>
    </ConstraintForm>
  );
};

export default ConstraintFormExample;
