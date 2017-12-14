let sdk=require('./src/sdk/sdk');
// let CSR=require('./src/PKI/PKI');
// CSR.PKI();
// let HASH = new Buffer('kuyt2ozKtz23sxrjrpaYREQKvhQfHRTIdJ5cnr9sQcY=','base64');
// let hash = HASH.toString('hex');
// console.log('文件哈希base64解码',hash);
// let plain=hash;
// let encrypts=sdk.priEncrypt(plain);
// let decrypts=sdk.pubDecrypt(encrypts);
// let encrypt=sdk.pubEncrypt(plain);
// let decrypt=sdk.priDecrypt(encrypt);

// let sign=sdk.sign(plain);
// let verify=sdk.verify(plain,sign);

//私钥加密
let encrypts=sdk.priEncrypt();
//公钥解密
let decrypts=sdk.pubDecrypt(encrypts);
//私钥签名
let sign=sdk.sign();


console.log('********************');
console.log('---私钥加密公钥解密---');
console.log('加密结果--',encrypts);
console.log('解密结果--',decrypts);
console.log('********************');
console.log('------私钥签名-------');
console.log('签名结果--',sign);
console.log('-------------------');
console.log('********************');

var domain = 'baidu.com';

sdk.csrgen(domain, {
	outputDir: __dirname,
	read: true,
	country:'CN',
	company: 'Example, Inc.',
	email: 'joe@foobar.com'
}, function (err, keys) {
	console.log('CSR created!')
	console.log('key: ' + keys.private);
	console.log('csr: ' + keys.csr);
});