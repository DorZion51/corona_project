import React, {Component} from 'react';
import MaterialTable from 'material-table';


class UserPathLocationTable extends Component{
    constructor(props){
        super(props);
        this.state={
            columns: [
                { title: 'user id', field: 'userId' },
                { title: 'location id', field: 'locationId' },
                { title: 'Date', field: 'date', type: 'date' },
                { title: 'time', field: 'time', type: 'time' },
            ],
            data: [
                { userId: '65525', locationId: '112312', date: new Date().toDateString(), time: new Date().toTimeString().split('G')[0]},
                { userId: '82522', locationId: '225252', date: new Date().toDateString(), time: new Date().toTimeString().split('G')[0]},
                { userId: '48856', locationId: '335254', date: new Date().toDateString(), time: new Date().toTimeString().split('G')[0]},
                { userId: '51696', locationId: '456256', date: new Date().toDateString(), time: new Date().toTimeString().split('G')[0]},
            ],
        };
    }

    onEdit(o,n){

        console.log("old");
        console.log(o);
        console.log("new");
        console.log(n);

    }

    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <MaterialTable
                    title="User Path Location"
                    columns={this.state.columns}
                    data={this.state.data}
                    editable={{
                        onRowAdd: newData =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    this.setState(prevState => {
                                        const data = [...prevState.data];
                                        data.push(newData);
                                        return { ...prevState, data };
                                    });
                                }, 600);
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    if (oldData) {
                                        this.setState(prevState => {
                                            const data = [...prevState.data];
                                            data[data.indexOf(oldData)] = newData;
                                            if(newData.userId!=oldData.userId){
                                                alert('cant change user id');
                                                return ;
                                            }
                                            this.onEdit(oldData,newData);
                                            return { ...prevState, data };
                                        });
                                    }

                                }, 600);
                            }),
                        onRowDelete: oldData =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    this.setState(prevState => {
                                        const data = [...prevState.data];
                                        data.splice(data.indexOf(oldData), 1);
                                        return { ...prevState, data };
                                    });
                                }, 600);
                            }),
                    }}
                />
            </div>
        );
    }

}

export default UserPathLocationTable;
