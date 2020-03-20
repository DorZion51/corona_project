import React, {Component} from 'react';
import MaterialTable from 'material-table';


class LocationsTable extends Component{
    constructor(props){
        super(props);
        this.state={
            columns: [
                { title: 'location id', field: 'locationId' },
                { title: 'location name', field: 'locationName' },
                { title: 'city', field: 'city' },
                { title: 'address', field: 'address' },
                { title: 'average duration', field: 'avgDuration' },
            ],
            data: [
                { locationId: '136263', locationName: 'Brake Club', city: 'Beer Sheva', address: 'The Harbel 27',avgDuration:'10:15' },
                { locationId: '136263', locationName: 'The bay', city: 'Tel Aviv', address: 'The Harmon 33',avgDuration:'22:12' },
                { locationId: '136263', locationName: 'Big Fashion Mole', city: 'Beit Shemesh', address: 'Yitzak Rabin 11',avgDuration:'1:45' },
                { locationId: '136263', locationName: 'Ratatoy resturant', city: 'Amunim', address: 'Amunim 227',avgDuration:'3:25' },
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
                    title="Locations Table"
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
                                            if(newData.locationId!=oldData.locationId){
                                                alert('cant change location id');
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

export default LocationsTable;
