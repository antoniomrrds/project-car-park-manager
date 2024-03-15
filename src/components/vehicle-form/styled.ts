import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px dotted ${({ theme }) => theme.colors.freeSpeechRed};
  background: 1px solid ${({ theme }) => theme.colors.freeSpeechRed};
  flex-wrap: wrap;

  &:hover {
    box-shadow:
      rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    transition: ease-in-out 0.8s;
  }
  @media (max-width: ${({ theme }) => theme.mediaSizes.tablet}) {
    width: 350px;
  }

  @media (max-width: ${({ theme }) => theme.mediaSizes.mobileL}) {
    width: fit-content;
  }
`

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.secondaryColor};
  font-size: ${({ theme }) => theme.sizes.small};
  font-weight: bold;
  font-family: 'Arial', sans-serif;
`

export const FormGroup = styled.div`
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.colors.primaryColor};

  select,
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    text-align: center;
    font-family: 'Arial', sans-serif;
    font-weight: bold;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  font-family: 'Arial', sans-serif;
  color: ${({ theme }) => theme.colors.secondaryColor};
`

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.freeSpeechRed};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 5px;
  font-size: 16px;
  transition: ease-in-out 0.8s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    color: ${({ theme }) => theme.colors.primaryColor};
    box-shadow:
      rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
`
