export function handleChange(subObject, field, value, setFormData) {
  setFormData((prevData) => ({
    ...prevData,
    [subObject]: {
      ...prevData[subObject],
      [field]: value,
    },
  }));
}

export function handleChangeArray(
  subObject,
  field,
  subfield,
  value,
  index,
  setFormData
) {
  setFormData((prevData) => ({
    ...prevData,
    [subObject]: {
      ...prevData[subObject],
      [field]: prevData[subObject][field].map((item, i) => {
        if (i !== index) {
          return item;
        }
        return {
          ...item,
          [subfield]: value,
        };
      }),
    },
  }));
}

export function handleAddItem(subObject, field, newRow, setFormData) {
  setFormData((prevData) => ({
    ...prevData,
    [subObject]: {
      ...prevData[subObject],
      [field]: [...prevData[subObject][field], newRow],
    },
  }));
}

export function handleRemoveItem(subObject, field, indexToRemove, setFormData) {
  setFormData((prevData) => ({
    ...prevData,
    [subObject]: {
      ...prevData[subObject],
      [field]: prevData[subObject][field].filter(
        (_, index) => index !== indexToRemove
      ),
    },
  }));
}
