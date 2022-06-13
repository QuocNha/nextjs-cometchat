import { Form } from 'antd';
import { useEffect } from 'react';
import FormLogin from './components/forms/FormLogin';
import styles from './login.module.scss';

const Login = () => {
  const [form] = Form.useForm();
  const formLogin = <FormLogin form={form} />;
  return <div className={styles.login}>{formLogin}</div>;
};
export default Login;
