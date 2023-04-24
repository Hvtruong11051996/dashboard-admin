import React, { useState } from 'react';
import './ProductAction.scss';
import { Button, Card, Col, Form, Input, Modal, Row, Upload, UploadFile } from 'antd';
import HeaderPage from 'app/pages/components/HeaderPage';
import JoditEditor from 'jodit-react';
import { RcFile, UploadProps } from 'antd/es/upload';
import { PlusOutlined } from '@ant-design/icons';

interface IModal {}

const ProductAction = ({}: IModal) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-xxx',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error',
    },
  ]);

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Card className="product-list-content">
      <HeaderPage title="Add New Product" />
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row>
          <Col span={16}>
            <div className="bd-bottom">
              <div className="label-header mb-header">Basic Information</div>
              <Form.Item
                label="Product Name"
                name="name"
                rules={[{ required: true, message: 'Please input your Product Name!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item label="Code" name="code">
                <Input />
              </Form.Item>
              <Row className="item-end">
                <Col style={{ display: 'flex', justifyContent: 'flex-end', marginRight: 3 }} span={4}>
                  Description:{' '}
                </Col>
                <Col span={16}>
                  <JoditEditor value={''} />
                </Col>
              </Row>
            </div>

            <div className="bd-bottom ">
              <div className="label-header mb-header">Pricing</div>
              <Form.Item label="Price" name="price" rules={[{ required: true, message: 'Please input your Price!' }]}>
                <Input />
              </Form.Item>

              <Form.Item label="Star Points" name="starPoints" className="item-end">
                <Input />
              </Form.Item>
            </div>

            <div className="bd-bottom">
              <div className="label-header mb-header">Organizations</div>
              <Form.Item
                label="Category"
                name="category"
                rules={[{ required: true, message: 'Please input your Category!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Product Type"
                name="productType"
                rules={[{ required: true, message: 'Please input your Product Type!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item label="Tags" name="tags" className="item-end">
                <Input />
              </Form.Item>
            </div>
          </Col>

          <Col span={8}>
            <div className="label-header mb-header">Product Image</div>
            <>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {fileList.length >= 8 ? null : uploadButton}
              </Upload>
              <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
              </Modal>
            </>
          </Col>
        </Row>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ProductAction;
