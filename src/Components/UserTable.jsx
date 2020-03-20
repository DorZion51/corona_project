import React, {Component} from 'react';
import MaterialTable from 'material-table';
import axios from "axios";
import {BrowserRouter} from "react-router-dom";

class UserTable extends Component{
    constructor(props){
        super(props);

        this.state={
            columns: [
                { title: 'full name', field: 'fullname' },
                { title: 'user id', field: 'userId' },
                { title: 'password', field: 'password'},
                { title: 'phoneNumber', field: 'phone'},
                { title: 'email', field: 'email'},
                { title: 'status', field: 'status'},
                { title: 'remaining isolation', field: 'remainingIsolation'},
                { title: 'role', field: 'userRole'},
                { title: 'image', field: 'image'},
                { title: 'QR', field: 'userQR'},
            ],
            data: []
        };
    }

    componentWillMount() {
        this.getUsers();
    }

    getUsers(){
        axios.get('http://172.20.10.6:3000/users/getUsers')
            .then(response => {
                console.log(response);
                this.setState({data:response.data});
            })
            .catch(error => {
                console.log('get serviceProvider user details error ', error)
                return error;
            });
    }

    onEdit(o,n){
        var endUrl='';
        if(o.status!=n.status&&n.status=='infected'){
             endUrl='updateToInfected';
        }
        else{
             endUrl='update';
        }
        axios.post('http://172.20.10.6:3000/users/'+endUrl,n)
            .then(response => {
            })
            .catch(error => {
                console.log('get serviceProvider user details error ', error)
                return error;
            });

    }

    render() {
        return (
            <BrowserRouter path='/home'>
            <div>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <MaterialTable
                    title="User Table"
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
            </BrowserRouter>
        );
    }

}

export default UserTable;
