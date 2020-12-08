import { EndPoint } from '../../constants/apiEndPoints'

function* apiCall(params) {
    // console.log("api call params==>", params);
    let path = `${EndPoint.baseURL}${params.url}`;
    console.log("path==>", path);

    var myHeaders = new Headers();

    myHeaders.append("Accept", "application/json");

    var requestOptions = {
        method: params.method,
        headers: myHeaders,
        redirect: "follow",
    };

    if (params.isformData) {
        myHeaders.append("Content-Type", "multipart/form-data");
        requestOptions.body = params.requestBody;
    }
    else {
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify(params.requestBody);
        requestOptions.body = raw;

    }

    const response = yield fetch(path, requestOptions).then(function (response) {
        return response.json();
    });
    return response;
}

export const Api = {
    apiCall,
};
