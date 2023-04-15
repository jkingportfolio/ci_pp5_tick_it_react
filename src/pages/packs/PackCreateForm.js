import { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import axios from "axios";

const PackCreateForm = () => {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return { ...styles, color: data.color };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.color,
        color: "#fff",
      };
    },
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
      };
    },
    multiValueRemove: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
        cursor: "pointer",
        ":hover": {
          color: "#fff",
        },
      };
    },
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("/tasks/");
        console.log(response)
        const data = response.data;
        console.log(data)
        const optionsData = data.map((task) => ({
          value: task.title,
          label: task.title,
          color: "#36B37E",
        }));
        setOptions(optionsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTasks();
  }, []);

  const handleChange = (selectedOption, actionMeta) => {
    setSelectedOptions(selectedOption);
    console.log("handleChange", selectedOption, actionMeta);
  };

  const handleInputChange = (inputValue, actionMeta) => {
    console.log("handleInputChange", inputValue, actionMeta);
  };

  return (
    <MultiSelect
      options={options}
      value={selectedOptions}
      onChange={handleChange}
      onInputChange={handleInputChange}
      isMulti
      styles={colorStyles}
    />
  );
};

export default PackCreateForm;
