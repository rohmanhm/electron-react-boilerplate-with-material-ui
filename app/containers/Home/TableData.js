import * as React from 'react';
import { DetailsList, Selection } from 'office-ui-fabric-react/lib/DetailsList';
const detailsItems = [
    {
        key: 1,
        name: 'Item 1',
        value: 1,
        class: '8B',
        nik: '123324334',
        address: 'Jl Pantura'
    }
];
const detailsColumns = [
    {
        key: '1',
        name: 'Nama',
        fieldName: 'name',
        minWidth: 100,
        maxWidth: 200,
        isResizable: true,
        ariaLabel: 'Operations for name'
    },
    {
        key: '2',
        name: 'Kelas',
        fieldName: 'class',
        minWidth: 100,
        maxWidth: 200,
        isResizable: true,
        ariaLabel: 'Operations for name'
    },
    {
        key: '3',
        name: 'No Induk',
        fieldName: 'nik',
        minWidth: 100,
        maxWidth: 200,
        isResizable: true,
        ariaLabel: 'Operations for name'
    },
    {
        key: '4',
        name: 'Alamat',
        fieldName: 'address',
        minWidth: 100,
        maxWidth: 200,
        isResizable: true,
        ariaLabel: 'Operations for name'
    },
];
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMounted: false
        };
        this._selection = new Selection({
            onSelectionChanged: () => console.log
        });
        this.renderDetailList = this.renderDetailList.bind(this);
    }
    componentDidMount() {
        this.props.fetchUsers();
        // HACK
        setTimeout(() => {
            this.setState({
                isMounted: true
            });
        }, 100);
    }
    renderDetailList() {
        const usersData = this.props.user.users && this.props.user.users.length > 0 && this.props.user.users.map(item => {
            return Object.assign({}, item, { key: item.id });
        });
        return usersData
            ? (React.createElement(DetailsList
            // componentRef={this._detailsList}
            , { 
                // componentRef={this._detailsList}
                items: usersData, compact: true, columns: detailsColumns, setKey: "set", selectionMode: 1, selection: this._selection, selectionPreservedOnEmptyClick: true, ariaLabelForSelectionColumn: "Toggle selection", ariaLabelForSelectAllCheckbox: "Toggle selection for all items" }))
            : React.createElement("div", { className: "table-data-empty" }, "Tidak ada data");
    }
    render() {
        return (React.createElement("div", { "data-tid": "container" }, this.state.isMounted
            ? this.renderDetailList()
            : React.createElement("div", null, "Render halaman ...")));
    }
}
