// Code EyesOnMe Component Here
export default function EyesOnMe() {
  const focusHandler = () => {
    console.log("Good!");
  };
  const blurHandler = () => {
    console.log("Hey! Eyes on Me");
  };
  return (
    <div>
      <button onFocus={focusHandler} onBlur={blurHandler}>
        Eyes On Me
      </button>
    </div>
  );
}
