// import { ProForm } from '@ant-design/pro-components';
import { CometChat } from '@cometchat-pro/chat';
import { Form, Input } from 'antd';
import { APP_ID, APP_REGION, AUTH_KEY } from '../../../../../constant';
import InputTexForm from '../../inputs/InputTextForm';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

type PropsForm = {
  form: any;
};
const FormLogin = (props: PropsForm) => {
  const { form } = props;
  const router = useRouter();

  const onFinish = (values: any) => {
    console.log('values', values);
    if (window) {
      let appSetting = new CometChat.AppSettingsBuilder()
        .subscribePresenceForAllUsers()
        .setRegion(APP_REGION)
        .build();
      CometChat.init(APP_ID, appSetting).then(
        () => {
          /**
           *Log in user
           */
          // const UID = 'user1';
          const authKey = AUTH_KEY;
          CometChat.login(values?.userName ?? '', authKey).then(
            (user) => {
              console.log('user', user);
              if (user) {
                router.push('/Home');
              }
            },
            (error) => {
              console.log('Login failed with exception:', {
                error,
              });
            }
          );
        },
        (error) => {
          console.log('Initialization failed with error:', error);
          // Check the reason for error and take appropriate action.
        }
      );
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const inputName = <InputTexForm />;
  return (
    <>
      <Form
        name="basic"
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="User Name"
          name="userName"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </>
  );
};
export default FormLogin;
