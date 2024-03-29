import { useEffect, useState } from 'react';

interface IValidations {
  isEmail?: boolean;
  minLength?: number;
}

const useValidation = (
  value: string,
  name: string,
  validations: IValidations,
) => {
  const [emailError, setEmailError] = useState('');
  const [minLengthError, setMinLengthError] = useState('');

  const [isInputValid, setIsInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmail': {
          const re = /^\S+@\S+\.\S+$/;
          re.test(value.toLocaleLowerCase())
            ? setEmailError('')
            : setEmailError(`${name} is not valid`);
          break;
        }
        case 'minLength': {
          value.length > (validations.minLength as number)
            ? setMinLengthError('')
            : setMinLengthError(
                `${name} should be at least ${validations.minLength} characters long`,
              );
          break;
        }
      }
    }
  }, [value, validations, name]);

  useEffect(() => {
    if (emailError || minLengthError) {
      setIsInputValid(false);
    } else {
      setIsInputValid(true);
    }
  }, [emailError, minLengthError]);
  return {
    emailError,
    minLengthError,
    isInputValid,
  };
};

export const useInput = (
  initialValue: string,
  name: string,
  validations: IValidations,
) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);

  const valid = useValidation(value, name, validations);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log('in blur: ', e);
    e.persist();
    setIsDirty(true);
  };

  return {
    value,
    isDirty,
    onChange,
    onBlur,
    ...valid,
  };
};
