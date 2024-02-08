import React, { useState } from 'react';

// List of available form components
const formComponents = [
  { type: 'text', label: 'Text Input' },
  { type: 'select', label: 'Select Dropdown' },
  { type: 'radio', label: 'Radio Buttons' },
  { type: 'checkbox', label: 'Checkbox Group' },
  { type: 'textarea', label: 'Text Area' },
  { type: 'paragraph', label: 'Paragraph' },
];

// Draggable form item component
const FormItem = ({ type, label, onDragStart }) => {
  return (
    <div draggable onDragStart={(e) => onDragStart(e, type, label)}>
      {label}
    </div>
  );
};

// Canvas component for dropping form components
const Canvas = ({ formItems, onDrop }) => {
  const handleDrop = (event) => {
    event.preventDefault();
    const type = event.dataTransfer.getData('type');
    const label = event.dataTransfer.getData('label');
    const posX = event.clientX;
    const posY = event.clientY;
    onDrop(type, label, posX, posY);
  };

  return (
    <div
      onDragOver={(event) => event.preventDefault()}
      onDrop={handleDrop}
      style={{ width: '100%', height: '400px', border: '1px solid black', position: 'relative' }}
    >
      {formItems.map((item, index) => (
        <div
          key={index}
          style={{ position: 'absolute', left: item.posX, top: item.posY }}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

// Main FormBuilder App component
const FormBuilder = () => {
  const [formItems, setFormItems] = useState([]);
  const [formData, setFormData] = useState({ formName: '', formLabel: '' });

  const handleDragStart = (event, type, label) => {
    event.dataTransfer.setData('type', type);
    event.dataTransfer.setData('label', label);
  };

  const handleDrop = (type, label, posX, posY) => {
    const newItem = { type, label, posX, posY };
    setFormItems([...formItems, newItem]);
  };

  const handleSave = () => {
    const formDataToSave = {
      formName: formData.formName,
      formLabel: formData.formLabel,
      formItems: formItems
    };
    // Convert formDataToSave to JSON
    const jsonData = JSON.stringify(formDataToSave);
    // Save JSON data to backend or local storage
    console.log('Form data saved:', jsonData);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        value={formData.formName}
        onChange={(e) => setFormData({ ...formData, formName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter Label"
        value={formData.formLabel}
        onChange={(e) => setFormData({ ...formData, formLabel: e.target.value })}
      />
      <button onClick={handleSave}>Save Form</button>
      <hr />
      <div>
        <h3>Available Form Components</h3>
        {formComponents.map((component, index) => (
          <FormItem
            key={index}
            type={component.type}
            label={component.label}
            onDragStart={handleDragStart}
          />
        ))}
      </div>
      <hr />
      <div>
        <h3>Form Builder</h3>
        <Canvas formItems={formItems} onDrop={handleDrop} />
      </div>
    </div>
  );
};

export default FormBuilder;
