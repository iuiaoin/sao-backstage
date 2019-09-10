import ajax from '../../util/ajax';

const getUser = async() => {
    const resp = await ajax.get('/getUser');
    return resp.data;
};

export {
    getUser
};