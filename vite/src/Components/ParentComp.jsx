// what is prop drilling
// sending prop to nested components,
// middle components are wasted since they dont need
// that particular prop
// useContext is used to solve this problem

const ParentComp = ({ user }) => {
  return (
    <>
      ParentComp
      <br />
      <ChildComp1 user={user} />
    </>
  );
};

export default ParentComp;

const ChildComp1 = ({ user }) => {
  return (
    <>
      Child Comp1 
      {/* the user prop has no use in this component */}
      <br />
      <ChildComp2 user={user} />
    </>
  );
};

const ChildComp2 = ({ user }) => {
  return (
    <>
      Child Comp2
      <br />
      Hello, {user}
    </>
  );
};
