var forge = require("node-forge");

let pk = forge.pki.publicKeyFromPem("-----BEGIN RSA PUBLIC KEY-----\
MIIBCgKCAQEAks0dL1SBWSgkQB5IEiZjAeKjlsL1amSRTNK1/h9VY6vSk3mfKv5Y\
OzsmkNgKB2enfKuDxsHqBXFJuj699l+RQuPsWvNUettOvChdHNRbS6P3FHJmfaB0\
axZckrEfAkAuGzMKCfaUkiuhpNtK5R3TvLCn2tPPQ/saqt+irfsvTMu9ewSJMEh9\
ZL+otFv+NZvzICtgEr/pBLFExNpirMqZ5NKY7V9GNF8x/SMdGt09L/6q0hOP+rhm\
rkZXIKmUdWP7MYtE0KAvBBjOnCwpHoA1W9NKmDp2k3rCTkikYp0owVHzURa+ihuN\
o6hnre0YbOBE8q1GAE28DkhjoC+GwZyYFwIDAQAB\
-----END RSA PUBLIC KEY-----");

let encode = function(message){
	var buffer = forge.util.createBuffer('256348950602', 'utf8');
var bytes = buffer.getBytes();

// encrypt data with a public key using RSAES PKCS#1 v1.5
var encrypted = pk.encrypt(bytes, 'RSAES-PKCS1-V1_5');

// base64-encode encrypted data to send to server
var b64Encoded = forge.util.encode64(encrypted);
console.log(b64Encoded)	
return b64Encoded
}

module.exports = {
	encode : encode
}
