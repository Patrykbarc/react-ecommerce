export function Button({ value = "Button value", url = null, size = "lg" }) {
  let buttonSize;
  let buttonFontSize;

  switch (size) {
    case "md":
      buttonSize = "px-12 py-2";
      buttonFontSize = "text-md";
      break;
    case "lg":
      buttonSize = "px-8 py-4";
      buttonFontSize = "text-lg";
      break;
  }
  return (
    <a href={url} className="w-full md:w-fit">
      <input
        type="button"
        value={value}
        className={`w-full cursor-pointer text-wrap break-words bg-green-800 text-center text-lg uppercase text-white  ${buttonSize} ${buttonFontSize} transition-colors hover:bg-green-700`}
      />
    </a>
  );
}
