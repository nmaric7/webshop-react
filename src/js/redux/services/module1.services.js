import axios from 'axios';

const someServiceCall = () => {
    return function (dispatch) {
        axios.get("http://index.hr")
            .then(result => {
                //call some redux module action
            })
            .catch(error => {
                //call some redux module action for error handle
            });
    }
};

export {
    someServiceCall
}