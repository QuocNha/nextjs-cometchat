import InputCustom from '../../../../components/inputs/InputCustom';
const InputTexForm = () => {
  return (
    <>
      <InputCustom
        className={''}
        label={'User Name'}
        name={'user_name'}
        placeholder={'User Name'}
        width={'lg'}
        key={'user_name'}
        hidden={false}
        disable={false}
        errorsMessage={'Qty'}
        type_input={'input'}
        defaultValue={''}
      />
    </>
  );
};
export default InputTexForm;
