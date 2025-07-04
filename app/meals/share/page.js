'use client'

import { useFormState } from 'react-dom';

import { shareMeal } from '@/lib/actions';
import css from './share.module.css';
import ImagePicker from '@/components/meals/image-picker';
import MealsFormSubmit from '@/components/meals/meals-form-submit';
import { useState, useEffect } from 'react';
import Validation from '@/components/meals/validation';

export default function ShareMealPage() {
  const [state, formAction] = useFormState(shareMeal, {message: null});

  const [inputValidities, setInputValidities] = useState({
    creator: true,
    creator_email: true,
    title: true,
    summary: true,
    instructions: true,
    image: true,
  });

  const validateForm = (event, inputName) => {
    const inputText = event.target.value.trim();    
    setInputValidities((prev) => ({ ...prev, [inputName]: inputText !== '' }));
  };

  useEffect(() => {
    if (state.errors) {
      const errorFields = Object.keys(state.errors).filter((fieldName) => state.errors[fieldName]);
  
      console.log('Error fields:', errorFields);
  
      errorFields.forEach((Name) => {
        setInputValidities((prev) => ({ ...prev, [Name]: false }));
      });
    }
  }, [state.errors]);
  

  return (
    <>
      <header className={css.header}>
        <h1>
          Share your <span className={css.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={css.main}>
        <form className={css.form} action={formAction}>
          <div className={css.row}>
            <p>
              <label htmlFor="creator">Your name</label>
              <input
                type="text"
                id="creator"
                name="creator"
                onBlur={(event) => validateForm(event, 'creator')}
                className={!inputValidities.creator ? css.invalid : ''}
                /> 
              <Validation name="Name" isValid={inputValidities.creator}/>
            </p>
            <p>
              <label htmlFor="creator_email">Your email</label>
              <input
                type="email"
                id="creator_email"
                name="creator_email"
                onBlur={(event) => validateForm(event, 'creator_email')}
                className={!inputValidities.creator_email ? css.invalid : ''}
                />
              <Validation name="Email" isValid={inputValidities.creator_email}/>
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              onBlur={(event) => validateForm(event, 'title')}
              className={!inputValidities.title ? css.invalid : ''}
              />
              <Validation name="Title" isValid={inputValidities.title}/>
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input
              type="text"
              id="summary"
              name="summary"
              onBlur={(event) => validateForm(event, 'summary')}
              className={!inputValidities.summary ? css.invalid : ''}
              />
              <Validation name="Summary" isValid={inputValidities.summary}/>
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              onBlur={(event) => validateForm(event, 'instructions')}
              className={!inputValidities.instructions ? css.invalid : ''}>
              </textarea>
              <Validation name="Instructions" isValid={inputValidities.instructions}/>
          </p>
          <div className={css.row}>
            <ImagePicker label="Your image" name="image" error={inputValidities.image}/>
            <p className={css.actions}>
              <MealsFormSubmit/>
            </p>
          </div>
          <Validation name="Image" isValid={inputValidities.image}/>
        </form>
      </main>
    </>
  );
}