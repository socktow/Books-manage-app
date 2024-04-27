import React, { useState } from 'react';
import moment from 'moment';
import { Form, Input, Button } from 'antd';
import api from '../api/api';
import { useDispatch } from 'react-redux';
import { addBook } from '../actions/books';

const { Item } = Form;

const AddBookForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      await api.addBook(values);
      dispatch(addBook(values));
      form.resetFields();
    } catch (error) {
      console.error('Error adding book:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div> 
      <Form form={form} onFinish={handleSubmit}>
        <Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please input the title of the book!' }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input />
        </Item>
        <Item
          name="author"
          label="Author"
          rules={[{ required: true, message: 'Please input the author of the book!' }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }} 
        >
          <Input />
        </Item>
        <Item
          name="year"
          label="Year"
          initialValue={moment().year().toString()}
          rules={[{ required: true, message: 'Please input the publication year of the book!' }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input />
        </Item>
        <Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Add Book
          </Button>
        </Item>
      </Form>
    </div>
  );
};

export default AddBookForm;
