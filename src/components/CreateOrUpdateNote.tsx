import React, { FC, useContext } from "react";
import { Formik, Field } from "formik";

import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useActions } from "../hooks/useActions";
import Note from "./Note";
import { INote } from "../types/notes.types";
import NoteDTO from "../dto/note.dto";
import { noteSchema } from "../schemas/note";
import { useTypedSelector } from "../hooks/useTypeSelector";

interface initValues {
  name: string;
  content: string;
  category: string;
}
export default function CreateUpdateForm() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { notes } = useTypedSelector((state) => state);
  const { editNote, createNote } = useActions();
  const createNoteValues: initValues = { name: "", category: "", content: "" };
  const editNoteValues: initValues = {
    name: state?.note.name,
    category: state?.note.category,
    content: state?.note.content,
  };
  return (
    <Container>
      <Title>Form</Title>
      <Formik
        initialValues={state ? editNoteValues : createNoteValues}
        validationSchema={noteSchema}
        onSubmit={(values) => {
          if (state) {
            const { note } = state;

            const edited = new NoteDTO({
              ...note,
              name: values.name,
              category: values.category,
              content: values.content,
            });
            console.log(edited);
            editNote(edited);
          } else {
            const { name, category, content } = values;
            const newNote = new NoteDTO({
              id: Date.now().toString(),
              createdAt: "",
              name,
              category,
              content,
              dates: "",
              archieved: false,
            });
            createNote(newNote);
          }
          navigate("/");
          console.log(notes);
        }}
        render={({
          errors,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
          >
            <Label>
              Name{errors.name && <Text color="red">{errors.name}</Text>}
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                type="text"
                name="name"
                placeholder="name"
              />
            </Label>
            <Label>
              Content
              {errors.content && <Text color="red">{errors.content}</Text>}
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.content}
                type="text"
                name="content"
                placeholder="content"
              />
            </Label>
            <Label>
              <Select
                name="category"
                value={values.category}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="" label="Select a category">
                  Select a color{" "}
                </option>
                <option value="task" label="task">
                  task{" "}
                </option>
                <option value="quote" label="quote">
                  quote
                </option>

                <option value="random" label="random">
                  random
                </option>
                <option value="idea" label="idea">
                  idea
                </option>
              </Select>
            </Label>
            <Button type="submit">Submit</Button>
          </Form>
        )}
      />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Select = styled.select`
  width: 300px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
`
const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-family: "Raleway", sans-serif;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
`;

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 300px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

const Button = styled.button`
  width: 300px;
  height: 35px;
  background-color: #5995ef;
  color: #fff;
  border-radius: 3px;
`;

export const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  color: #4d4d4d;
  font-size: 2.2em;
`;

export const Title2 = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  color: #4d4d4d;
  font-size: 1.8em;
`;

export const Text = styled.p`
  font-family: "Raleway", sans-serif;
  color: ${(props) => props.color || "#4d4d4d"};
`;
