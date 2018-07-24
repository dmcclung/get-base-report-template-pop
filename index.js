let AWS = require('aws-sdk'); 
AWS.config.update({region: 'us-west-2'});

let docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

module.exports.handler = async (event) => {
    var params = {
        TableName: 'clients',
        Key: {'clientId': event.clientId}
    };
    
    try {
        let data = await docClient.get(params).promise();
        // go through bases here
        // look for base referred to as baseName in event
        // get s3 file path
        // get data demo feed
        // populate pdf template
        // return rendered pdf
        
        return data.Item;


    } catch(err) {
        console.log(err);
        return "Error populating base report template";
    }
};



