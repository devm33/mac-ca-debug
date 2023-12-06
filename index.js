#!/usr/bin/env node

const macCa = require('@roamhq/mac-ca');
const certs = macCa.all(macCa.der2.pem).filter(c => c !== undefined);
for (const cert of certs) {
  console.log(cert);
}
console.log(`Read ${certs.length} certificates from Mac keychain`);