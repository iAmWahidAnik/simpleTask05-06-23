import { useState } from 'react';
import Select, { components } from 'react-select';


const InputOption = ({
  getStyles,
  Icon,
  isDisabled,
  isFocused,
  isSelected,
  children,
  innerProps,
  ...rest
}) => {
  const [isActive, setIsActive] = useState(false);
  const onMouseDown = () => setIsActive(true);
  const onMouseUp = () => setIsActive(false);
  const onMouseLeave = () => setIsActive(false);


  let bg = "transparent";
  if (isFocused) bg = "#eee";
  if (isActive) bg = "#B2D4FF";

  const style = {
    alignItems: "center",
    backgroundColor: bg,
    color: "inherit",
    display: "flex "
  };

 
  const props = {
    ...innerProps,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    style
  };

  return (
    <components.Option
      {...rest}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={isSelected}
      getStyles={getStyles}
      innerProps={props}
    >
      <input type="checkbox" checked={isSelected} />
      {children}
    </components.Option>
  );
};

const allOptions = [
  { value: "HTML5", label: "HTML5" },
  { value: "CSS3", label: "CSS3" },
  { value: "javaScript", label: "javaScript" },
  { value: "ReactJs", label: "ReactJs" },
  { value: "TailwindCss", label: "TailwindCss" },
  { value: "Bootstrap", label: "Bootstrap" },
  { value: "ExpressJS", label: "ExpressJS" },
  { value: "NodeJs", label: "NodeJs" },
  { value: "MongoDB", label: "MongoDB" },
];


function App() {

  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <div className='mx-10'>
      <h1 className='text-5xl text-indigo-400 my-5'>Test Assignment</h1>


      <Select className='w-80'
        defaultValue={[]}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        onChange={(options) => {
          if (Array.isArray(options)) {
            setSelectedOptions(options.map((opt) => opt.value));
          }
        }}
        options={allOptions}
        components={{
          Option: InputOption
        }}
      />
      <div>
        <p className='text-green-500 text-3xl font-semibold mt-80'>{selectedOptions}</p>
      </div>
    </div>
  )
}

export default App
