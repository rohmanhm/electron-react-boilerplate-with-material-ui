var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from 'react';
import { Modal } from 'office-ui-fabric-react/lib/Modal';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { withFormik } from 'formik';
const AddUserForm = (props) => {
    const { handleChange, handleBlur, setFieldValue, handleSubmit, values } = props;
    return (React.createElement("form", { onSubmit: handleSubmit },
        React.createElement(TextField, { label: 'Nama', name: 'name', value: values.name, onChanged: value => setFieldValue('name', value) }),
        React.createElement(TextField, { label: 'Kelas', name: 'class', value: values.class, onChanged: value => setFieldValue('class', value) }),
        React.createElement(TextField, { label: 'Nomor Induk', name: 'nik', value: values.nik, onChanged: value => setFieldValue('nik', value) }),
        React.createElement(TextField, { label: 'Alamat', name: 'address', value: values.address, multiline: true, autoAdjustHeight: true, onChanged: value => setFieldValue('address', value) }),
        React.createElement("br", null),
        React.createElement(PrimaryButton, { type: "submit" }, "Submit")));
};
const EnhancedAddUserForm = withFormik({
    mapPropsToValues: () => ({
        name: '',
        address: '',
        class: '',
        nik: ''
    }),
    handleSubmit: (values, { props, resetForm }) => __awaiter(this, void 0, void 0, function* () {
        try {
            yield props.addUser(values);
            resetForm();
            yield props.fetchUsers();
            props.toggleAdding();
        }
        catch (err) {
            console.log('ERROR SUBMIT:', err);
        }
    })
})(AddUserForm);
export default class extends React.Component {
    render() {
        return (React.createElement(Modal, { isOpen: this.props.user.isAdding, onDismiss: this.props.toggleAdding, isBlocking: false, containerClassName: 'ms-modalExample-container' },
            React.createElement("div", { className: 'ms-modalExample-header' },
                React.createElement("span", null, "Tambahkan data siswa")),
            React.createElement("div", { className: 'ms-modalExample-body' },
                React.createElement(EnhancedAddUserForm, Object.assign({}, this.props)))));
    }
}
