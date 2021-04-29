import axios from 'axios';

export const getFoods = ({ setFoods, setFilteredOrders, setLoading }) => {
    axios.get(
        `${process.env.REACT_APP_API_Connect}/productos`, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }).then(res => {
        setFoods(res.data.detail);
        setLoading(false);
    }).catch(err => {
        setLoading(false);
        console.log(err);
    });
}

export const getFoodById = ({ id, setFood }) => {
    axios.get(
        `${process.env.REACT_APP_API_Connect}/productos/${id}`, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }).then(res => {
        setFood(res.data.detail);
    }).catch(err => {
        console.log(err);
    });
}

export const getFoodsByCategory = ({ setFoods, setFilteredOrders, setLoading, data}) => {
    axios.post(
        `${process.env.REACT_APP_API_Connect}/productos/filtrar`, {idCategoria: data}, {
        headers: {
            'Authorization': localStorage.getItem('token')
        },
    }).then(res => {
        console.log("Aqui")
        console.log(res);
        setFoods(res.data.detail);
        setLoading(false);
    }).catch(err => {
        setLoading(false);
        console.log(err);
    });
}
