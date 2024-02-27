import React from 'react';
import { render } from '@testing-library/react';
import List from './list';

describe('List', () => {
  const schoollistData=[{dbn:"02M260",school_name:"Clinton School Writers & Artists"},
  {dbn:"21K728",school_name:"Liberation Diploma Plus High School"}]
  
  test('renders select component with dbn value options', () => {
    const { getByTestId } = render(<List schoollistData ={schoollistData} label="dbn" name="schooldbn"/>);
    const selectElement = getByTestId('dbn');
    expect(selectElement).toBeInTheDocument();
  });

  test('renders select component with dbn value options', () => {
    const { getByTestId} = render(<List schoollistData ={schoollistData} label="school_name" name="school_name"/>);
    const selectElement = getByTestId('school_name');
    expect(selectElement).toBeInTheDocument();
  });
});