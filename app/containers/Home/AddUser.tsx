import * as React from 'react';
import { Modal } from 'office-ui-fabric-react/lib/Modal'
import { TextField } from 'office-ui-fabric-react/lib/TextField'
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button'
import { withFormik, FormikProps } from 'formik'

import { addUser } from '../../actions/user'

import { IProps } from './Home'
import { TUser } from '../../reducers/user'

const AddUserForm = (
  props: FormikProps<TUser>
) => {
  const {
    handleChange,
    handleBlur,
    setFieldValue,
    handleSubmit,
    values
  } = props

  return (
    <form onSubmit={handleSubmit}>
      <TextField label='Nama' name='name' value={values.name} onChanged={value => setFieldValue('name', value)}/>
      <TextField label='Kelas' name='class' value={values.class} onChanged={value => setFieldValue('class', value)}/>
      <TextField label='Nomor Induk' name='nik' value={values.nik} onChanged={value => setFieldValue('nik', value)}/>
      <TextField label='Alamat' name='address' value={values.address} multiline autoAdjustHeight onChanged={value => setFieldValue('address', value)}/>
      <br/>
      <PrimaryButton type="submit">
        Submit
      </PrimaryButton>
    </form>
  )
}

const EnhancedAddUserForm = withFormik<IProps, TUser>({
  mapPropsToValues: () => ({
    name: '',
    address: '',
    class: '',
    nik: ''
  }),
  handleSubmit: async (values, { props, resetForm }) => {
    try {
      await props.addUser(values)

      resetForm()
      
      await props.fetchUsers()
      props.toggleAdding()
    } catch (err) {
      console.log('ERROR SUBMIT:', err)
    }
  }
})(AddUserForm)

export default class extends React.Component<IProps> {
  render () {
    return (
      <Modal
        isOpen={this.props.user.isAdding}
        onDismiss={(this.props.toggleAdding as any)}
        isBlocking={false}
        containerClassName='ms-modalExample-container'
      >
        <div className='ms-modalExample-header'>
          <span>Tambahkan data siswa</span>
        </div>
        <div className='ms-modalExample-body'>
          <EnhancedAddUserForm {...this.props} />
        </div>
      </Modal>
    )
  }
}